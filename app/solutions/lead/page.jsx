import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/lead-management-hero.jpg"; // same theme-style image

  const pageTitle = "Lead Management, From Capture to Conversion";
  const pageByline = "Track, nurture, and convert leads with complete visibility";
  const pageDescription =
    "Bizby’s Lead Management Module helps businesses capture, organize, and nurture leads efficiently. Gain full visibility into your sales pipeline and convert more prospects into customers.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Lead Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Lead Management";
  const featuresDescription =
    "A powerful and intuitive solution to manage leads, improve follow-ups, and accelerate sales growth.";

  const features = [
    {
      title: "Multi-Source Lead Capture",
      description:
        "Capture leads from websites, forms, campaigns, calls, and manual entries in one place.",
      icon: "Inbox",
    },
    {
      title: "Centralized Lead Database",
      description:
        "Maintain a clean, organized lead repository with complete interaction history.",
      icon: "Database",
    },
    {
      title: "Lead Assignment & Routing",
      description:
        "Automatically assign leads to the right sales reps based on rules and territories.",
      icon: "Shuffle",
    },
    {
      title: "Lead Scoring & Qualification",
      description:
        "Prioritize high-intent leads using customizable scoring and qualification criteria.",
      icon: "Target",
    },
    {
      title: "Follow-ups & Reminders",
      description:
        "Never miss a follow-up with automated tasks, reminders, and notifications.",
      icon: "Bell",
    },
    {
      title: "Pipeline & Conversion Insights",
      description:
        "Track conversion rates, pipeline stages, and sales performance with real-time analytics.",
      icon: "BarChart",
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
            How Lead Management Works
          </h2>
          <p className="text-muted-foreground">
            A structured approach to capture, nurture, and convert leads efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Lead Capture",
              description:
                "Collect leads from multiple channels into a centralized system.",
            },
            {
              step: "02",
              title: "Qualification & Scoring",
              description:
                "Evaluate and prioritize leads based on intent and readiness.",
            },
            {
              step: "03",
              title: "Engagement & Follow-ups",
              description:
                "Nurture leads through timely communication and follow-ups.",
            },
            {
              step: "04",
              title: "Conversion & Analysis",
              description:
                "Convert qualified leads and analyze pipeline performance.",
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
            Turn More Leads into Customers
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Improve lead visibility, accelerate follow-ups, and increase conversions with Bizby’s Lead Management Module.
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
