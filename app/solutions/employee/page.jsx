import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/employee-hero.jpg";

  const pageTitle = "Employee Management, Made Simple";
  const pageByline = "Empower your workforce and improve operational efficiency";
  const pageDescription =
    "Bizby’s Employee Module helps organizations manage employee records, attendance, roles, performance, and communication—all from a single, centralized platform.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Employee Module Features */
  const featuresTitle = "Everything You Need to Manage Your Workforce";
  const featuresDescription =
    "From onboarding to performance tracking, Bizby gives you complete visibility and control over your team.";

  const features = [
    {
      title: "Centralized Employee Profiles",
      description:
        "Maintain complete employee records including personal details, roles, documents, and work history.",
      icon: "User",
    },
    {
      title: "Attendance & Shift Management",
      description:
        "Track attendance, shifts, leaves, and working hours with flexible scheduling options.",
      icon: "CalendarCheck",
    },
    {
      title: "Roles, Permissions & Access",
      description:
        "Define roles and permissions to ensure secure, role-based access to systems and data.",
      icon: "ShieldCheck",
    },
    {
      title: "Performance Tracking",
      description:
        "Monitor goals, KPIs, and performance metrics to support employee growth and accountability.",
      icon: "TrendingUp",
    },
    {
      title: "Internal Communication",
      description:
        "Share announcements, updates, and feedback through integrated communication tools.",
      icon: "MessageSquare",
    },
    {
      title: "Reports & Workforce Insights",
      description:
        "Analyze attendance trends, productivity, and workforce costs with real-time reports.",
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
        features={features}
      />

      {/* Employee Lifecycle Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">
            Manage the Complete Employee Lifecycle
          </h2>
          <p className="text-muted-foreground">
            Support your team from onboarding to long-term performance and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Onboarding & Setup",
              description:
                "Digitize onboarding, assign roles, and set access from day one.",
            },
            {
              step: "02",
              title: "Scheduling & Attendance",
              description:
                "Manage shifts, attendance, leaves, and work hours efficiently.",
            },
            {
              step: "03",
              title: "Performance & Development",
              description:
                "Track goals, reviews, and skill development over time.",
            },
            {
              step: "04",
              title: "Retention & Engagement",
              description:
                "Improve engagement through communication, feedback, and transparency.",
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
            Build a More Productive Workforce
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Streamline employee management, improve accountability,
            and empower your teams with Bizby’s Employee Module.
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
