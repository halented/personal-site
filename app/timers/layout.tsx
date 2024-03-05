export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4 bg-black text-teal-400 h-screen">
            <div>{children}</div>
        </div>
    );
}