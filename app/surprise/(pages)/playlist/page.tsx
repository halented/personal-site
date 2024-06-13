import { surprisePageContainer } from "@/app/lib/styles";

function Page() {
    return (
        <div className={surprisePageContainer}>
            <iframe className='rounded-xl' src="https://open.spotify.com/embed/playlist/5acLVR0Se3vfxyNk5v3S3y?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
        </div>
    );
}

export default Page;
