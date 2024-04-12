export const sunCurve =
    <svg viewBox="0 0 500 500" fill='#A02424'>
        <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#40545C" />
                <stop offset="50%" stopColor="black" stopOpacity=".3" />
                <stop offset="100%" stopColor="#A02424" />
            </linearGradient>
        </defs>
        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
        <text width="500">
            <textPath alignmentBaseline="top" xlinkHref="#curve" fill='url(#gradient)'>
                AUTER-FRIDAY FOREVER
            </textPath>
        </text>
    </svg>;