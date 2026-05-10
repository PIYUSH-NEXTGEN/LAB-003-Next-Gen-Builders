/**
 * Server-side Fraud Detection
 *
 * Heuristic checks applied to listings to detect potential fraud.
 * Designed to run on the backend when listings are created or audited.
 */

export type FraudSeverity = "low" | "medium" | "high";

export type FraudReport = {
  flagged: boolean;
  severity: FraudSeverity;
  reasons: string[];
  score: number;
};

export type FraudCheckInput = {
  title: string;
  description: string;
  price: number;
  category: string;
  /** Whether the seller has a verified email */
  sellerVerified: boolean;
  /** How old the seller's account is in days */
  accountAgeDays: number;
  /** Number of listings the seller posted in the last 10 minutes */
  recentListingCount: number;
  /** Hashes of the seller's existing listing titles */
  existingTitleHashes?: string[];
};

const OFF_PLATFORM_PATTERNS = [
  /whatsapp/i,
  /telegram/i,
  /\bpaytm\s+first\b/i,
  /\bphonepe\s+first\b/i,
  /\bgpay\s+first\b/i,
  /\bsend\s+money\s+first\b/i,
  /\bpay\s+outside\b/i,
  /\bpay\s+before\s+meet/i,
  /\bdm\s+on\s+insta/i,
  /\bcall\s+me\s+at\b/i,
  /\bcontact\s+on\b/i,
  /\bwire\s+transfer/i,
  /\bcrypto\s+only/i,
  /\bbitcoin\s+only/i,
  /\bgift\s+card/i,
];

const ELECTRONICS_KEYWORDS = /macbook|iphone|ipad|laptop|airpods|galaxy|pixel|oneplus|samsung|dell|hp\s+pavilion|asus|lenovo/i;

/**
 * Simple hash for duplicate detection
 */
function simpleHash(text: string): string {
  const normalized = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    hash = ((hash << 5) - hash + normalized.charCodeAt(i)) | 0;
  }
  return hash.toString(36);
}

export function detectFraud(input: FraudCheckInput): FraudReport {
  const reasons: string[] = [];
  let score = 0;

  const blob = `${input.title}\n${input.description}`.toLowerCase();

  // 1. Off-platform contact patterns
  for (const pattern of OFF_PLATFORM_PATTERNS) {
    if (pattern.test(blob)) {
      score += 20;
      reasons.push("Listing pushes communication off-platform — a common scam tactic.");
      break; // only flag once
    }
  }

  // 2. Rapid-fire posting (>5 in 10 minutes)
  if (input.recentListingCount > 5) {
    score += 25;
    reasons.push(`Seller posted ${input.recentListingCount} listings in the last 10 minutes — possible spam.`);
  } else if (input.recentListingCount > 3) {
    score += 10;
    reasons.push("Multiple listings posted in quick succession.");
  }

  // 3. Price anomaly for electronics
  if (
    input.category === "Electronics" &&
    ELECTRONICS_KEYWORDS.test(input.title) &&
    input.price > 0 &&
    input.price < 500
  ) {
    score += 30;
    reasons.push("Premium electronics listed at an implausibly low price.");
  }

  // 4. New account + high-value listing
  if (!input.sellerVerified && input.price >= 10000) {
    score += 20;
    reasons.push("High-value item from an unverified new account.");
  } else if (input.accountAgeDays < 1 && input.price >= 5000) {
    score += 15;
    reasons.push("Expensive item posted by a brand-new account (created today).");
  }

  // 5. Duplicate listing detection
  if (input.existingTitleHashes?.length) {
    const titleHash = simpleHash(input.title);
    const duplicates = input.existingTitleHashes.filter((h) => h === titleHash).length;
    if (duplicates > 0) {
      score += 18;
      reasons.push("Near-identical listing title already exists from this seller.");
    }
  }

  // 6. Excessive external links
  const linkCount = (blob.match(/https?:\/\//g) || []).length;
  if (linkCount >= 3) {
    score += 15;
    reasons.push("Listing contains multiple external links — suspicious for a campus listing.");
  }

  // 7. Phone number in listing text
  if (/\b\d{10,}\b/.test(blob) || /\+91\s*\d/.test(blob)) {
    score += 12;
    reasons.push("Phone number detected in listing text — use in-app messaging instead.");
  }

  const flagged = score >= 20;
  let severity: FraudSeverity = "low";
  if (score >= 45) severity = "high";
  else if (score >= 25) severity = "medium";

  return {
    flagged,
    severity,
    reasons: reasons.slice(0, 6),
    score,
  };
}

export { simpleHash };
