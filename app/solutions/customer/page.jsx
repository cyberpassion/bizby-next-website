import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/customer-hero.jpg"; // keep same style image

  const pageTitle = "Customer Management, Simplified";
  const pageByline = "Build stronger relationships across the entire customer lifecycle";
  const pageDescription =
    "Bizby’s Customer Module helps you manage, engage, and grow your customers with a unified platform. Track interactions, personalize experiences, and deliver consistent value at every touchpoint.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Customer Module Features */
  const featuresTitle = "Why Businesses Choose Bizby Customer Module";
  const featuresDescription =
    "Designed to centralize customer data, enhance engagement, and improve satisfaction across sales, service, and support teams.";

  const features = [
    {
      title: "Unified Customer Profiles",
      description:
        "Maintain a 360° view of every customer with complete interaction history, preferences, and activity timelines.",
      icon: "UserCircle",
    },
    {
      title: "Customer Segmentation",
      description:
        "Segment customers based on behavior, demographics, and engagement to drive personalized communication.",
      icon: "Filter",
    },
    {
      title: "Omnichannel Interaction Tracking",
      description:
        "Track calls, emails, chats, and meetings in one place for consistent and informed engagement.",
      icon: "MessageSquare",
    },
    {
      title: "Customer Engagement Insights",
      description:
        "Analyze customer behavior and engagement trends to improve retention and satisfaction.",
      icon: "BarChart",
    },
    {
      title: "Retention & Loyalty Management",
      description:
        "Identify churn risks early and implement strategies to improve loyalty and long-term value.",
      icon: "HeartHandshake",
    },
    {
      title: "Secure & Scalable Data Management",
      description:
        "Ensure customer data security while scaling effortlessly as your business grows.",
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
            How Customer Management Works
          </h2>
          <p className="text-muted-foreground">
            A structured approach to manage, engage, and grow customer relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Customer Data Capture",
              description:
                "Collect and centralize customer data from all touchpoints.",
            },
            {
              step: "02",
              title: "Profile Enrichment",
              description:
                "Build detailed customer profiles with interaction history and insights.",
            },
            {
              step: "03",
              title: "Engagement & Personalization",
              description:
                "Deliver targeted communication and personalized experiences.",
            },
            {
              step: "04",
              title: "Retention & Growth",
              description:
                "Analyze engagement to retain customers and increase lifetime value.",
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
            Put Customers at the Center of Your Business
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Manage relationships, improve engagement, and build lasting customer loyalty with Bizby’s Customer Module.
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
