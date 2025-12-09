export interface Product {
    id: string;
    name: string;
    slug: string;
    tagline: string;
    description: string;
    features: string[];
    specs: Record<string, string>;
    caseStudy: {
        title: string;
        description: string;
    };
    targets: string[];
    image: string;
}

export interface NavItem {
    label: string;
    href: string;
}
