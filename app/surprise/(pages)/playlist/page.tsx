import { surprisePageContainer } from "@/app/lib/styles";

function Page() {
    return (
        <div className={surprisePageContainer}>
            <iframe className='rounded-xl' src="https://open.spotify.com/embed/playlist/0j17qGMPCdY5uAiHyyX2L6?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
        </div>
    );
}

export default Page;
