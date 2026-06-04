import { setRequestLocale } from "next-intl/server";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import WorkflowCarousel from "@/app/components/WorkflowCarousel";
import TheProblem from "@/app/components/TheProblem";
import FlagshipCapability from "@/app/components/FlagshipCapability";
import UseCases from "@/app/components/UseCases";
import OperatingEnvironment from "@/app/components/OperatingEnvironment";
import DataCustody from "@/app/components/DataCustody";
import PackagedCapabilities from "@/app/components/PackagedCapabilities";
import OperationalNote from "@/app/components/OperationalNote";
import ResourcesTeaser from "@/app/components/ResourcesTeaser";
import ServicesTeaser from "@/app/components/ServicesTeaser";
import BookACall from "@/app/components/BookACall";
import Footer from "@/app/components/Footer";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-zinc-950 min-h-screen">
      <Nav />
      <Hero />
      <WorkflowCarousel />
      <TheProblem />
      <FlagshipCapability />
      <UseCases />
      <OperatingEnvironment />
      <DataCustody />
      <PackagedCapabilities />
      <OperationalNote />
      <ServicesTeaser />
      <ResourcesTeaser locale={locale} />
      <div className="border-t border-zinc-800 bg-zinc-900/20">
        <BookACall />
      </div>
      <Footer />
    </main>
  );
}
