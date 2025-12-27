import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/product-management-hero.jpg"; // same theme-style image

  const pageTitle = "Product Management, Structured & Scalable";
  const pageByline = "Manage products, pricing, and lifecycle from one platform";
  const pageDescription =
    "Bizby’s Product Management Module helps you create, organize, and manage your product catalog efficiently. Control pricing, variants, and product lifecycle with complete visibility.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Product Management Features */
  const featuresTitle = "Why Businesses Choose Bizby Product Management";
  const featuresDescription =
    "A powerful solution to manage products across sales, inventory, and operations.";

  const features = [
    {
      title: "Centralized Product Catalog",
      description:
        "Maintain a single source of truth for all products and services.",
      icon: "Package",
    },
    {
      title: "Product Variants & Attributes",
      description:
        "Manage SKUs, variants, categories, and custom attributes easily.",
      icon: "Layers",
    },
    {
      title: "Pricing & Tax Configuration",
      description:
        "Configure pricing, discounts, and tax rules with full control.",
      icon: "Tag",
    },
    {
      title: "Inventory Integration",
      description:
        "Sync products with inventory and stock availability in real time.",
      icon: "Boxes",
    },
    {
      title: "Product Lifecycle Management",
      description:
        "Track product status from launch to discontinuation.",
      icon: "RefreshCcw",
    },
    {
      title: "Reports & Product Insights",
      description:
        "Analyze product performance, demand, and profitability.",
      icon: "FileBarChart",
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
            How Product Management Works
          </h2>
          <p className="text-muted-foreground">
            A clear and controlled approach to managing your product ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Product Creation",
              description:
                "Add products, variants, pricing, and attributes.",
            },
            {
              step: "02",
              title: "Catalog Organization",
              description:
                "Categorize and structure products for easy access.",
            },
            {
              step: "03",
              title: "Sales & Inventory Sync",
              description:
                "Keep stock, pricing, and availability aligned.",
            },
            {
              step: "04",
              title: "Performance Optimization",
              description:
                "Track insights to optimize pricing and product strategy.",
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
            Take Control of Your Product Portfolio
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Manage products efficiently, maintain consistency, and drive smarter business decisions with Bizby’s Product Management Module.
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
