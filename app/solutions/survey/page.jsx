import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/survey-management.jpg"; // replace with your asset

  const pageTitle = "Survey Management & Analytics";
  const pageByline =
    "Create, distribute, and analyze surveys with ease";
  const pageDescription =
    "Bizby Survey Management enables organizations to collect feedback, measure satisfaction, and gain actionable insights. Design surveys quickly, track responses in real time, and make data-driven decisions with confidence.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Survey Management features */
  const featuresTitle = "Why Choose Bizby Survey Management";
  const featuresDescription =
    "From feedback collection to insight generation, Bizby helps you turn responses into meaningful action.";

  const features = [
    {
      title: "Flexible Survey Builder",
      description:
        "Create customized surveys using multiple question types, templates, and branding options.",
      icon: "ClipboardCheck",
    },
    {
      title: "Multi-Channel Distribution",
      description:
        "Share surveys via email, SMS, web links, or internal systems to maximize response rates.",
      icon: "Send",
    },
    {
      title: "Real-Time Response Tracking",
      description:
        "Monitor responses as they come in and track participation across audiences.",
      icon: "Activity",
    },
    {
      title: "Advanced Analytics & Insights",
      description:
        "Visualize survey results with charts, trends, and actionable insights.",
      icon: "BarChart",
    },
    {
      title: "Automated Follow-Ups",
      description:
        "Trigger reminders and follow-ups automatically to improve completion rates.",
      icon: "RefreshCcw",
    },
    {
      title: "Secure Data & Compliance",
      description:
        "Protect respondent data with role-based access, encryption, and compliance-ready controls.",
      icon: "ShieldCheck",
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
            How Survey Management Works
          </h2>
          <p className="text-muted-foreground">
            A simple, end-to-end workflow for collecting and acting on feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Design Survey",
              description:
                "Build surveys using templates or custom questions tailored to your goals.",
            },
            {
              step: "02",
              title: "Distribute",
              description:
                "Share surveys across multiple channels to reach the right audience.",
            },
            {
              step: "03",
              title: "Collect Responses",
              description:
                "Track responses in real time and monitor participation rates.",
            },
            {
              step: "04",
              title: "Analyze & Act",
              description:
                "Turn insights into action with reports, dashboards, and follow-ups.",
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
            Turn Feedback Into Action
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Collect meaningful feedback, understand your audience, and improve
            experiences with Bizby Survey Management.
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
