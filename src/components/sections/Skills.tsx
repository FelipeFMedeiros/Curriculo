interface Skill {
    name: string;
    level: number; // 1 a 5
    yearsOfExperience?: number;
}

interface SkillCategoryProps {
    title: string;
    skills: Skill[];
}

const SkillLevel = ({ level }: { level: number }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className={`w-2 h-2 rounded-full ${index <= level ? 'bg-gray-700' : 'bg-gray-200'}`} />
            ))}
        </div>
    );
};

const SkillItem = ({ name, level, yearsOfExperience }: Skill) => {
    return (
        <div className="group flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
                <span className="text-gray-700">{name}</span>
                {yearsOfExperience && (
                    <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        {yearsOfExperience} {yearsOfExperience === 1 ? 'ano' : 'anos'}
                    </span>
                )}
            </div>
            <SkillLevel level={level} />
        </div>
    );
};

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <div className="flex-1 border-b border-gray-200" />
            </div>
            <div className="grid gap-1">
                {skills.map((skill, index) => (
                    <SkillItem key={index} {...skill} />
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Habilidades Técnicas</h2>
            <div className="grid gap-8 md:grid-cols-2">
                <SkillCategory
                    title="Front-end"
                    skills={[
                        { name: 'React.js', level: 5, yearsOfExperience: 2 },
                        { name: 'TypeScript', level: 4, yearsOfExperience: 1 },
                        { name: 'JavaScript', level: 5, yearsOfExperience: 2 },
                        { name: 'Tailwind CSS', level: 4, yearsOfExperience: 1 },
                        { name: 'HTML5/CSS3', level: 5, yearsOfExperience: 3 },
                        { name: 'Next.js', level: 1, yearsOfExperience: 1 },
                    ]}
                />
                <SkillCategory
                    title="Back-end"
                    skills={[
                        { name: 'C#/.NET', level: 4, yearsOfExperience: 1 },
                        { name: 'Node.js', level: 4, yearsOfExperience: 2 },
                        { name: 'REST APIs', level: 4, yearsOfExperience: 2 },
                        { name: 'SQL Server', level: 3, yearsOfExperience: 1 },
                        { name: 'MySQL', level: 4, yearsOfExperience: 1 },
                        { name: 'MongoDB', level: 2, yearsOfExperience: 1 },
                    ]}
                />
                <SkillCategory
                    title="DevOps & Ferramentas"
                    skills={[
                        { name: 'Git/GitHub', level: 5, yearsOfExperience: 2 },
                        { name: 'Figma', level: 4, yearsOfExperience: 2 },
                        { name: 'Github Actions', level: 3, yearsOfExperience: 1 },
                        { name: 'VS Code', level: 5, yearsOfExperience: 3 },
                        { name: 'Visual Studio', level: 4, yearsOfExperience: 1 },
                    ]}
                />
                <SkillCategory
                    title="Soft Skills & Metodologias"
                    skills={[
                        { name: 'Scrum/Agile', level: 4 },
                        { name: 'Clean Code', level: 4 },
                        { name: 'UI/UX Design', level: 3 },
                        { name: 'Trabalho em Equipe', level: 5 },
                        { name: 'Resolução de Problemas', level: 4 },
                    ]}
                />
            </div>
        </section>
    );
};

export default Skills;
