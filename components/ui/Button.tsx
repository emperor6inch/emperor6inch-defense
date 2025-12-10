import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    href?: string;
    children: ReactNode;
    className?: string;
}

export default function Button({
    variant = "primary",
    href,
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-none font-mono uppercase tracking-widest transition-all duration-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed font-bold";

    const variants = {
        primary: "bg-accent text-primary hover:bg-white hover:text-black focus:ring-accent border border-transparent",
        secondary: "bg-white text-black hover:bg-gray-200 focus:ring-white border border-transparent",
        outline: "border-2 border-accent text-accent hover:bg-accent/10 focus:ring-accent",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
