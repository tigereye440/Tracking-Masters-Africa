import type { TikTokVideo } from "@/lib/data/titkok-videos";

export default function TiktokEmbed({ video }: { video: TikTokVideo }) {
    return (
        <div className="overflow-hidden rounded-lg border border-brand-steel/70 bg-white">
            <iframe
                src={`https://www.tiktok.com/player/v1/${video.id}?music_info=0&description=0}`}
                title= {video.caption}
                className="aspect-9/16 w-full"
                loading="lazy"
                allow="encrypted-media"
            />
            <p className="p-2 text-center text-xs text-brand-steel">{video.caption}</p>

        </div>
    )
}


