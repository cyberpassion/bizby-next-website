import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/meeting-management-hero.jpg"; // keep same visual style

  const pageTitle = "Meeting Management, Simplified";
  const pageByline = "Plan, organize, and track meetings with ease";
  const pageDescription =
    "Bizby’s Meeting Management Module helps teams schedule, manage, and track meetings efficiently. From agendas to follow-ups, keep every meeting productive and aligned.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Meeting Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Meeting Management";
  const featuresDescription =
    "Everything you need to run effective meetings in one unified platform.";

  const features = [
    {
      title: "Centralized Meeting Scheduling",
      description:
        "Schedule meetings across teams with shared calendars and availability.",
      icon: "Calendar",
    },
    {
      title: "Agenda & Minutes Management",
      description:
        "Create structured agendas and capture meeting minutes effortlessly.",
      icon: "ClipboardList",
    },
    {
      title: "Participant & Role Management",
      description:
        "Assign roles, track attendance, and manage participants seamlessly.",
      icon: "Users",
    },
    {
      title: "Virtual & In-Person Meetings",
      description:
        "Manage online and offline meetings from a single dashboard.",
      icon: "Video",
    },
    {
      title: "Action Items & Follow-Ups",
      description:
        "Assign tasks, track decisions, and ensure accountability after meetings.",
      icon: "CheckCircle",
    },
    {
      title: "Meeting Insights & Reports",
      description:
        "Analyze meeting frequency, attendance, and outcomes for optimization.",
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
            How Meeting Management Works
          </h2>
          <p className="text-muted-foreground">
            A structured workflow to make every meeting productive.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Schedule & Invite",
              description:
                "Plan meetings and invite participants with ease.",
            },
            {
              step: "02",
              title: "Prepare Agenda",
              description:
                "Define objectives, topics, and discussion points.",
            },
            {
              step: "03",
              title: "Conduct Meeting",
              description:
                "Host meetings with clear roles and real-time collaboration.",
            },
            {
              step: "04",
              title: "Track Outcomes",
              description:
                "Capture minutes, assign tasks, and follow up effectively.",
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
            Make Every Meeting Count
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Improve collaboration, accountability, and productivity with Bizby’s Meeting Management Module.
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
