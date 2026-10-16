import type { Metadata } from "next";
import { Toolbox } from "@/components/Toolbox";
import { PageHero } from "@/components/ui";
import { images } from "@/data/company";
import { getDictionary, type Locale } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale as Locale);
  return { title: t.toolbox.title, description: t.toolbox.subtitle };
}

export default async function Page({ params }: P) {
  const t = getDictionary((await params).locale as Locale);
  return (
    <>
      <PageHero
        eyebrow={t.eyebrows.toolbox}
        title={t.toolbox.title}
        subtitle={t.toolbox.subtitle}
        image={images.fieldCalibration}
      />
      <div className="container-x py-12 lg:py-16">
        <Toolbox />
      </div>
    </>
  );
}
