/**
 * Trust Score Engine
 *
 * Computes a 0–100 trust score for any user based on verifiable signals.
 * Used on product pages, profiles, and the dashboard.
 */

export type TrustTier = "excellent" | "good" | "fair" | "new";

export type TrustScoreBreakdown = {
  emailVerified: number;
  profileComplete: number;
  accountAge: number;
  transactions: number;
  listings: number;
  noFraudFlags: number;
  sellerRating: number;
};

export type TrustReport = {
  score: number;
  tier: TrustTier;
  label: string;
  breakdown: TrustScoreBreakdown;
};

export type TrustInput = {
  emailVerified?: boolean;
  hasBio?: boolean;
  hasCollege?: boolean;
  hasMajor?: boolean;
  /** ISO date string or epoch ms */
  createdAt?: string | number | null;
  /** Number of completed buy/sell transactions */
  transactionCount?: number;
  /** Number of listings the user has posted */
  listingCount?: number;
  /** Whether the user has any active fraud flags */
  hasFraudFlags?: boolean;
  /** Average seller rating 0–5 */
  avgRating?: number;
};

const MAX_POINTS: TrustScoreBreakdown = {
  emailVerified: 15,
  profileComplete: 15,
  accountAge: 15,
  transactions: 20,
  listings: 10,
  noFraudFlags: 15,
  sellerRating: 10,
};

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

export function computeTrustScore(input: TrustInput): TrustReport {
  const breakdown: TrustScoreBreakdown = {
    emailVerified: 0,
    profileComplete: 0,
    accountAge: 0,
    transactions: 0,
    listings: 0,
    noFraudFlags: 0,
    sellerRating: 0,
  };

  // 1. Email verified (+15)
  if (input.emailVerified) {
    breakdown.emailVerified = MAX_POINTS.emailVerified;
  }

  // 2. Profile completeness (+15) — 5 pts each for bio, college, major
  let profilePts = 0;
  if (input.hasBio) profilePts += 5;
  if (input.hasCollege) profilePts += 5;
  if (input.hasMajor) profilePts += 5;
  breakdown.profileComplete = profilePts;

  // 3. Account age (+15) — linear scale, 0 at day 0 → 15 at 180 days
  if (input.createdAt) {
    const created =
      typeof input.createdAt === "number"
        ? input.createdAt
        : new Date(input.createdAt).getTime();
    if (Number.isFinite(created)) {
      const ageDays = (Date.now() - created) / (1000 * 60 * 60 * 24);
      breakdown.accountAge = Math.round(clamp(ageDays / 180, 0, 1) * MAX_POINTS.accountAge);
    }
  }

  // 4. Successful transactions (+20) — 5 pts per transaction, capped at 20
  breakdown.transactions = clamp(
    (input.transactionCount ?? 0) * 5,
    0,
    MAX_POINTS.transactions,
  );

  // 5. Listings posted (+10) — 2 pts each, capped at 10
  breakdown.listings = clamp(
    (input.listingCount ?? 0) * 2,
    0,
    MAX_POINTS.listings,
  );

  // 6. No fraud flags (+15)
  breakdown.noFraudFlags = input.hasFraudFlags ? 0 : MAX_POINTS.noFraudFlags;

  // 7. Seller rating (+10) — proportional to avg rating (0–5 → 0–10)
  if (input.avgRating != null && input.avgRating > 0) {
    breakdown.sellerRating = Math.round(clamp(input.avgRating / 5, 0, 1) * MAX_POINTS.sellerRating);
  }

  const score = Object.values(breakdown).reduce((a, b) => a + b, 0);

  let tier: TrustTier;
  let label: string;
  if (score >= 80) {
    tier = "excellent";
    label = "Excellent";
  } else if (score >= 60) {
    tier = "good";
    label = "Good";
  } else if (score >= 30) {
    tier = "fair";
    label = "Fair";
  } else {
    tier = "new";
    label = "New";
  }

  return { score, tier, label, breakdown };
}

export function trustTierColor(tier: TrustTier) {
  switch (tier) {
    case "excellent":
      return { bg: "bg-emerald-500/15", text: "text-emerald-600", ring: "ring-emerald-500/30" };
    case "good":
      return { bg: "bg-blue-500/15", text: "text-blue-600", ring: "ring-blue-500/30" };
    case "fair":
      return { bg: "bg-amber-500/15", text: "text-amber-600", ring: "ring-amber-500/30" };
    case "new":
      return { bg: "bg-zinc-500/15", text: "text-zinc-500", ring: "ring-zinc-500/30" };
  }
}
