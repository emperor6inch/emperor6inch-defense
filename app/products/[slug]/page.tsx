import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowLeft, CheckCircle, Shield, Activity, Cpu } from "lucide-react";

interface ProductPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-primary pb-24">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                >
                    <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-primary via-transparent to-black/50" />
                </div>
                <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
                    <Link
                        href="/products"
                        className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
                    </Link>
                    <div className="flex flex-wrap gap-3 mb-4">
                        {product.targets.map((target) => (
                            <span
                                key={target}
                                className="px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20 text-sm font-medium"
                            >
                                {target}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {product.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                        {product.tagline}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Activity className="text-accent-green" /> Overview
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {product.description}
                            </p>
                        </section>

                        {/* Features */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Cpu className="text-accent-green" /> Key Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {product.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 rounded-lg bg-secondary border border-white/5"
                                    >
                                        <CheckCircle className="h-6 w-6 text-accent-green shrink-0" />
                                        <span className="text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Case Study */}
                        <section className="bg-secondary/50 rounded-2xl p-8 border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Shield className="text-accent-green" /> Field Report
                            </h2>
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-accent-green">
                                    {product.caseStudy.title}
                                </h3>
                                <p className="text-gray-300 italic">
                                    "{product.caseStudy.description}"
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Specs Card */}
                        <div className="bg-secondary rounded-xl p-6 border border-white/10 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6">
                                Technical Specifications
                            </h3>
                            <div className="space-y-4 mb-8">
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <div
                                        key={key}
                                        className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0"
                                    >
                                        <span className="text-gray-400 text-sm">{key}</span>
                                        <span className="text-white font-medium text-right">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-4">
                                <Button href="/contact" className="w-full">
                                    Request Demo
                                </Button>
                                <Button
                                    href="/contact"
                                    variant="outline"
                                    className="w-full"
                                >
                                    Download Brochure
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
