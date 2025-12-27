import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/attendance-management-hero.jpg"; // same theme-style image

  const pageTitle = "Attendance Management, Accurate & Effortless";
  const pageByline = "Track attendance reliably across teams, classes, or events";
  const pageDescription =
    "Bizby’s Attendance Management Module helps you record, monitor, and analyze attendance in real time. Whether for employees, students, or events, ensure accuracy, transparency, and compliance.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Attendance Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Attendance Management";
  const featuresDescription =
    "A flexible and scalable solution to manage attendance with ease and confidence.";

  const features = [
    {
      title: "Multiple Attendance Modes",
      description:
        "Mark attendance manually, in bulk, or via automated integrations.",
      icon: "CheckSquare",
    },
    {
      title: "Real-Time Attendance Tracking",
      description:
        "Monitor attendance instantly with live status updates.",
      icon: "Clock",
    },
    {
      title: "Leave & Absence Tracking",
      description:
        "Track absences, late entries, and leaves in one unified view.",
      icon: "CalendarX",
    },
    {
      title: "Shift & Schedule Management",
      description:
        "Manage shifts, class schedules, or session timings easily.",
      icon: "CalendarClock",
    },
    {
      title: "Attendance Reports & Analytics",
      description:
        "Generate detailed reports for payroll, compliance, or performance.",
      icon: "FileBarChart",
    },
    {
      title: "Role-Based Access Control",
      description:
        "Ensure secure access with role-based permissions.",
      icon: "ShieldCheck",
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
            How Attendance Management Works
          </h2>
          <p className="text-muted-foreground">
            A simple and structured process to record and analyze attendance.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Setup & Scheduling",
              description:
                "Define schedules, shifts, or sessions.",
            },
            {
              step: "02",
              title: "Attendance Capture",
              description:
                "Record attendance using selected methods.",
            },
            {
              step: "03",
              title: "Validation & Monitoring",
              description:
                "Review records and track real-time status.",
            },
            {
              step: "04",
              title: "Reporting & Insights",
              description:
                "Analyze trends and generate reports.",
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
            Track Attendance with Confidence
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Reduce manual effort, improve accuracy, and gain insights with Bizby’s Attendance Management Module.
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
