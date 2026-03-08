import type { Metadata } from "next";
import type { TreatmentPage } from "./content";

export const buildMetadata = (page: TreatmentPage): Metadata => ({
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical: page.slug,
  },
});
