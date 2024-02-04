
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contatct";
import { Footer } from "./components/Footer";
import { Apps } from "./components/Apps";
import { Portifolio } from "./components/Portifolio";
import { SitesImobiliarias } from "./components/SitesImobiliarias";
import { CreationAndDevelopment } from "./components/CreationAndDevelopment";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
<main>
  <NavBar />
  <CreationAndDevelopment />
  <SitesImobiliarias />
  <Portifolio />
  <Apps />
  <Clients />
<Contact />
<Footer />
</main>
  )
}
