import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/timetable-management.jpg"; // replace with your asset

  const pageTitle = "Timetable Management & Scheduling";
  const pageByline =
    "Plan, manage, and optimize schedules with clarity and control";
  const pageDescription =
    "Bizby Timetable Management helps organizations create structured schedules, avoid conflicts, and ensure optimal resource utilization. Manage classes, shifts, sessions, and activities efficiently with a centralized scheduling system.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Timetable Management features */
  const featuresTitle = "Why Choose Bizby Timetable Management";
  const featuresDescription =
    "From planning to execution, Bizby ensures accurate, conflict-free, and scalable scheduling.";

  const features = [
    {
      title: "Centralized Timetable Creation",
      description:
        "Create and manage timetables for classes, teams, departments, or shifts from one place.",
      icon: "Calendar",
    },
    {
      title: "Conflict Detection & Resolution",
      description:
        "Automatically detect clashes in time, resources, or personnel and resolve them easily.",
      icon: "AlertTriangle",
    },
    {
      title: "Resource & Staff Allocation",
      description:
        "Allocate teachers, staff, rooms, and assets efficiently to maximize utilization.",
      icon: "Users",
    },
    {
      title: "Flexible Scheduling Rules",
      description:
        "Configure rules for availability, priorities, and constraints to meet operational needs.",
      icon: "Sliders",
    },
    {
      title: "Real-Time Updates & Notifications",
      description:
        "Notify stakeholders instantly when schedules change or updates are published.",
      icon: "Bell",
    },
    {
      title: "Reports & Schedule Insights",
      description:
        "Analyze schedule efficiency and resource usage with clear reports and dashboards.",
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
            How Timetable Management Works
          </h2>
          <p className="text-muted-foreground">
            A streamlined workflow for accurate and efficient scheduling.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Define Requirements",
              description:
                "Set schedules, availability, resources, and constraints.",
            },
            {
              step: "02",
              title: "Create Timetable",
              description:
                "Generate structured schedules with automated conflict checks.",
            },
            {
              step: "03",
              title: "Publish & Communicate",
              description:
                "Share finalized timetables with teams, staff, or students.",
            },
            {
              step: "04",
              title: "Monitor & Adjust",
              description:
                "Update schedules dynamically and track usage insights.",
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
            Bring Structure to Every Schedule
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Eliminate conflicts, optimize resources, and manage schedules
            effortlessly with Bizby Timetable Management.
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
