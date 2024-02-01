function TextComponent({ innerHTML, style }: { innerHTML: string, style?: string }) {
    return (
        <div className={style} dangerouslySetInnerHTML={{ __html: innerHTML }}>
        </div>
    );
}

export default TextComponent;
