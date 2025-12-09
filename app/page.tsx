import Hero from "@/components/ui/Hero";
import ProductCard from "@/components/features/ProductCard";
import { products } from "@/lib/products";
import Link from "next/link";
import { ArrowRight, Shield, Map, Users } from "lucide-react";

export default function Home() {
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen bg-primary relative">
            {/* Global Noise Overlay */}
            <div className="noise" />
            <div className="scanline" />

            <Hero
                title="Advanced Defense Solutions"
                subtitle="Securing borders and empowering nations with combat-proven technology designed for the harshest environments."
                backgroundImage="/images/hero-bg.png"
                ctaText="Deploy Systems"
                ctaLink="/products"
                secondaryCtaText="Intel Brief"
                secondaryCtaLink="/contact"
            />

            {/* Stats Section - Tactical Dashboard Style */}
            <section className="py-16 bg-secondary border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <div className="p-6 group hover:bg-white/5 transition-colors">
                            <div className="text-5xl font-display font-bold text-accent-green mb-2 text-glow group-hover:scale-110 transition-transform duration-300">500+</div>
                            <div className="text-accent-green/70 font-mono uppercase tracking-widest text-sm">Km Borders Secured</div>
                        </div>
                        <div className="p-6 group hover:bg-white/5 transition-colors">
                            <div className="text-5xl font-display font-bold text-accent-green mb-2 text-glow group-hover:scale-110 transition-transform duration-300">99.9%</div>
                            <div className="text-accent-green/70 font-mono uppercase tracking-widest text-sm">Threat Neutralization</div>
                        </div>
                        <div className="p-6 group hover:bg-white/5 transition-colors">
                            <div className="text-5xl font-display font-bold text-accent-green mb-2 text-glow group-hover:scale-110 transition-transform duration-300">24/7</div>
                            <div className="text-accent-green/70 font-mono uppercase tracking-widest text-sm">Active Monitoring</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 bg-primary relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-tighter">
                                Tactical <span className="text-accent-green">Arsenal</span>
                            </h2>
                            <p className="text-gray-400 max-w-xl font-mono text-sm leading-relaxed">
                                // CLASSIFIED: ELITE TIER EQUIPMENT
                                <br />
                                Engineered for the specific security challenges of the Sahel, Gulf of Guinea, and West African interior.
                            </p>
                        </div>
                        <Link
                            href="/products"
                            className="hidden md:inline-flex items-center text-accent-green font-mono uppercase tracking-widest hover:text-white transition-colors border border-accent-green/30 px-6 py-3 hover:bg-accent-green/10"
                        >
                            View Full Inventory <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link
                            href="/products"
                            className="inline-flex items-center text-accent-green font-mono uppercase tracking-widest hover:text-white transition-colors"
                        >
                            View Full Inventory <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Props - Intel Section */}
            <section className="py-24 bg-secondary relative overflow-hidden border-t border-accent-green/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-green to-transparent opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-primary/50 p-8 border border-white/5 hover:border-accent-green/50 transition-colors group">
                            <Shield className="h-12 w-12 text-accent-green mb-6 group-hover:animate-pulse" />
                            <h3 className="text-xl font-display font-bold text-white mb-4 uppercase">Regional Dominance</h3>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                &gt;&gt; Founded in Lagos.
                                <br />
                                &gt;&gt; Terrain Optimized.
                                <br />
                                &gt;&gt; Threat Adaptive.
                            </p>
                        </div>
                        <div className="bg-primary/50 p-8 border border-white/5 hover:border-accent-green/50 transition-colors group">
                            <Map className="h-12 w-12 text-accent-green mb-6 group-hover:animate-pulse" />
                            <h3 className="text-xl font-display font-bold text-white mb-4 uppercase">Strategic Coverage</h3>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                &gt;&gt; Sahelian Deserts.
                                <br />
                                &gt;&gt; Gulf Coastal Waters.
                                <br />
                                &gt;&gt; Urban Centers.
                            </p>
                        </div>
                        <div className="bg-primary/50 p-8 border border-white/5 hover:border-accent-green/50 transition-colors group">
                            <Users className="h-12 w-12 text-accent-green mb-6 group-hover:animate-pulse" />
                            <h3 className="text-xl font-display font-bold text-white mb-4 uppercase">Civilian Shield</h3>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                &gt;&gt; Collateral Mitigation.
                                <br />
                                &gt;&gt; Community Stability.
                                <br />
                                &gt;&gt; Human Rights Compliant.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
