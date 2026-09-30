import { supabaseAdmin } from "../supabase-admin";

export async function uploadImage(file: File, folder: string): Promise<string | null> {
    if (!file || file.size === 0) return null;

    const fileExt = file.name.split(".").pop();
    const fileName = `${folder}/${crypto.randomUUID()}.${fileExt}`;

    const { error } = await supabaseAdmin.storage
        .from("Uploads")
        .upload(fileName, file, { contentType: file.type });

    if (error) {
        console.error("Image upload failed:", error.message)
        return null
    }

    const { data } = supabaseAdmin.storage.from("Uploads").getPublicUrl(fileName);
    return data.publicUrl;

}