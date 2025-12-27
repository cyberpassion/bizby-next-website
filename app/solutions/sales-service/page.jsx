import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/sales-service-management-hero.jpg"; // same theme image style

  const pageTitle = "Sales & Service Management, Unified";
  const pageByline = "Manage sales pipelines and service operations seamlessly";
  const pageDescription =
    "Bizby’s Sales & Service Management Module helps businesses streamline lead conversion, order processing, and customer service from a single platform. Drive revenue growth while delivering exceptional customer experiences.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Sales & Service Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Sales & Service Management";
  const featuresDescription =
    "An end-to-end solution to manage sales cycles and service workflows efficiently.";

  const features = [
    {
      title: "Sales Pipeline Management",
      description:
        "Track leads, opportunities, and deals across every sales stage.",
      icon: "TrendingUp",
    },
    {
      title: "Quotation & Order Management",
      description:
        "Create quotes, manage orders, and track fulfillment effortlessly.",
      icon: "FileText",
    },
    {
      title: "Customer Service & Ticketing",
      description:
        "Handle customer queries, complaints, and service requests efficiently.",
      icon: "LifeBuoy",
    },
    {
      title: "Task & SLA Tracking",
      description:
        "Assign tasks, monitor SLAs, and ensure timely service delivery.",
      icon: "Clock",
    },
    {
      title: "Field Service Management",
      description:
        "Manage on-site service visits, technicians, and schedules.",
      icon: "MapPin",
    },
    {
      title: "Sales & Service Analytics",
      description:
        "Gain insights into performance, revenue, and service efficiency.",
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
            How Sales & Service Management Works
          </h2>
          <p className="text-muted-foreground">
            A streamlined workflow from lead generation to post-sales support.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Capture Leads & Requests",
              description:
                "Collect sales leads and service requests from multiple channels.",
            },
            {
              step: "02",
              title: "Convert & Fulfill",
              description:
                "Convert leads into orders and deliver products or services.",
            },
            {
              step: "03",
              title: "Serve & Support",
              description:
                "Resolve customer issues through structured service workflows.",
            },
            {
              step: "04",
              title: "Analyze & Improve",
              description:
                "Track performance and optimize sales and service processes.",
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
            Accelerate Sales & Elevate Service
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Increase revenue, improve customer satisfaction, and streamline operations with Bizby’s Sales & Service Management Module.
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
