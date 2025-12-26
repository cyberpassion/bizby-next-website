import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "data:image/jpeg;base64,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";

  const pageTitle = "Expert Consultation for Your Business";
  const pageByline = "Get insights, advice, and solutions tailored to your needs";
  const pageDescription =
    "Bizby offers expert consultation services to help you optimize operations, enhance productivity, and make data-driven decisions. Connect with our specialists and take your business to the next level.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Salesforce-inspired feature set */
  const featuresTitle = "Why Businesses Choose Bizby Consultation";
  const featuresDescription =
    "From strategy to execution, our experts help you identify gaps, unlock growth, and implement solutions that deliver measurable results.";

  const features = [
    {
      title: "Customer-Centric Strategy",
      description:
        "We help you design customer-first strategies that improve engagement, retention, and lifetime value—just like leading global enterprises.",
      icon: "Users",
    },
    {
      title: "Process & Operations Optimization",
      description:
        "Identify inefficiencies across sales, service, and operations, and streamline workflows for maximum productivity.",
      icon: "Workflow",
    },
    {
      title: "Technology & CRM Advisory",
      description:
        "Get expert guidance on CRM, automation, analytics, and integrations tailored to your business goals.",
      icon: "Settings",
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "Leverage insights from your data to forecast trends, improve performance, and make confident business decisions.",
      icon: "BarChart",
    },
    {
      title: "Scalable Growth Planning",
      description:
        "Prepare your business for growth with scalable systems, future-ready architecture, and expansion strategies.",
      icon: "TrendingUp",
    },
    {
      title: "Change Management & Adoption",
      description:
        "Ensure smooth adoption of new processes and tools with expert-led change management and training.",
      icon: "RefreshCcw",
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
        features={features}
      />

      {/* Process Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">
            How Our Consultation Works
          </h2>
          <p className="text-muted-foreground">
            A proven, structured approach inspired by enterprise consulting best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery & Assessment",
              description:
                "We understand your business, challenges, customers, and current systems.",
            },
            {
              step: "02",
              title: "Insight & Strategy",
              description:
                "Our experts analyze gaps and define a clear, actionable roadmap.",
            },
            {
              step: "03",
              title: "Solution Design",
              description:
                "We recommend optimized processes, tools, and technology solutions.",
            },
            {
              step: "04",
              title: "Execution Support",
              description:
                "Get hands-on support to implement, optimize, and scale successfully.",
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
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Whether you're improving customer experience, scaling operations,
            or implementing new technology, Bizby consultation helps you move forward with confidence.
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
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
