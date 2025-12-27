import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "data:image/jpeg;base64,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";

  const pageTitle = "Patient Management, Reimagined";
  const pageByline = "Deliver connected, personalized, and efficient patient care";
  const pageDescription =
    "Bizby’s Patient Module helps healthcare providers manage patient records, appointments, care journeys, and communication—all from a single, secure platform.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Patient Module Features */
  const featuresTitle = "Everything You Need to Manage Patient Care";
  const featuresDescription =
    "From first appointment to long-term care, Bizby gives you a complete view of every patient.";

  const features = [
    {
      title: "Unified Patient Profiles",
      description:
        "Maintain comprehensive patient records including demographics, medical history, visits, prescriptions, and reports.",
      icon: "User",
    },
    {
      title: "Appointment & Visit Management",
      description:
        "Schedule, track, and manage patient appointments and follow-ups with ease.",
      icon: "Calendar",
    },
    {
      title: "Care Journey Tracking",
      description:
        "Monitor patient progress across consultations, treatments, and recovery phases.",
      icon: "Activity",
    },
    {
      title: "Patient Communication",
      description:
        "Send appointment reminders, care instructions, and updates via SMS, email, or in-app notifications.",
      icon: "MessageSquare",
    },
    {
      title: "Reports, Analytics & Insights",
      description:
        "Analyze patient trends, treatment outcomes, and operational efficiency with real-time dashboards.",
      icon: "BarChart",
    },
    {
      title: "Data Security & Compliance",
      description:
        "Protect sensitive patient data with role-based access, audit logs, and industry-standard security practices.",
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


      {/* Care Lifecycle Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">
            Manage the Complete Patient Journey
          </h2>
          <p className="text-muted-foreground">
            Support patients at every stage of care with a connected, digital-first approach.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Registration & Onboarding",
              description:
                "Digitize patient registration and capture essential health information securely.",
            },
            {
              step: "02",
              title: "Consultation & Treatment",
              description:
                "Record diagnoses, prescriptions, and treatment plans in real time.",
            },
            {
              step: "03",
              title: "Follow-ups & Monitoring",
              description:
                "Track recovery, lab results, and ongoing care through follow-ups.",
            },
            {
              step: "04",
              title: "Long-Term Care & Retention",
              description:
                "Build lasting patient relationships through proactive care and engagement.",
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
            Deliver Better Patient Experiences
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Improve care quality, streamline operations, and enhance patient satisfaction
            with Bizby’s connected patient management platform.
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
