import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Product } from "@/lib/types";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative bg-secondary rounded-xl overflow-hidden border border-white/5 hover:border-accent-green/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-green/10 flex flex-col h-full">
            {/* Image Placeholder (or actual image if available) */}
            <div className="relative h-64 w-full bg-gray-800 overflow-hidden">
                {/* In a real app, use Next.js Image component here */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})`, backgroundColor: '#333' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-mono text-accent-green uppercase tracking-wider">
                        {product.id.split('-')[0]} Series
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-green transition-colors">
                    {product.name}
                </h3>
                <p className="text-accent-green text-sm font-medium mb-4 uppercase tracking-wide">
                    {product.tagline}
                </p>
                <p className="text-gray-400 mb-6 line-clamp-3 flex-grow">
                    {product.description}
                </p>

                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {product.targets.slice(0, 2).map((target) => (
                            <span key={target} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10">
                                <ShieldCheck className="w-3 h-3 mr-1 text-accent-green" />
                                {target}
                            </span>
                        ))}
                    </div>

                    <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center text-white font-semibold hover:text-accent-green transition-colors group/link"
                    >
                        View Specs
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
