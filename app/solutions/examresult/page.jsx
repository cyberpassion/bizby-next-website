import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/exam-result-hero.jpg"; // same theme-style image

  const pageTitle = "Exam Results, Accurate & Instant";
  const pageByline = "Publish, analyze, and manage exam results with confidence";
  const pageDescription =
    "Bizby’s Exam Result Module enables institutions to generate, publish, and analyze exam results securely. Ensure accuracy, transparency, and faster access for students, faculty, and administrators.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Exam Result Features */
  const featuresTitle = "Why Institutions Choose Bizby Exam Result Module";
  const featuresDescription =
    "A reliable and scalable solution designed for academic excellence and operational efficiency.";

  const features = [
    {
      title: "Automated Result Generation",
      description:
        "Generate exam results automatically with configurable grading rules and calculations.",
      icon: "Calculator",
    },
    {
      title: "Secure Result Publishing",
      description:
        "Publish results securely with role-based access for students, faculty, and administrators.",
      icon: "ShieldCheck",
    },
    {
      title: "Student Performance Analytics",
      description:
        "Analyze student performance across subjects, classes, and terms with detailed reports.",
      icon: "BarChart",
    },
    {
      title: "Grade & Rank Management",
      description:
        "Manage grades, ranks, merit lists, and pass/fail criteria with complete accuracy.",
      icon: "Award",
    },
    {
      title: "Revaluation & Corrections",
      description:
        "Handle revaluation requests, corrections, and updates without manual complexity.",
      icon: "RefreshCcw",
    },
    {
      title: "Compliance & Audit Ready",
      description:
        "Maintain historical records, audit trails, and compliance-ready result data.",
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
            How Exam Result Management Works
          </h2>
          <p className="text-muted-foreground">
            A structured and transparent approach to result processing and publishing.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Marks Collection",
              description:
                "Capture marks from exams, assessments, and internal evaluations.",
            },
            {
              step: "02",
              title: "Result Processing",
              description:
                "Apply grading rules, calculate totals, and validate accuracy.",
            },
            {
              step: "03",
              title: "Publishing & Access",
              description:
                "Publish results securely with controlled access for stakeholders.",
            },
            {
              step: "04",
              title: "Analysis & Reporting",
              description:
                "Review performance trends and generate academic reports.",
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
            Deliver Results with Accuracy & Trust
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Simplify exam result management, improve transparency, and empower academic success with Bizby’s Exam Result Module.
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
