export const faqCategories = [
  "General",
  "Pricing",
  "Vehicle tracking",
  "CCTV installation",
  "Electric fencing & perimeter security",
  "Automatic doors & gates",
  "Solar & off-grid power",
] as const;

export type FaqCategoryLabel = (typeof faqCategories)[number];