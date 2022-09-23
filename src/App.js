import Layout from "./components/Layout/Layout";
import Navbar from "./components/Nabvar/Navbar";
import Footer from "./components/Footer/Footer";
import Routes from "./Routes/Routes"

function App() {
  return (
  <Layout>
  <Navbar/>
  <Routes/>
  <Footer/>
  </Layout>
  );
}

export default App;
