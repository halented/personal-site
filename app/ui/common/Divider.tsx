function Divider({ style, id }: { style?: string, id: string }) {

    return (
        <div className={`flex w-full scroll-mt-12 ${style}`} id={id}>
            <div className={`w-1/3 mt-4 mb-4 border-t-2 border-black`}></div>
        </div>
    );
}

export default Divider;
