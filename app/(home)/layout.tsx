import Nav from "../ui/Nav";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fit">
        {/* h-screen md:flex-row */}
      <div className="m-2">
        <Nav />
      </div>
      <div className="">{children}</div>
    </div>
  );
}