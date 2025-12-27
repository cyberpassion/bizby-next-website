import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/transport-management-hero.jpg"; // theme-style hero image

  const pageTitle = "Transport Management, Simplified";
  const pageByline = "Plan, track, and optimize your transport operations efficiently";
  const pageDescription =
    "Bizby’s Transport Management Module helps businesses and institutions manage vehicles, routes, schedules, and drivers seamlessly. Optimize logistics, ensure safety, and track operations in real time.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Transport Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Transport Management";
  const featuresDescription =
    "Manage vehicles, drivers, and routes efficiently while reducing costs and improving safety.";

  const features = [
    {
      title: "Fleet & Vehicle Management",
      description:
        "Track all vehicles, maintenance schedules, and usage history in one place.",
      icon: "Truck",
    },
    {
      title: "Driver Assignment & Tracking",
      description:
        "Assign drivers to routes, monitor performance, and ensure compliance.",
      icon: "UserCheck",
    },
    {
      title: "Route Planning & Optimization",
      description:
        "Plan routes efficiently to reduce travel time and fuel costs.",
      icon: "Map",
    },
    {
      title: "Real-Time Vehicle Tracking",
      description:
        "Monitor vehicle location and status in real time with GPS integration.",
      icon: "Navigation",
    },
    {
      title: "Fuel & Expense Management",
      description:
        "Track fuel consumption, expenses, and optimize operational costs.",
      icon: "CreditCard",
    },
    {
      title: "Reports & Analytics",
      description:
        "Analyze trips, fleet performance, and operational efficiency.",
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
            How Transport Management Works
          </h2>
          <p className="text-muted-foreground">
            A structured approach to managing vehicles, routes, and drivers efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Plan & Schedule",
              description:
                "Create routes, assign vehicles, and schedule trips efficiently.",
            },
            {
              step: "02",
              title: "Assign & Track Drivers",
              description:
                "Allocate drivers and monitor trip progress in real time.",
            },
            {
              step: "03",
              title: "Monitor Operations",
              description:
                "Track vehicle location, performance, and fuel consumption.",
            },
            {
              step: "04",
              title: "Analyze & Optimize",
              description:
                "Generate reports to optimize routes, reduce costs, and improve efficiency.",
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
            Optimize Your Transport Operations
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Reduce costs, improve safety, and streamline vehicle operations with Bizby’s Transport Management Module.
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
