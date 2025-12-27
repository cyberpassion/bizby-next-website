import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/communication-management-hero.jpg"; // same theme-style image

  const pageTitle = "Communication Management, Unified & Effective";
  const pageByline = "Manage all business communications from one platform";
  const pageDescription =
    "Bizby’s Communication Management Module helps you centralize, manage, and track communications across teams, customers, and stakeholders. Deliver consistent messages through multiple channels with full visibility.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Communication Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Communication Management";
  const featuresDescription =
    "A comprehensive solution to streamline internal and external communication.";

  const features = [
    {
      title: "Multi-Channel Messaging",
      description:
        "Communicate via email, SMS, notifications, and in-app messages.",
      icon: "MessagesSquare",
    },
    {
      title: "Centralized Communication Hub",
      description:
        "View and manage all conversations from a single dashboard.",
      icon: "Inbox",
    },
    {
      title: "Audience Segmentation",
      description:
        "Target messages to specific users, teams, or customer groups.",
      icon: "Users",
    },
    {
      title: "Automated Communication Workflows",
      description:
        "Trigger messages automatically based on events or actions.",
      icon: "Workflow",
    },
    {
      title: "Templates & Personalization",
      description:
        "Use reusable templates and personalize messages dynamically.",
      icon: "FileEdit",
    },
    {
      title: "Delivery Reports & Analytics",
      description:
        "Track delivery status, open rates, and engagement metrics.",
      icon: "BarChart3",
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
            How Communication Management Works
          </h2>
          <p className="text-muted-foreground">
            A streamlined process to deliver clear and consistent communication.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Define Channels & Audience",
              description:
                "Choose communication channels and target recipients.",
            },
            {
              step: "02",
              title: "Create Message",
              description:
                "Draft messages using templates or custom content.",
            },
            {
              step: "03",
              title: "Send or Automate",
              description:
                "Deliver messages instantly or via automated workflows.",
            },
            {
              step: "04",
              title: "Track & Optimize",
              description:
                "Monitor engagement and optimize future communication.",
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
            Simplify Business Communication
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Centralize messaging, improve engagement, and communicate with confidence using Bizby’s Communication Management Module.
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
