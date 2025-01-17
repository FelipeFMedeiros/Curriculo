interface LanguageProps {
    language: string;
    level: string;
    proficiency: number; // 0 to 100
}

const LanguageItem = ({ language, level, proficiency }: LanguageProps) => {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{language}</h3>
                <span className="text-sm text-gray-600">{level}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gray-700 transition-all duration-500 ease-out"
                    style={{ width: `${proficiency}%` }}
                />
            </div>
        </div>
    );
};

const Languages = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Idiomas</h2>
            <div className="space-y-4">
                <LanguageItem language="Português" level="Fluente" proficiency={100} />
                <LanguageItem language="Inglês" level="Intermediário" proficiency={45} />
                <LanguageItem language="Espanhol" level="Intermediário" proficiency={40} />
            </div>
        </section>
    );
};

export default Languages;
