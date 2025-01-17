interface PersonalProjectProps {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
}

const PersonalProjectItem = ({ title, description, technologies, githubUrl, liveUrl }: PersonalProjectProps) => {
    return (
        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <div className="flex gap-2">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            title="Ver código no Github"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                            title="Ver projeto online"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="text-xs px-2 py-1 bg-white text-gray-600 rounded border border-gray-200"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

const PersonalProjects = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Projetos Pessoais</h2>
            <div className="grid gap-4 md:grid-cols-2">
                {/* Aqui você pode adicionar seus projetos pessoais */}
                <PersonalProjectItem
                    title="Portfolio Pessoal"
                    description="Site pessoal desenvolvido com React e TypeScript, apresentando meus projetos e experiências de forma moderna e responsiva."
                    technologies={['React', 'TypeScript', 'Tailwind CSS', 'Vite']}
                    githubUrl="https://github.com/seu-usuario/portfolio"
                    liveUrl="https://seu-portfolio.com"
                />
                {/* Adicione mais projetos aqui */}
            </div>
        </section>
    );
};

export default PersonalProjects;
