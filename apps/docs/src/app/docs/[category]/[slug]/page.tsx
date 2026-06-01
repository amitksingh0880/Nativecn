import React from "react";
import { notFound } from "next/navigation";
import { getDocEntry } from "../../../../data/docs-registry";
import ComponentDocClient from "./ComponentDocClient";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const entry = getDocEntry(category, slug);

  if (!entry) {
    return {
      title: "Component Not Found - Nativecn",
    };
  }

  return {
    title: `${entry.name} React Native Component - Nativecn`,
    description: `${entry.description} Learn how to install and use the Nativecn ${entry.name} component in your Expo and React Native projects.`,
    keywords: [entry.name.toLowerCase(), "react native", "expo", category, "ui component", "tailwind", "moti"],
    openGraph: {
      title: `${entry.name} React Native Component - Nativecn`,
      description: entry.description,
      type: "website",
      url: `https://nativecn-docs.vercel.app/docs/${category}/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${entry.name} React Native Component - Nativecn`,
      description: entry.description,
    },
  };
}

export default async function ComponentDocPage({ params }: PageProps) {
  const { category, slug } = await params;
  const entry = getDocEntry(category, slug);

  if (!entry) {
    notFound();
  }

  return <ComponentDocClient entry={entry} />;
}

