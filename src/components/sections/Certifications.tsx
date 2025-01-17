interface CertificationProps {
    title: string;
    organization: string;
    date: string;
    credentialId?: string;
    credentialUrl?: string;
    expirationDate?: string;
}

const CertificationItem = ({
    title,
    organization,
    date,
    credentialId,
    credentialUrl,
    expirationDate,
}: CertificationProps) => {
    return (
        <div className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-all">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-medium text-gray-900">{title}</h3>
                    <p className="text-gray-600 text-sm">{organization}</p>
                </div>
                {credentialUrl && (
                    <a
                        href={credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        title="Verificar Credencial"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </a>
                )}
            </div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                <span>Emitido em: {date}</span>
                {expirationDate && <span>Expira em: {expirationDate}</span>}
                {credentialId && <span className="font-mono text-xs">ID: {credentialId}</span>}
            </div>
        </div>
    );
};

const Certifications = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Certificações</h2>
            <div className="grid gap-4 md:grid-cols-2">
                <CertificationItem
                    title="Scrum Foundation Professional Certificate"
                    organization="CertiProf"
                    date="Janeiro 2024"
                    credentialId="123456789"
                    credentialUrl="https://certiprof.com/verify/123456789"
                />
                {/* Adicione mais certificações aqui */}
            </div>
        </section>
    );
};

export default Certifications;
