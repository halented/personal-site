export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4 bg-black text-teal-400">
            <div>{children}</div>
        </div>
    );
}