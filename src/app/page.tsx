
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contatct";
import { Footer } from "./components/Footer";
import { Apps } from "./components/Apps";
import { SitesImobiliarias } from "./components/SitesImobiliarias";
import { CreationAndDevelopment } from "./components/CreationAndDevelopment";
import { NavBar } from "./components/NavBar";
import { SitesDiversos } from "./components/SitesDiversos";

export default function Home() {
  return (
<main>
  <NavBar />

  <CreationAndDevelopment />
  <SitesImobiliarias />
  <SitesDiversos />
  <Apps />
  <Clients />
<Contact />
<Footer />
</main>
  )
}
