
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contatct";
import { Footer } from "./components/Footer";
import { Apps } from "./components/Apps";
import { Portifolio } from "./components/Portifolio";

export default function Home() {
  return (
<main>
  <Portifolio />
  <Apps />
  <Clients />
<Contact />
<Footer />
</main>
  )
}
