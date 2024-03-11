import Approach from "./Approach";
import Artists from "./Artists";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Main() {
  return (
    <main className="absolute lg:top-[54rem] xl:top-[57rem] 2xl:top-[59rem]">
      <Clients />
      <Artists />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
