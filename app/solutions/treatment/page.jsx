import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/treatment-management.jpg"; // replace with your asset

  const pageTitle = "Treatment Management, Simplified";
  const pageByline =
    "Plan, track, and manage patient treatments with complete visibility";
  const pageDescription =
    "Bizby Treatment Management helps healthcare providers efficiently plan treatments, monitor progress, and ensure consistent, high-quality patient care. Centralize treatment workflows, reduce errors, and improve outcomes with a smart, scalable system.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Treatment Management features */
  const featuresTitle = "Why Choose Bizby Treatment Management";
  const featuresDescription =
    "From treatment planning to follow-ups, Bizby enables healthcare teams to deliver coordinated, compliant, and patient-centric care.";

  const features = [
    {
      title: "Centralized Treatment Plans",
      description:
        "Create, manage, and update treatment plans in one place for better coordination across doctors, nurses, and care teams.",
      icon: "ClipboardList",
    },
    {
      title: "Patient Progress Tracking",
      description:
        "Track treatment milestones, outcomes, and adherence to ensure timely interventions and improved patient recovery.",
      icon: "Activity",
    },
    {
      title: "Medication & Procedure Management",
      description:
        "Maintain accurate records of medications, procedures, and schedules to reduce errors and ensure compliance.",
      icon: "Pill",
    },
    {
      title: "Doctor & Care Team Collaboration",
      description:
        "Enable seamless collaboration between physicians, specialists, and staff with shared treatment insights.",
      icon: "Users",
    },
    {
      title: "Alerts & Follow-Up Reminders",
      description:
        "Automated alerts ensure no treatment, review, or follow-up is ever missed.",
      icon: "Bell",
    },
    {
      title: "Reports & Outcome Analytics",
      description:
        "Analyze treatment effectiveness, patient outcomes, and operational performance with actionable reports.",
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
            How Treatment Management Works
          </h2>
          <p className="text-muted-foreground">
            A structured approach to delivering consistent, patient-focused care.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Assessment & Diagnosis",
              description:
                "Capture patient history, diagnosis, and care requirements accurately.",
            },
            {
              step: "02",
              title: "Treatment Planning",
              description:
                "Design customized treatment plans aligned with medical guidelines.",
            },
            {
              step: "03",
              title: "Execution & Monitoring",
              description:
                "Track medications, procedures, and patient progress in real time.",
            },
            {
              step: "04",
              title: "Review & Optimization",
              description:
                "Evaluate outcomes and adjust treatments for better patient results.",
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
            Deliver Better Patient Outcomes
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Simplify treatment workflows, enhance collaboration, and ensure
            consistent care delivery with Bizby Treatment Management.
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
