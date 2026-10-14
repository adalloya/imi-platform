import type { Metadata } from "next";
import { AcademyCatalog } from "@/components/AcademyCatalog";
import { PageHero } from "@/components/ui";
import { images } from "@/data/company";
import { getDictionary } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale);
  return { title: t.academy.title, description: t.academy.subtitle };
}

export default async function Page({ params }: P) {
  const t = getDictionary((await params).locale);
  return (
    <>
      <PageHero
        eyebrow="STPS IMI150311QL2-0013 · CONOCER EC0217"
        title={t.academy.title}
        subtitle={t.academy.subtitle}
        image={images.course}
      />
      <div className="container-x py-12 lg:py-16">
        <AcademyCatalog />
      </div>
    </>
  );
}
