interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <main className="max-w-4xl mx-auto p-8 bg-white min-h-screen">
            <div className="space-y-8">{children}</div>
        </main>
    );
};

export default Container;
