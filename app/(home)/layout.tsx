import Nav from "../ui/Nav";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen md:flex-row md:overflow-hidden">
      <div className="w-full flex-none m-2">
        <Nav />
      </div>
      <div className="">{children}</div>
    </div>
  );
}