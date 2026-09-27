import { services } from "./services";
import { catalogue } from "./catalogue";
import { blogPosts } from "./blog";
import { projects } from "./portfolio";
import { faqs } from "./faqs";

export type SearchItem = {
    id: string;
    type: "service" | "product" | "blog" | "portfolio" | "faq";
    title: string;
    description: string;
    href: string;
};

const serviceItems: SearchItem[] = services.map((service) => ({
    id: `service-${service.slug}`,
    type: "service",
    title: service.name,
    description: service.shortDescription,
    href: `/services/${service.slug}`,
}));

const productItems: SearchItem[] = catalogue.map((product) => ({
    id: `product-${product.id}`,
    type: "product",
    title: product.name,
    description: product.description,
    href:
        product.serviceSlug === "vehicle-tracking"
            ? `/services/vehicle-tracking/${product.name}`
            : `/catalogue?service=${product.serviceSlug}`
}));

const blogItems: SearchItem[] = blogPosts.map((post) => ({
    id: `blog-${post.slug}`,
    type: "blog",
    title: post.title,
    description: post.excerpt,
    href: `/blog/${post.slug}`,
}));

const portfolioItems: SearchItem[] = projects.map((project) => ({
  id: `portfolio-${project.slug}`,
  type: "portfolio",
  title: project.title,
  description: project.summary,
  href: `/portfolio/${project.slug}`,
}));

const faqItems: SearchItem[] = faqs.flatMap((group) =>
  group.items.map((faq) => ({
    id: `faq-${faq.question}`,
    type: "faq" as const,
    title: faq.question,
    description: faq.answer,
    href: "/faq",
  }))
);

export const searchIndex: SearchItem[] = [
    ...serviceItems,
    ...productItems,
    ...blogItems,
    ...portfolioItems,
    ...faqItems,
];

export const typeLabels: Record<SearchItem["type"], string> = {
    service: "Services",
    product: "Products",
    blog: "Blog",
    portfolio: "Portfolio",
    faq: "FAQ",
};

