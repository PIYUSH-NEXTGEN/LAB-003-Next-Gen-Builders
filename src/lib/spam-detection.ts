/**
 * Chat Spam Detection
 *
 * Client-side spam filter that checks messages before they are sent.
 * Blocks repetitive messages, link spam, scam keywords, and rate abuse.
 */

export type SpamCheckResult = {
  isSpam: boolean;
  reason: string;
};

const SCAM_KEYWORDS = [
  "send money first",
  "pay before meet",
  "western union",
  "wire transfer",
  "gift card payment",
  "crypto payment only",
  "bitcoin only",
  "paytm first",
  "phonepe first",
  "gpay first",
  "upi before delivery",
  "advance payment required",
  "pay outside app",
  "pay outside platform",
  "bank transfer before",
  "click this link to pay",
  "lottery winner",
  "you have won",
  "congratulations you won",
  "claim your prize",
  "verify your account urgently",
];

/** Sliding window message history for rate/repetition checks */
const messageHistory: { text: string; timestamp: number }[] = [];
const MAX_HISTORY = 30;

function addToHistory(text: string) {
  messageHistory.push({ text: text.toLowerCase().trim(), timestamp: Date.now() });
  if (messageHistory.length > MAX_HISTORY) {
    messageHistory.splice(0, messageHistory.length - MAX_HISTORY);
  }
}

/**
 * Check a message for spam before sending.
 * Call this before dispatching any chat message.
 */
export function checkMessageForSpam(text: string): SpamCheckResult {
  const trimmed = text.trim();
  if (!trimmed) {
    return { isSpam: false, reason: "" };
  }

  const lower = trimmed.toLowerCase();
  const now = Date.now();

  // 1. Scam keyword check
  for (const keyword of SCAM_KEYWORDS) {
    if (lower.includes(keyword)) {
      return {
        isSpam: true,
        reason: `Message blocked: contains a known scam phrase ("${keyword}"). Use the in-app payment system instead.`,
      };
    }
  }

  // 2. ALL CAPS flood (>80% uppercase, >30 chars)
  if (trimmed.length > 30) {
    const letters = trimmed.replace(/[^a-zA-Z]/g, "");
    const upperCount = trimmed.replace(/[^A-Z]/g, "").length;
    if (letters.length > 0 && upperCount / letters.length > 0.8) {
      return {
        isSpam: true,
        reason: "Message blocked: excessive use of capital letters. Please write normally.",
      };
    }
  }

  // 3. Link spam (3+ URLs in one message)
  const linkCount = (trimmed.match(/https?:\/\//gi) || []).length;
  if (linkCount >= 3) {
    return {
      isSpam: true,
      reason: "Message blocked: too many links in a single message.",
    };
  }

  // 4. Repetition check (same message 3+ times in 60 seconds)
  const recentWindow = now - 60_000;
  const recentSame = messageHistory.filter(
    (m) => m.timestamp > recentWindow && m.text === lower,
  ).length;
  if (recentSame >= 2) {
    return {
      isSpam: true,
      reason: "Message blocked: you've sent this same message too many times. Please wait.",
    };
  }

  // 5. Rate limiting (>10 messages in 30 seconds)
  const rateWindow = now - 30_000;
  const recentCount = messageHistory.filter((m) => m.timestamp > rateWindow).length;
  if (recentCount >= 10) {
    return {
      isSpam: true,
      reason: "Slow down! You're sending messages too quickly. Please wait a few seconds.",
    };
  }

  // Record this message in history
  addToHistory(trimmed);

  return { isSpam: false, reason: "" };
}

/**
 * Reset the spam detection history (useful for testing or session reset).
 */
export function resetSpamHistory() {
  messageHistory.length = 0;
}
