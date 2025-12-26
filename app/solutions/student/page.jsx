import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "data:image/jpeg;base64,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";

  const pageTitle = "Smart Student Management, Simplified";
  const pageByline = "Engage, manage, and support students from enrollment to success";
  const pageDescription =
    "Bizby’s Student Module helps institutions manage student data, track academic progress, improve engagement, and deliver personalized experiences across the entire student lifecycle.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Student Module Features */
  const featuresTitle = "Everything You Need to Manage Students Effectively";
  const featuresDescription =
    "From admissions to academics and beyond, Bizby’s Student Module gives you a unified view of every learner.";

  const features = [
    {
      title: "Centralized Student Profiles",
      description:
        "Maintain complete student records including personal details, academic history, attendance, and performance—all in one place.",
      icon: "User",
    },
    {
      title: "Admissions & Enrollment Tracking",
      description:
        "Track inquiries, applications, admissions, and enrollments with a structured, transparent workflow.",
      icon: "ClipboardList",
    },
    {
      title: "Attendance & Academic Monitoring",
      description:
        "Monitor attendance, grades, and academic progress in real time to identify gaps early.",
      icon: "BookOpen",
    },
    {
      title: "Student Communication & Engagement",
      description:
        "Send announcements, reminders, and updates via email, SMS, or in-app notifications.",
      icon: "MessageSquare",
    },
    {
      title: "Performance Analytics & Reports",
      description:
        "Gain actionable insights with dashboards and reports on student performance and engagement.",
      icon: "BarChart",
    },
    {
      title: "Secure Data & Role-Based Access",
      description:
        "Ensure student data privacy with secure access controls for admins, teachers, and staff.",
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
        features={features}
      />

      {/* Lifecycle Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">
            Manage the Complete Student Lifecycle
          </h2>
          <p className="text-muted-foreground">
            A structured approach to support students at every stage of their journey.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Inquiry & Admission",
              description:
                "Capture leads, manage applications, and streamline the admission process.",
            },
            {
              step: "02",
              title: "Enrollment & Onboarding",
              description:
                "Enroll students seamlessly and provide a smooth onboarding experience.",
            },
            {
              step: "03",
              title: "Academic Progress",
              description:
                "Track attendance, assessments, and academic performance continuously.",
            },
            {
              step: "04",
              title: "Retention & Success",
              description:
                "Identify at-risk students early and support long-term success.",
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
            Build Better Student Experiences
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Empower your institution with tools that improve engagement,
            transparency, and academic outcomes for every student.
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
