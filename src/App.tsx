import Container from '@/components/layout/Container/Container';
import Header from '@/components/sections/Header';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import PersonalProjects from './components/sections/PersonalProjects';
import Skills from './components/sections/Skills';
import Languages from './components/sections/Languages';
import DownloadCV from './components/sections/DownloadCV';

function App() {
    return (
        <>
            <Container>
                <div className="print:m-0 space-y-8">
                    <Header />
                    <About />
                    <Experience />
                    <Education />
                    <Projects />
                    <PersonalProjects />
                    <Skills />
                    <Languages />
                    {/* <Certifications /> */}
                </div>
            </Container>
            <DownloadCV />
        </>
    );
}

export default App;
