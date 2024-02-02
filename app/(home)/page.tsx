import Contact from "../ui/siteSections/Contact";
import Landing from "../ui/siteSections/Landing";
import Portfolio from "../ui/siteSections/Portfolio";

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden">
        <Landing />
        <Portfolio />
        <Contact />
      </div>
    </main>
  )
}

// put this back 
