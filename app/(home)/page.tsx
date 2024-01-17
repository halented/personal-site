import Contact from "../ui/Contact";
import Landing from "../ui/Landing";
import Portfolio from "../ui/Portfolio";

export default function Home() {
  return (
    <main>
      <div className="mt-14">
        <Landing />
        <Portfolio />
        <Contact />
      </div>
    </main>
  )
}
