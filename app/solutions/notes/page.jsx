import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/notes-management.jpg"; // replace with your image

  const pageTitle = "Smart Notes for Modern Teams";
  const pageByline =
    "Capture, organize, and access notes anytime, anywhere";
  const pageDescription =
    "Bizby Notes Management helps teams and individuals capture ideas, meeting notes, and important information in one secure place. Stay organized, collaborate better, and never lose critical details again.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Notes Management features */
  const featuresTitle = "Why Choose Bizby Notes Management";
  const featuresDescription =
    "From quick notes to structured documentation, Bizby empowers you to manage information efficiently and securely.";

  const features = [
    {
      title: "Centralized Notes Repository",
      description:
        "Store all your notes in a single, searchable location for easy access and organization.",
      icon: "FileText",
    },
    {
      title: "Quick Capture & Editing",
      description:
        "Create, edit, and update notes instantly during meetings, calls, or field activities.",
      icon: "Edit",
    },
    {
      title: "Tags & Smart Organization",
      description:
        "Use tags, categories, and filters to organize notes and find information faster.",
      icon: "Tags",
    },
    {
      title: "Collaboration & Sharing",
      description:
        "Share notes with team members and collaborate in real time with controlled access.",
      icon: "Users",
    },
    {
      title: "Secure Access & Permissions",
      description:
        "Ensure sensitive information stays protected with role-based access control.",
      icon: "Lock",
    },
    {
      title: "Search & History Tracking",
      description:
        "Quickly find notes and view edit history to track changes and updates.",
      icon: "Search",
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
            How Notes Management Works
          </h2>
          <p className="text-muted-foreground">
            A simple and effective workflow to capture and manage knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Create Notes",
              description:
                "Capture notes quickly from meetings, calls, or daily activities.",
            },
            {
              step: "02",
              title: "Organize & Tag",
              description:
                "Structure notes using tags and categories for easy retrieval.",
            },
            {
              step: "03",
              title: "Collaborate",
              description:
                "Share notes with teammates and collaborate securely in real time.",
            },
            {
              step: "04",
              title: "Review & Retrieve",
              description:
                "Search, review, and reuse notes whenever needed.",
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
            Keep Your Information Organized
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Capture ideas, share knowledge, and stay organized with Bizby
            Notes Management.
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
