"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/ui/Button";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    productInterest: z.string().min(1, "Please select a product"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send message");

            setSubmitStatus("success");
            reset();
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-secondary p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

            {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                    Message sent successfully! We will contact you shortly.
                </div>
            )}

            {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                    Failed to send message. Please try again later.
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Full Name
                    </label>
                    <input
                        {...register("name")}
                        type="text"
                        className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-colors"
                        placeholder="John Doe"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-colors"
                        placeholder="john@company.com"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="productInterest" className="block text-sm font-medium text-gray-400 mb-2">
                        Product Interest
                    </label>
                    <select
                        {...register("productInterest")}
                        className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-colors"
                    >
                        <option value="">Select a product...</option>
                        <option value="TerraShield Drone">TerraShield Drone</option>
                        <option value="Apex APV-6">Apex APV-6</option>
                        <option value="GulfGuardian Interceptor">GulfGuardian Interceptor</option>
                        <option value="AgriSecure Fence">AgriSecure Fence</option>
                        <option value="CyberHawk Intel">CyberHawk Intel</option>
                        <option value="Nomad C2">Nomad C2</option>
                        <option value="General Inquiry">General Inquiry</option>
                    </select>
                    {errors.productInterest && (
                        <p className="mt-1 text-sm text-red-400">{errors.productInterest.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                        Message
                    </label>
                    <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-colors"
                        placeholder="Tell us about your requirements..."
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                    )}
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </div>
    );
}
