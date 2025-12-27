import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/visit-activity-management-hero.jpg"; // keep same theme-style image

  const pageTitle = "Visit Activity Management, Streamlined";
  const pageByline = "Plan, track, and optimize on-site and field visits";
  const pageDescription =
    "Bizby’s Visit Activity Management Module helps organizations manage field visits, client meetings, inspections, and follow-ups efficiently. Track activities in real time and improve accountability across teams.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Visit Activity Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Visit Activity Management";
  const featuresDescription =
    "A complete solution to manage field visits and on-ground activities with full visibility.";

  const features = [
    {
      title: "Visit Planning & Scheduling",
      description:
        "Plan and schedule visits with customers, vendors, or sites easily.",
      icon: "Calendar",
    },
    {
      title: "Field Staff Assignment",
      description:
        "Assign visits to field teams and track responsibilities.",
      icon: "Users",
    },
    {
      title: "Check-In / Check-Out Tracking",
      description:
        "Track visit start and end times with location-based check-ins.",
      icon: "MapPin",
    },
    {
      title: "Visit Notes & Attachments",
      description:
        "Capture notes, photos, documents, and feedback during visits.",
      icon: "FileText",
    },
    {
      title: "Follow-Ups & Action Items",
      description:
        "Create follow-up tasks and track post-visit actions.",
      icon: "CheckCircle",
    },
    {
      title: "Visit Reports & Analytics",
      description:
        "Analyze visit frequency, performance, and outcomes.",
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
            How Visit Activity Management Works
          </h2>
          <p className="text-muted-foreground">
            A structured workflow to manage every visit efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Plan Visits",
              description:
                "Schedule visits and define objectives in advance.",
            },
            {
              step: "02",
              title: "Assign & Track",
              description:
                "Assign field staff and track visit status in real time.",
            },
            {
              step: "03",
              title: "Record Activity",
              description:
                "Capture visit details, notes, and evidence on the go.",
            },
            {
              step: "04",
              title: "Review & Improve",
              description:
                "Analyze visit data and optimize field operations.",
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
            Gain Full Visibility Into Field Activities
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Improve field productivity, accountability, and reporting with Bizby’s Visit Activity Management Module.
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
