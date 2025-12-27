import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/service-management-hero.jpg"; // theme-style hero image

  const pageTitle = "Service Management, Simplified";
  const pageByline = "Manage service requests, tasks, and customer support efficiently";
  const pageDescription =
    "Bizby’s Service Management Module helps businesses track, manage, and optimize service operations. Ensure timely resolutions, monitor team performance, and enhance customer satisfaction.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Service Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Service Management";
  const featuresDescription =
    "A comprehensive solution to manage service operations, tasks, and customer satisfaction.";

  const features = [
    {
      title: "Service Request Management",
      description:
        "Track incoming service requests and assign tasks to the right team.",
      icon: "Clipboard",
    },
    {
      title: "Task Scheduling & Assignment",
      description:
        "Schedule service tasks, assign technicians, and monitor progress.",
      icon: "Calendar",
    },
    {
      title: "Real-Time Tracking & Updates",
      description:
        "Monitor task status and provide updates to customers in real time.",
      icon: "Activity",
    },
    {
      title: "Customer Communication",
      description:
        "Keep customers informed with notifications and updates for each service request.",
      icon: "MessageCircle",
    },
    {
      title: "Performance Analytics",
      description:
        "Analyze service metrics, resolution times, and team efficiency.",
      icon: "BarChart3",
    },
    {
      title: "Integration & Automation",
      description:
        "Integrate with CRM, billing, and inventory systems for seamless operations.",
      icon: "Plug",
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
            How Service Management Works
          </h2>
          <p className="text-muted-foreground">
            A structured approach to managing service tasks and customer support.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Receive Requests",
              description:
                "Log and categorize incoming service requests efficiently.",
            },
            {
              step: "02",
              title: "Assign & Schedule",
              description:
                "Allocate tasks to teams and schedule service actions.",
            },
            {
              step: "03",
              title: "Track & Update",
              description:
                "Monitor task progress and update customers in real time.",
            },
            {
              step: "04",
              title: "Analyze & Optimize",
              description:
                "Review service metrics and optimize workflows for efficiency.",
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
            Deliver Exceptional Service Every Time
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Improve service efficiency, track team performance, and enhance customer satisfaction with Bizby’s Service Management Module.
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
