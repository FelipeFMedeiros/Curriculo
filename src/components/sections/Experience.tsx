interface ExperienceItemProps {
    period: string;
    title: string;
    url?: string;
    description: string[];
    technologies?: string[];
    isOngoing?: boolean;
}

const ExperienceItem = ({ period, title, url, description, technologies, isOngoing }: ExperienceItemProps) => {
    return (
        <div className="group p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="text-lg font-medium text-gray-900">
                        {url ? (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-600 transition-colors flex items-center gap-2"
                            >
                                {title}
                                <svg
                                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </a>
                        ) : (
                            title
                        )}
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">{period}</span>
                </div>
                {isOngoing && (
                    <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-full">Atual</span>
                )}
            </div>

            <div className="space-y-2">
                {description.map((item, index) => (
                    <p key={index} className="text-gray-600 text-sm">
                        {item}
                    </p>
                ))}
            </div>

            {technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

const Experience = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Experiência Profissional</h2>
            <div className="grid gap-4">
                <ExperienceItem
                    period="2024 - Presente"
                    title="PouPou Legal"
                    url="https://poupoulegal.com.br"
                    description={[
                        'Desenvolvimento e manutenção da plataforma de afiliados líder em ofertas e cupons de desconto.',
                        'Implementação de sistemas de gerenciamento de ofertas, integração com APIs de grandes varejistas e desenvolvimento de painéis administrativos personalizados.',
                        'Responsável pela arquitetura e desenvolvimento full-stack do projeto, garantindo performance e escalabilidade.',
                    ]}
                    technologies={['React.js', 'Node.js', 'MySQL', 'Git', 'REST API', 'JavaScript']}
                    isOngoing
                />
                <ExperienceItem
                    period="2024 - Presente"
                    title="DNA do Brasil - IDECACE"
                    url="https://www.idecace.org.br/copia-programas"
                    description={[
                        'Desenvolvimento do sistema de gestão para programa governamental de inclusão social através do esporte.',
                        'Implementação de plataforma EAD com métricas avaliativas complexas para mais de 46 mil alunos em 63 municípios.',
                        'Criação de dashboards analíticos para acompanhamento de indicadores sociais e esportivos.',
                    ]}
                    technologies={[
                        'C#',
                        '.NET Core',
                        'Razor Pages',
                        'SQL Server',
                        'JavaScript',
                        'Bootstrap',
                        'REST API',
                        'Entity Framework',
                        'Azure DevOps',
                    ]}
                    isOngoing
                />
            </div>
        </section>
    );
};

export default Experience;
