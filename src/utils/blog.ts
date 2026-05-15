/**
 * Calculates the estimated reading time for a given text.
 * @param content The text or markdown content to analyze.
 * @param wordsPerMinute Average reading speed (default 200).
 * @returns The estimated reading time in minutes (minimum 1).
 */
export function calculateReadTime(content: string, wordsPerMinute: number = 200): number {
  // Remove markdown syntax and extra whitespace
  const plainText = content
    .replace(/[#*`_~[\]()]/g, "") // Remove common markdown symbols
    .replace(/<[^>]*>/g, "")      // Remove HTML tags if any
    .trim();

  const wordCount = plainText.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  return Math.max(1, minutes);
}
