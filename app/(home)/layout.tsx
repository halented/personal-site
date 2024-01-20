import Nav from "../ui/common/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Nav />
            <div>{children}</div>
        </div>
    );
}