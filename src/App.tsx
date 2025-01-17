import Container from '@/components/layout/Container/Container';
import Header from '@/components/sections/Header';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';

function App() {
    return (
        <Container>
            <div className="print:m-0 space-y-8">
                <Header />
                <About />
                <Experience />
                <Education />
                <Projects />
            </div>
        </Container>
    );
}

export default App;
