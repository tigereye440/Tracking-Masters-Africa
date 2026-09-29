export async function safeQuery<T>(query: () => Promise<T>, fallback: T): Promise<T> {
    try {
        return await query();
    } catch (error) {
        console.error("Database query failed:", error);
        return fallback;
    }
}