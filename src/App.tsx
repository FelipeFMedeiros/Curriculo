// src/App.tsx
import Container from '@components/layout/Container';
import Header from '@components/sections/Header';
import About from '@components/sections/About';
import Education from '@components/sections/Education';

function App() {
    return (
        <Container>
            <div className="print:m-0 space-y-8">
                <Header />
                <About />
                <Education />
            </div>
        </Container>
    );
}

export default App;
