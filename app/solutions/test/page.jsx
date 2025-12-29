import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/test-management.jpg"; // replace with your asset

  const pageTitle = "Test Management & Evaluation";
  const pageByline =
    "Create, conduct, and evaluate tests with accuracy and control";
  const pageDescription =
    "Bizby Test Management enables organizations to design assessments, conduct exams, and evaluate results efficiently. Ensure fairness, accuracy, and actionable insights across academic, training, and certification programs.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Test Management features */
  const featuresTitle = "Why Choose Bizby Test Management";
  const featuresDescription =
    "From test creation to result analysis, Bizby provides a secure and scalable assessment management solution.";

  const features = [
    {
      title: "Flexible Test Creation",
      description:
        "Design tests using multiple question types, sections, difficulty levels, and scoring rules.",
      icon: "ClipboardList",
    },
    {
      title: "Secure Test Administration",
      description:
        "Conduct tests securely with controlled access, scheduling, and monitoring.",
      icon: "ShieldCheck",
    },
    {
      title: "Automated Evaluation & Scoring",
      description:
        "Evaluate objective tests automatically and streamline manual assessments.",
      icon: "CheckCircle",
    },
    {
      title: "Result Analysis & Reports",
      description:
        "Analyze performance with detailed reports, rankings, and insights.",
      icon: "BarChart",
    },
    {
      title: "Candidate & Attempt Management",
      description:
        "Manage candidates, attempts, retests, and eligibility with ease.",
      icon: "Users",
    },
    {
      title: "Compliance & Audit Ready",
      description:
        "Maintain logs, records, and controls for academic and organizational compliance.",
      icon: "FileCheck",
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
            How Test Management Works
          </h2>
          <p className="text-muted-foreground">
            A structured workflow for accurate and efficient assessments.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Test Design",
              description:
                "Create structured tests aligned with objectives and standards.",
            },
            {
              step: "02",
              title: "Scheduling & Setup",
              description:
                "Assign candidates, schedule exams, and configure access controls.",
            },
            {
              step: "03",
              title: "Conduct & Evaluate",
              description:
                "Administer tests and evaluate results with accuracy.",
            },
            {
              step: "04",
              title: "Analyze & Improve",
              description:
                "Review performance insights and refine future assessments.",
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
            Simplify Assessment & Evaluation
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Deliver accurate, fair, and insightful assessments with Bizby
            Test Management.
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
