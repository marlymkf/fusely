import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Together from "./components/Together/Together";
import Partners from "./components/Partners/Partners";
import Detailed from "./components/Detailed/Detailed";
import Solutions from "./components/Solutions/Solutions";
import Team from "./components/Team/Team";
import Choose from "./components/Choose/Choose";
import From from "./components/From/From";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Container>
        <Header />
        <Together />
        <Partners />
        <Detailed />
        <Solutions />
        <Team />
        <Choose />
        <From />
        <Banner />
      </Container>
      <Footer />
    </>
  );
}

export default App;
