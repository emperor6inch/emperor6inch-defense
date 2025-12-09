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
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-accent-green text-black hover:bg-green-400 focus:ring-accent-green",
        secondary: "bg-white text-black hover:bg-gray-200 focus:ring-white",
        outline: "border border-accent-green text-accent-green hover:bg-accent-green/10 focus:ring-accent-green",
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
