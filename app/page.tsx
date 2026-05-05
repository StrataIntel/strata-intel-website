import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import DashboardMockup from "@/app/components/DashboardMockup";
import TheProblem from "@/app/components/TheProblem";
import FlagshipCapability from "@/app/components/FlagshipCapability";
import UseCases from "@/app/components/UseCases";
import OperatingEnvironment from "@/app/components/OperatingEnvironment";
import DataCustody from "@/app/components/DataCustody";
import PackagedCapabilities from "@/app/components/PackagedCapabilities";
import OperationalNote from "@/app/components/OperationalNote";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Nav />
      <Hero />
      <DashboardMockup />
      <TheProblem />
      <FlagshipCapability />
      <UseCases />
      <OperatingEnvironment />
      <DataCustody />
      <PackagedCapabilities />
      <OperationalNote />
      <Footer />
    </main>
  );
}
