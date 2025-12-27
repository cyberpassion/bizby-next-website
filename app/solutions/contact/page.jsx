import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/contact-management-hero.jpg"; // same theme-style image

  const pageTitle = "Contact Management, Organized & Accessible";
  const pageByline = "Manage all your contacts in one smart, centralized system";
  const pageDescription =
    "Bizby’s Contact Management Module helps you store, organize, and manage all your business contacts efficiently. Get a complete view of every interaction and build stronger relationships.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Contact Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Contact Management";
  const featuresDescription =
    "A powerful and intuitive solution to manage contacts across teams, departments, and channels.";

  const features = [
    {
      title: "Centralized Contact Database",
      description:
        "Store and manage all contacts—customers, leads, vendors, and partners—in one place.",
      icon: "BookUser",
    },
    {
      title: "Detailed Contact Profiles",
      description:
        "Maintain rich contact profiles with interaction history, notes, and attachments.",
      icon: "IdCard",
    },
    {
      title: "Contact Segmentation",
      description:
        "Segment contacts based on type, activity, location, or custom attributes.",
      icon: "Filter",
    },
    {
      title: "Interaction Tracking",
      description:
        "Track calls, emails, meetings, and tasks linked to each contact.",
      icon: "MessageCircle",
    },
    {
      title: "Smart Search & Filters",
      description:
        "Quickly find contacts using advanced search, filters, and tags.",
      icon: "Search",
    },
    {
      title: "Secure Access & Permissions",
      description:
        "Control who can view or edit contacts with role-based permissions.",
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
            How Contact Management Works
          </h2>
          <p className="text-muted-foreground">
            A simple and structured approach to organize and manage relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Contact Capture",
              description:
                "Add contacts manually or import them from multiple sources.",
            },
            {
              step: "02",
              title: "Profile Organization",
              description:
                "Enrich contact profiles with details, notes, and history.",
            },
            {
              step: "03",
              title: "Engagement Tracking",
              description:
                "Log interactions and tasks to maintain context across teams.",
            },
            {
              step: "04",
              title: "Access & Optimization",
              description:
                "Securely share contacts and optimize usage with insights.",
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
            Keep Every Contact at Your Fingertips
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Organize relationships, improve collaboration, and never lose track of important contacts with Bizby’s Contact Management Module.
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
