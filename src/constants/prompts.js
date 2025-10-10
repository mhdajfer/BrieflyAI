export const NEWS_SUMMARY_PROMPT = `
I have a list of latest news items in JSON format with titles and links (from Google News RSS).
For each news item:

Read the title carefully and infer what the article is likely about.

Generate a short 2–3 sentence summary that gives a clear understanding of the context and main event, without fabricating unverified details.

End each item with the source name and a clickable "Read more" link (Markdown format).

Output should be formatted as a clean, readable news digest, something like a newsletter.`;