export function calculateReadTime(body: string): string {
    const words =  body.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
}