import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/event-management-hero.jpg"; // keep same visual style

  const pageTitle = "Event Management, Made Effortless";
  const pageByline = "Plan, manage, and deliver successful events from one platform";
  const pageDescription =
    "Bizby’s Event Management Module helps you plan, organize, and execute events seamlessly. From registrations to engagement and post-event insights, manage every stage with confidence.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Event Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Event Management";
  const featuresDescription =
    "Everything you need to manage events efficiently—whether virtual, in-person, or hybrid.";

  const features = [
    {
      title: "Centralized Event Planning",
      description:
        "Manage event details, schedules, speakers, venues, and resources from a single dashboard.",
      icon: "Calendar",
    },
    {
      title: "Registration & Ticketing",
      description:
        "Handle registrations, ticket sales, confirmations, and attendee data with ease.",
      icon: "Ticket",
    },
    {
      title: "Attendee Management",
      description:
        "Track attendees, check-ins, participation, and engagement throughout the event.",
      icon: "Users",
    },
    {
      title: "Automated Communication",
      description:
        "Send event reminders, updates, and follow-ups via email or messaging automatically.",
      icon: "Mail",
    },
    {
      title: "Real-Time Event Insights",
      description:
        "Monitor attendance, engagement, and performance metrics in real time.",
      icon: "BarChart",
    },
    {
      title: "Post-Event Analysis & Follow-ups",
      description:
        "Measure success, collect feedback, and nurture leads after the event concludes.",
      icon: "ClipboardCheck",
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
            How Event Management Works
          </h2>
          <p className="text-muted-foreground">
            A streamlined process to plan, execute, and optimize every event.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Plan & Setup",
              description:
                "Create events, define schedules, manage speakers, venues, and logistics.",
            },
            {
              step: "02",
              title: "Promote & Register",
              description:
                "Promote events, manage registrations, and track attendee sign-ups.",
            },
            {
              step: "03",
              title: "Execute & Engage",
              description:
                "Run events smoothly with check-ins, live engagement, and real-time tracking.",
            },
            {
              step: "04",
              title: "Analyze & Follow Up",
              description:
                "Review performance, gather feedback, and nurture leads post-event.",
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
            Host Better Events with Bizby
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            From small meetings to large-scale conferences, Bizby’s Event Management Module ensures flawless execution and meaningful engagement.
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
