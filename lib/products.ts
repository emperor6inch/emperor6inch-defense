import { Product } from "./types";

export const products: Product[] = [
    {
        id: "terrashield",
        name: "TerraShield Drone Surveillance System",
        slug: "terrashield-drone",
        tagline: "Eyes in the Sky for the Sahel",
        description:
            "AI-powered thermal imaging drone system designed for long-range surveillance in arid environments. Perfect for monitoring cross-border movements and detecting unauthorized encampments.",
        features: [
            "AI-powered thermal imaging",
            "50km operational range",
            "Real-time threat detection algorithms",
            "Swarm integration capability",
        ],
        specs: {
            Camera: "4K Dual-Sensor (Thermal/Optical)",
            Battery: "24hr Continuous Flight",
            Compliance: "NDAA-compliant",
            Range: "50km",
        },
        caseStudy: {
            title: "Border Security Enhancement",
            description: "Reduced ambush risks by 40% in Nigerian border patrols during 2024 pilot program.",
        },
        targets: ["Jihadist insurgencies", "Cross-border terrorism", "Smuggling routes"],
        image: "/images/terrashield.jpg",
    },
    {
        id: "apex-apv6",
        name: "Apex Armored Patrol Vehicle (APV-6)",
        slug: "apex-apv6",
        tagline: "Unstoppable Mobility",
        description:
            "A highly mobile, mine-resistant ambush-protected (MRAP) vehicle built for the rugged terrains of Northern Nigeria. Offers superior protection against IEDs and small arms fire.",
        features: [
            "STANAG Level 4 Ballistic Protection",
            "High-clearance off-road mobility",
            "Integrated secure communications suite",
            "Run-flat tires",
        ],
        specs: {
            Capacity: "8 Personnel + Gear",
            Engine: "Turbocharged V8 Diesel",
            Armament: "Modular Weapon Mounts (12.7mm compatible)",
            Range: "800km",
        },
        caseStudy: {
            title: "Convoy Protection",
            description: "Protected critical aid convoys in Zamfara State, sustaining zero casualties in 3 separate ambush attempts.",
        },
        targets: ["Banditry", "Kidnapping syndicates", "Rural violence"],
        image: "/images/apex-apv6.jpg",
    },
    {
        id: "gulfguardian",
        name: "GulfGuardian Maritime Interceptor",
        slug: "gulfguardian-interceptor",
        tagline: "Securing the Coast",
        description:
            "High-speed interceptor vessel designed for anti-piracy and counter-trafficking operations in the Gulf of Guinea. Features advanced radar and non-lethal deterrent systems.",
        features: [
            "High-speed pursuit (50+ knots)",
            "Advanced Radar/Sonar detection",
            "Non-lethal sonic deterrents",
            "Drone launch bay",
        ],
        specs: {
            Hull: "12m Reinforced Composite",
            Propulsion: "Solar-assisted Hybrid Drive",
            Speed: "55 Knots Max",
            Crew: "4",
        },
        caseStudy: {
            title: "Oil Route Security",
            description: "Intercepted 15 pirate vessels in 2025, securing vital oil infrastructure off the coast of Delta State.",
        },
        targets: ["Piracy", "Illegal fishing", "Oil bunkering"],
        image: "/images/gulfguardian.jpg",
    },
    {
        id: "agrisecure",
        name: "AgriSecure Border Fence System",
        slug: "agrisecure-fence",
        tagline: "Peace for the Middle Belt",
        description:
            "Smart fencing solution integrating physical barriers with IoT sensors to prevent farmer-herder conflicts. Provides early warning alerts to local communities.",
        features: [
            "Smart motion/vibration sensors",
            "Solar-powered operation",
            "Rapid-deploy modular design",
            "Mobile app integration for alerts",
        ],
        specs: {
            Height: "2m Anti-climb mesh",
            Power: "Autonomous Solar Panels",
            Connectivity: "LoRaWAN / GSM",
            Durability: "Weather-resistant coating",
        },
        caseStudy: {
            title: "Conflict Mitigation",
            description: "Reduced clashes by 60% in Benue State grazing disputes through early warning notifications.",
        },
        targets: ["Farmer-herder conflicts", "Resource disputes", "Cattle rustling"],
        image: "/images/agrisecure.jpg",
    },
    {
        id: "cyberhawk",
        name: "CyberHawk Threat Intelligence",
        slug: "cyberhawk-intel",
        tagline: "Digital Sovereignty",
        description:
            "A sovereign cloud-based threat intelligence platform tailored for West African financial and critical infrastructure sectors. Uses AI to predict and block cyberattacks.",
        features: [
            "AI-driven anomaly detection",
            "Blockchain-secured data sharing",
            "Automated threat response",
            "Regional threat feed integration",
        ],
        specs: {
            Architecture: "Zero-trust Cloud",
            Scalability: "Supports 10k+ endpoints",
            Compliance: "ECOWAS Data Protection compliant",
            Latency: "<50ms analysis time",
        },
        caseStudy: {
            title: "Financial Sector Defense",
            description: "Blocked 500+ sophisticated phishing attacks on West African telecom providers in Q1 2025.",
        },
        targets: ["Cybercrime", "Financial fraud", "Data breaches"],
        image: "/images/cyberhawk.jpg",
    },
    {
        id: "nomad-c2",
        name: "Nomad Mobile Command Unit",
        slug: "nomad-c2",
        tagline: "Command Anywhere",
        description:
            "Rapidly deployable Command & Control (C2) trailer for coordinating emergency responses and military operations in remote areas.",
        features: [
            "Portable C2 center",
            "Satellite uplink (Starlink/Ka-band)",
            "Biometric ID systems",
            "EMP-resistant shielding",
        ],
        specs: {
            Mount: "Ruggedized Trailer",
            Power: "72hr Autonomous Battery + Generator",
            Comms: "Multi-band Radio + Satcom",
            Workstations: "4 Operator Consoles",
        },
        caseStudy: {
            title: "Emergency Response",
            description: "Coordinated successful rescue operations during the 2025 Niger Delta kidnapping incident.",
        },
        targets: ["Spillover extremism", "Mass abductions", "Disaster response"],
        image: "/images/nomad.jpg",
    },
];
