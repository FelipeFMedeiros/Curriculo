import Contact from '@components/sections/Contact';
import { Calendar, MapPin, Home } from 'lucide-react';

const Header = () => {
    return (
        <header className="border-b pb-4">
            <h1 className="text-4xl font-bold text-gray-900">Felipe Freitas de Medeiros</h1>
            <div className="mt-2 text-gray-600 space-y-3">
                <p className="text-lg">Desenvolvedor Full Stack & Estudante de Ciências da Computação</p>
                <div className="text-sm space-x-4 flex items-center flex-wrap gap-4">
                    <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        20 anos
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        Natal, RN
                    </span>
                    <span>•</span>
                    <span className="text-gray-500 flex items-center gap-1">
                        <Home size={16} />
                        Natural de Petrópolis, RJ
                    </span>
                </div>
                <Contact />
            </div>
        </header>
    );
};

export default Header;
