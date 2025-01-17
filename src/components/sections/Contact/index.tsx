// src/components/sections/Contact/index.tsx
import { Copy, Github, Instagram, Linkedin, Check, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

interface ContactItemProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    copyable?: boolean;
    value?: string;
}

const ContactItem = ({ href, icon, label, copyable = false, value }: ContactItemProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (value) {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="group flex items-center gap-2">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
                {icon}
                <span className="text-sm">{label}</span>
            </a>
            {copyable && (
                <button
                    onClick={handleCopy}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded"
                    title="Copiar"
                >
                    {copied ? (
                        <Check size={14} className="text-green-600" />
                    ) : (
                        <Copy size={14} className="text-gray-400" />
                    )}
                </button>
            )}
        </div>
    );
};

const Contact = () => {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <ContactItem
                href="mailto:felipeff_freitas@outlook.com"
                icon={<Mail size={16} />}
                label="felipeff_freitas@outlook.com"
                copyable
                value="felipeff_freitas@outlook.com"
            />
            <ContactItem
                href="tel:+5524992807420"
                icon={<Phone size={16} />}
                label="(24) 99280-7420"
                copyable
                value="+5524992807420"
            />
            <ContactItem href="https://github.com/felipefmedeiros" icon={<Github size={16} />} label="Github" />
            <ContactItem
                href="https://www.linkedin.com/in/felipe-fmedeiros/"
                icon={<Linkedin size={16} />}
                label="LinkedIn"
            />
            <ContactItem
                href="https://instagram.com/felipef.medeiros"
                icon={<Instagram size={16} />}
                label="Instagram"
            />
        </div>
    );
};

export default Contact;
