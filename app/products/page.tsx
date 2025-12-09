import Hero from "@/components/ui/Hero";
import ProductCard from "@/components/features/ProductCard";
import { products } from "@/lib/products";

export const metadata = {
    title: "Products | Emperor6inch Defense",
    description: "Explore our range of defense technology solutions including drones, armored vehicles, and maritime interceptors.",
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-primary">
            <Hero
                title="Defense Solutions"
                subtitle="Cutting-edge technology engineered for the unique security challenges of West Africa."
                backgroundImage="/images/products-hero.jpg"
            />

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
}
