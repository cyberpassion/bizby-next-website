import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/leave-management-hero.jpg"; // theme-style hero image

  const pageTitle = "Leave Application Management, Simplified";
  const pageByline = "Manage employee leaves with transparency and ease";
  const pageDescription =
    "Bizby’s Leave Application Management Module helps organizations handle employee leave requests efficiently. Automate approvals, maintain accurate leave balances, and ensure workforce continuity.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Leave Application Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Leave Application Management";
  const featuresDescription =
    "A smart and organized approach to managing employee leave policies and requests.";

  const features = [
    {
      title: "Leave Request Submission",
      description:
        "Employees can apply for leave quickly with clear leave type selection.",
      icon: "FilePlus",
    },
    {
      title: "Approval Workflow",
      description:
        "Multi-level approval workflows with manager notifications.",
      icon: "CheckSquare",
    },
    {
      title: "Leave Balance Tracking",
      description:
        "Automatically track earned, used, and remaining leave balances.",
      icon: "BarChart3",
    },
    {
      title: "Policy & Leave Type Management",
      description:
        "Configure leave types, rules, and organizational policies easily.",
      icon: "Settings",
    },
    {
      title: "Calendar & Team Visibility",
      description:
        "View team availability and planned leaves in a shared calendar.",
      icon: "Calendar",
    },
    {
      title: "Reports & Compliance",
      description:
        "Generate reports for audits, payroll, and compliance needs.",
      icon: "FileText",
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
            How Leave Application Management Works
          </h2>
          <p className="text-muted-foreground">
            A simple workflow that keeps employees and managers aligned.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Apply for Leave",
              description:
                "Employees submit leave requests with dates and reasons.",
            },
            {
              step: "02",
              title: "Review & Approve",
              description:
                "Managers review and approve or reject requests.",
            },
            {
              step: "03",
              title: "Update Balances",
              description:
                "Leave balances update automatically upon approval.",
            },
            {
              step: "04",
              title: "Track & Report",
              description:
                "Monitor leave trends and generate reports anytime.",
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
            Simplify Employee Leave Management
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Reduce manual effort, improve transparency, and ensure compliance with Bizby’s Leave Application Management Module.
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
