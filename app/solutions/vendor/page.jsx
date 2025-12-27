import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/vendor-management-hero.jpg"; // same theme-style image

  const pageTitle = "Vendor Management, Organized & Transparent";
  const pageByline = "Manage vendors, contracts, and performance from one place";
  const pageDescription =
    "Bizby’s Vendor Management Module helps you onboard, manage, and evaluate vendors efficiently. Centralize vendor data, streamline communication, and ensure compliance across your organization.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Vendor Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Vendor Management";
  const featuresDescription =
    "A complete solution to manage vendor relationships with clarity, control, and accountability.";

  const features = [
    {
      title: "Vendor Onboarding & Profiles",
      description:
        "Create detailed vendor profiles with documents, contacts, and compliance details.",
      icon: "UserPlus",
    },
    {
      title: "Contract & Agreement Management",
      description:
        "Store and track contracts, renewal dates, and terms effortlessly.",
      icon: "FileText",
    },
    {
      title: "Performance & Rating Tracking",
      description:
        "Evaluate vendor performance using ratings, KPIs, and feedback.",
      icon: "BarChart3",
    },
    {
      title: "Payment & Invoice Tracking",
      description:
        "Monitor invoices, payment status, and transaction history in real time.",
      icon: "Receipt",
    },
    {
      title: "Compliance & Document Control",
      description:
        "Ensure vendors meet compliance requirements with document tracking.",
      icon: "ShieldCheck",
    },
    {
      title: "Reports & Insights",
      description:
        "Generate actionable insights on vendor spend and performance.",
      icon: "FileBarChart",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <SplitHeroSection
        headerImage={headerImage}
        title={pageTitle}
        byline={pageByline}
        description={pageDescription}
        getStartedLink={getStartedLink}
        demoLink={demoLink}
      />

      {/* Features Section */}
      <FeaturesSection
        title={featuresTitle}
        description={featuresDescription}
        featureList={features}
      />

      {/* Process Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">
            How Vendor Management Works
          </h2>
          <p className="text-muted-foreground">
            A structured approach to managing vendor relationships efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Vendor Onboarding",
              description:
                "Register vendors and collect documents and agreements.",
            },
            {
              step: "02",
              title: "Contract & Compliance",
              description:
                "Manage contracts, compliance, and renewal timelines.",
            },
            {
              step: "03",
              title: "Transaction & Performance",
              description:
                "Track invoices, payments, and vendor performance.",
            },
            {
              step: "04",
              title: "Insights & Optimization",
              description:
                "Analyze data to improve vendor relationships and costs.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-xl border bg-background p-6 space-y-3"
            >
              <span className="text-sm font-semibold text-primary">
                {item.step}
              </span>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Build Stronger Vendor Relationships
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Improve transparency, reduce risks, and manage vendors more effectively with Bizby’s Vendor Management Module.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href={getStartedLink}
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium"
            >
              Get Started
            </a>
            <a
              href={demoLink}
              className="px-6 py-3 rounded-md border font-medium"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
