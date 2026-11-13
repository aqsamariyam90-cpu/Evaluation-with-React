import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Architecture from "./components/Architecture";
import Benchmark from "./components/Benchmark";
import AccessForm from "./components/AccessForm";
import Footer from "./components/Footer";
import Deployments from "./components/Deployments";
function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Stats />
            <Architecture />
            <Benchmark />
            <Deployments />
            <AccessForm />
            <Footer />
          
        </>
    );
}
export default App;