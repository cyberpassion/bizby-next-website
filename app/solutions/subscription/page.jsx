import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/subscription-management-hero.jpg"; // same theme-style image

  const pageTitle = "Subscription Management, Made Simple";
  const pageByline = "Manage plans, billing, and renewals effortlessly";
  const pageDescription =
    "Bizby’s Subscription Management Module helps businesses create, manage, and scale subscription-based services. Automate billing, track renewals, and gain full visibility into recurring revenue.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Subscription Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Subscription Management";
  const featuresDescription =
    "Everything you need to manage subscriptions and recurring revenue in one platform.";

  const features = [
    {
      title: "Flexible Subscription Plans",
      description:
        "Create and manage monthly, yearly, and custom subscription plans.",
      icon: "Layers",
    },
    {
      title: "Automated Billing & Invoicing",
      description:
        "Automate recurring billing, invoices, and payment collection.",
      icon: "CreditCard",
    },
    {
      title: "Renewals & Upgrades",
      description:
        "Manage renewals, plan upgrades, downgrades, and cancellations.",
      icon: "RefreshCcw",
    },
    {
      title: "Customer Subscription Portal",
      description:
        "Give customers access to manage their subscriptions and payments.",
      icon: "UserCog",
    },
    {
      title: "Revenue & Churn Analytics",
      description:
        "Track MRR, ARR, churn, and subscription performance metrics.",
      icon: "BarChart3",
    },
    {
      title: "Integrations & Automation",
      description:
        "Integrate with payment gateways, CRM, and accounting systems.",
      icon: "Plug",
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
            How Subscription Management Works
          </h2>
          <p className="text-muted-foreground">
            A seamless workflow for managing subscriptions end-to-end.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Create Plans",
              description:
                "Define subscription plans, pricing, and billing cycles.",
            },
            {
              step: "02",
              title: "Onboard Customers",
              description:
                "Subscribe customers with automated billing setup.",
            },
            {
              step: "03",
              title: "Manage & Automate",
              description:
                "Handle renewals, upgrades, invoices, and payments.",
            },
            {
              step: "04",
              title: "Analyze & Scale",
              description:
                "Track revenue metrics and optimize subscription growth.",
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
            Build & Scale Recurring Revenue
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Simplify subscription operations, improve retention, and grow recurring revenue with Bizby’s Subscription Management Module.
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
