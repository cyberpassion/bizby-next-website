import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/visit-planner-management-hero.jpg"; // theme-style hero image

  const pageTitle = "Smart Visit Planning & Scheduling";
  const pageByline = "Plan, schedule, and manage visits with precision";
  const pageDescription =
    "Bizby’s Visit Planner Management Module helps organizations plan field visits, client meetings, and site inspections efficiently. Improve coordination, reduce missed visits, and gain complete visibility into visit plans.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Visit Planner Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Visit Planner Management";
  const featuresDescription =
    "A structured way to plan visits and ensure smooth execution across teams.";

  const features = [
    {
      title: "Visit Planning & Scheduling",
      description:
        "Create and schedule planned visits with objectives and timelines.",
      icon: "CalendarClock",
    },
    {
      title: "Route & Location Planning",
      description:
        "Optimize visit routes and assign locations efficiently.",
      icon: "Map",
    },
    {
      title: "Team & Resource Allocation",
      description:
        "Assign staff, vehicles, or resources to planned visits.",
      icon: "Users",
    },
    {
      title: "Visit Status Tracking",
      description:
        "Track planned, ongoing, completed, and missed visits.",
      icon: "Activity",
    },
    {
      title: "Rescheduling & Adjustments",
      description:
        "Easily reschedule visits and manage changes in real time.",
      icon: "RefreshCcw",
    },
    {
      title: "Reports & Planning Insights",
      description:
        "Analyze visit plans, execution gaps, and team productivity.",
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
            How Visit Planner Management Works
          </h2>
          <p className="text-muted-foreground">
            A planned approach to managing visits from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Plan Visits",
              description:
                "Define visit schedules, locations, and objectives.",
            },
            {
              step: "02",
              title: "Assign Resources",
              description:
                "Allocate staff and resources for each planned visit.",
            },
            {
              step: "03",
              title: "Track Execution",
              description:
                "Monitor visit progress and handle changes dynamically.",
            },
            {
              step: "04",
              title: "Review & Optimize",
              description:
                "Evaluate planning effectiveness and optimize future visits.",
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
            Plan Smarter, Execute Better Visits
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Improve visit planning accuracy and team efficiency with Bizby’s Visit Planner Management Module.
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
