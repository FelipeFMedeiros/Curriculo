// src/components/sections/Education/index.tsx
interface TimelineItemProps {
    period: string;
    title: string;
    institution: string;
    location: string;
    description?: string;
    isOngoing?: boolean;
}

const TimelineItem = ({ period, title, institution, location, description, isOngoing }: TimelineItemProps) => {
    return (
        <div className="relative pb-8">
            {/* Linha vertical */}
            <div className="absolute left-0 top-0 ml-2 h-full w-0.5 bg-gray-200" />

            {/* Círculo indicador */}
            <div
                className={`absolute left-0 mt-1.5 h-4 w-4 rounded-full border-2 ${
                    isOngoing ? 'border-gray-900 bg-white' : 'border-gray-200 bg-gray-100'
                }`}
            />

            {/* Conteúdo */}
            <div className="ml-8">
                <span className="text-sm text-gray-500 font-medium">{period}</span>
                <h3 className="text-lg font-medium text-gray-900 mt-1">{title}</h3>
                <div className="text-gray-600">
                    <p className="font-medium">{institution}</p>
                    <p className="text-sm italic">{location}</p>
                    {description && <p className="mt-2 text-gray-600">{description}</p>}
                </div>
            </div>
        </div>
    );
};

const Education = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Formação Acadêmica</h2>
            <div className="relative">
                <TimelineItem
                    period="2023 - Cursando atualmente"
                    title="Bacharelado em Ciências da Computação"
                    institution="Universidade do Estado do Rio Grande do Norte (UERN)"
                    location="Natal, RN"
                    description="Cursando o 5º período, com foco em desenvolvimento de software e participação ativa em projetos de extensão universitária."
                    isOngoing
                />
                <TimelineItem
                    period="2020 - 2022"
                    title="Ensino Médio"
                    institution="Colégio de Aplicação da Universidade Católica de Petrópolis (CAUCP)"
                    location="Petrópolis, RJ"
                />
                {/* Aqui podemos adicionar os cursos relevantes que você fez/está fazendo */}
            </div>
        </section>
    );
};

export default Education;
