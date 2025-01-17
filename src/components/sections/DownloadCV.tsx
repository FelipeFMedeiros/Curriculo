const DownloadCV = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed bottom-8 right-8 print:hidden">
            <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-lg group"
            >
                <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                </svg>
                <span>Baixar CV</span>
            </button>
        </div>
    );
};

export default DownloadCV;
