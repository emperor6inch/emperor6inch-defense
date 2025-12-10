import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Product } from "@/lib/types";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative bg-secondary/20 backdrop-blur-sm rounded-none overflow-hidden border border-white/5 hover:border-accent transition-all duration-0 flex flex-col h-full">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-white/30 group-hover:border-accent transition-colors duration-0" />
            <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-white/30 group-hover:border-accent transition-colors duration-0" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-white/30 group-hover:border-accent transition-colors duration-0" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-white/30 group-hover:border-accent transition-colors duration-0" />

            {/* Image Placeholder */}
            <div className="relative h-64 w-full bg-black overflow-hidden border-b border-white/10">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-0 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />

                {/* Scanline on hover */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,69,0,0.1)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity duration-0 pointer-events-none" />

                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md px-3 py-1 border border-accent/30">
                    <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">
                        {product.id.split('-')[0]} // SERIES
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-accent transition-colors duration-0 uppercase tracking-tight">
                    {product.name}
                </h3>
                <p className="text-accent text-xs font-mono mb-4 uppercase tracking-widest opacity-80 font-bold">
                    {product.tagline}
                </p>
                <p className="text-gray-400 mb-6 line-clamp-3 flex-grow text-sm leading-relaxed border-l-2 border-white/10 pl-4 font-mono">
                    {product.description}
                </p>

                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {product.targets.slice(0, 2).map((target) => (
                            <span key={target} className="inline-flex items-center px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-white/5 text-gray-300 border border-white/10 group-hover:border-accent/30 transition-colors duration-0">
                                <ShieldCheck className="w-3 h-3 mr-1 text-accent" />
                                {target}
                            </span>
                        ))}
                    </div>

                    <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center justify-between w-full px-4 py-3 bg-white/5 hover:bg-accent hover:text-primary text-gray-300 font-mono text-sm uppercase tracking-wider transition-all duration-0 group/link border border-white/5 hover:border-accent font-bold"
                    >
                        <span>View Specs</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-0 group-hover/link:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
