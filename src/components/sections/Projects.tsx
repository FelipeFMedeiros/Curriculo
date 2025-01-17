interface ProjectProps {
    title: string;
    period: string;
    supervisor?: string;
    description: string[];
    achievements?: string[];
    isOngoing?: boolean;
}

const ProjectItem = ({ title, period, supervisor, description, achievements, isOngoing }: ProjectProps) => {
    return (
        <div className="relative pb-8">
            <div className="absolute left-0 top-0 ml-2 h-full w-0.5 bg-gray-200" />
            <div
                className={`absolute left-0 mt-1.5 h-4 w-4 rounded-full border-2 ${
                    isOngoing ? 'border-gray-900 bg-white' : 'border-gray-200 bg-gray-100'
                }`}
            />

            <div className="ml-8">
                <span className="text-sm text-gray-500 font-medium">{period}</span>
                <h3 className="text-lg font-medium text-gray-900 mt-1">{title}</h3>
                {supervisor && <p className="text-sm text-gray-600 italic">Supervisão: {supervisor}</p>}
                <div className="mt-2 space-y-2">
                    {description.map((item, index) => (
                        <p key={index} className="text-gray-600">
                            {item}
                        </p>
                    ))}
                </div>
                {achievements && (
                    <div className="mt-3 space-y-1">
                        {achievements.map((achievement, index) => (
                            <p key={index} className="text-sm text-gray-600 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                {achievement}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Projetos Acadêmicos</h2>
            <div className="relative">
                <ProjectItem
                    title="Web Cidadã"
                    period="2023.1 - 2023.2"
                    supervisor="Profa. Glaucia Campos"
                    description={[
                        'Projeto de inclusão digital focado em capacitar pessoas de comunidades periféricas, especialmente idosos, no uso de tecnologias digitais.',
                        'Desenvolvimento e aplicação de metodologias de ensino adaptadas para diferentes níveis de conhecimento tecnológico.',
                    ]}
                    achievements={[
                        'Impacto positivo na vida digital de dezenas de participantes',
                        'Desenvolvimento de material didático personalizado',
                        'Fortalecimento das habilidades de comunicação e ensino',
                    ]}
                />
                <ProjectItem
                    title="EBA (Eletrônica Básica de Arduino)"
                    period="2024.1"
                    supervisor="Prof. Felipe Oliveira"
                    description={[
                        'Projeto voltado para o ensino de Internet das Coisas e Sistemas Embarcados utilizando Arduino.',
                        'Ministração de aulas práticas e desenvolvimento de projetos hands-on para aprimoramento da lógica de programação.',
                    ]}
                    achievements={[
                        'Formação de aproximadamente 70 alunos',
                        'Desenvolvimento de diversos projetos práticos',
                        'Aprofundamento em IoT e automação',
                    ]}
                    isOngoing
                />
                <ProjectItem
                    title="CodeLab"
                    period="2024.2"
                    supervisor="Profa. Camila de Araújo e Profa. Adriana Takahashi"
                    description={[
                        'Projeto de iniciação à programação para alunos do ensino fundamental utilizando Scratch.',
                        'Desenvolvimento de metodologia lúdica para ensino de lógica de programação através da criação de jogos.',
                    ]}
                    achievements={[
                        'Capacitação de cerca de 60 alunos',
                        'Criação de material didático interativo',
                        'Desenvolvimento de habilidades de ensino e mentoria',
                    ]}
                    isOngoing
                />
            </div>
        </section>
    );
};

export default Projects;
