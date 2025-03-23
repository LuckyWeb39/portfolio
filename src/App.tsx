import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {FormContact} from "./layout/sections/formContact/FormContact.tsx";
import {Particle} from "./components/particle/Particle.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <FormContact/>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}

export default App
