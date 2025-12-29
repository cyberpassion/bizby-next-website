import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/checklist-management-hero.jpg"; // theme-style hero image

  const pageTitle = "Checklist Management, Simplified";
  const pageByline = "Standardize tasks and ensure nothing is missed";
  const pageDescription =
    "Bizby’s Checklist Management Module helps teams create, manage, and track checklists for daily operations, audits, and processes. Improve consistency, accountability, and task completion across your organization.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Checklist Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Checklist Management";
  const featuresDescription =
    "A reliable way to manage recurring tasks, inspections, and process compliance.";

  const features = [
    {
      title: "Custom Checklist Creation",
      description:
        "Create checklists for any process, department, or workflow.",
      icon: "ListChecks",
    },
    {
      title: "Task Assignment & Tracking",
      description:
        "Assign checklist items to users and track completion status.",
      icon: "UserCheck",
    },
    {
      title: "Recurring & Scheduled Checklists",
      description:
        "Automate daily, weekly, or monthly checklist schedules.",
      icon: "Calendar",
    },
    {
      title: "Evidence & Notes Capture",
      description:
        "Attach photos, comments, and documents to checklist items.",
      icon: "Paperclip",
    },
    {
      title: "Compliance & Quality Control",
      description:
        "Ensure process adherence and audit readiness at all times.",
      icon: "ShieldCheck",
    },
    {
      title: "Reports & Insights",
      description:
        "Analyze checklist completion, delays, and performance trends.",
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
            How Checklist Management Works
          </h2>
          <p className="text-muted-foreground">
            A simple workflow to ensure every task is completed correctly.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Create Checklists",
              description:
                "Design checklists tailored to your processes.",
            },
            {
              step: "02",
              title: "Assign Tasks",
              description:
                "Allocate checklist items to teams or individuals.",
            },
            {
              step: "03",
              title: "Execute & Record",
              description:
                "Complete tasks and attach evidence or notes.",
            },
            {
              step: "04",
              title: "Review & Improve",
              description:
                "Analyze performance and improve processes continuously.",
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
            Bring Consistency to Every Task
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Eliminate missed steps and ensure quality with Bizby’s Checklist Management Module.
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
