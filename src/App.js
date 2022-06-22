import { Reset } from "./styles/reset";
import { Theme } from "./styles/theme";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollButton } from "./components/ScrollButton";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
      <ScrollButton />
      <Reset />
      <Theme />
    </>
  );
}
