import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/registration-management-hero.jpg"; // same theme-style image

  const pageTitle = "Registration Management, Simple & Scalable";
  const pageByline = "Manage registrations smoothly from start to confirmation";
  const pageDescription =
    "Bizby’s Registration Management Module helps you capture, verify, and manage registrations efficiently. Whether for students, events, programs, or services, streamline the entire registration process.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Registration Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Registration Management";
  const featuresDescription =
    "A flexible and reliable solution designed to handle registrations with speed, accuracy, and control.";

  const features = [
    {
      title: "Custom Registration Forms",
      description:
        "Create dynamic and customizable registration forms tailored to your needs.",
      icon: "ClipboardList",
    },
    {
      title: "Automated Data Capture",
      description:
        "Capture and store registration data automatically with validation rules.",
      icon: "Database",
    },
    {
      title: "Approval & Verification Workflow",
      description:
        "Review, approve, or reject registrations with configurable workflows.",
      icon: "CheckCircle",
    },
    {
      title: "Payment & Fee Tracking",
      description:
        "Track registration fees, payment status, and confirmations seamlessly.",
      icon: "CreditCard",
    },
    {
      title: "Status Tracking & Notifications",
      description:
        "Keep registrants informed with automated status updates and notifications.",
      icon: "Bell",
    },
    {
      title: "Reports & Audit Logs",
      description:
        "Generate reports and maintain audit trails for complete transparency.",
      icon: "FileBarChart",
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
            How Registration Management Works
          </h2>
          <p className="text-muted-foreground">
            A smooth and structured process to handle registrations efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Form Creation",
              description:
                "Design and publish customized registration forms.",
            },
            {
              step: "02",
              title: "Submission & Validation",
              description:
                "Capture entries and validate data automatically.",
            },
            {
              step: "03",
              title: "Approval & Payment",
              description:
                "Review submissions, collect payments, and confirm registrations.",
            },
            {
              step: "04",
              title: "Confirmation & Reporting",
              description:
                "Send confirmations and generate actionable reports.",
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
            Streamline Every Registration Experience
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Reduce manual effort, improve accuracy, and deliver a seamless registration experience with Bizby’s Registration Management Module.
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
