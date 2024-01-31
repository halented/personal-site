function TextComponent({ innerHTML }: { innerHTML: string }) {
    return (
        <div className="text-center" dangerouslySetInnerHTML={{ __html: innerHTML }}>
        </div>
    );
}

export default TextComponent;
