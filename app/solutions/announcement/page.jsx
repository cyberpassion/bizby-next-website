import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/announcements-hero.jpg"; // same theme-style image

  const pageTitle = "Announcements, Clear & Timely Communication";
  const pageByline = "Share important updates with the right audience instantly";
  const pageDescription =
    "Bizby’s Announcements Module helps you create, manage, and deliver important messages across your organization. Ensure everyone stays informed with timely and targeted announcements.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Announcements Features */
  const featuresTitle = "Why Businesses Choose Bizby Announcements";
  const featuresDescription =
    "A reliable communication tool designed to keep teams, customers, and stakeholders informed.";

  const features = [
    {
      title: "Create & Publish Announcements",
      description:
        "Compose announcements with rich text, attachments, and links.",
      icon: "Megaphone",
    },
    {
      title: "Audience Targeting",
      description:
        "Send announcements to specific teams, roles, groups, or users.",
      icon: "Users",
    },
    {
      title: "Scheduled Publishing",
      description:
        "Schedule announcements to be published at the right time.",
      icon: "CalendarClock",
    },
    {
      title: "Read Receipts & Engagement",
      description:
        "Track who has viewed announcements and measure engagement.",
      icon: "Eye",
    },
    {
      title: "Multi-Channel Delivery",
      description:
        "Deliver announcements via dashboard, email, or notifications.",
      icon: "Send",
    },
    {
      title: "Archive & History",
      description:
        "Maintain a searchable archive of all past announcements.",
      icon: "Archive",
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
            How Announcements Work
          </h2>
          <p className="text-muted-foreground">
            A simple and effective way to broadcast important information.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Draft Message",
              description:
                "Create announcements with text, media, and attachments.",
            },
            {
              step: "02",
              title: "Select Audience",
              description:
                "Choose who should receive the announcement.",
            },
            {
              step: "03",
              title: "Publish or Schedule",
              description:
                "Send instantly or schedule for later delivery.",
            },
            {
              step: "04",
              title: "Track Engagement",
              description:
                "Monitor views, engagement, and responses.",
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
            Keep Everyone Informed, Always
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Deliver clear and timely updates across your organization with Bizby’s Announcements Module.
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
