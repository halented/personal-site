import { bubble } from "@/app/lib/styles";

function Bubble({ tailwindHeight, tailwindWidth, style }: { tailwindHeight: string, tailwindWidth: string, style?: string }) {
    return (
        <div className={`${bubble} ${tailwindHeight} ${tailwindWidth} ${style ? style : null}`}></div>
    );
}

export default Bubble;
