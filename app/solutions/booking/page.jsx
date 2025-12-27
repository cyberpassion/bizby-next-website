import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

export default async function Page() {
  const headerImage = "/booking-hero.jpg";

  const pageTitle = "Smart Booking & Scheduling, Simplified";
  const pageByline = "Manage appointments, reservations, and schedules effortlessly";
  const pageDescription =
    "Bizby’s Booking Module helps businesses and institutions manage appointments, reservations, and resource availability with a seamless, automated scheduling experience.";

  const getStartedLink = "/signup";
  const demoLink = "/demo";

  /* Booking Module Features */
  const featuresTitle = "Everything You Need for Seamless Bookings";
  const featuresDescription =
    "From customer appointments to internal scheduling, Bizby keeps your calendar organized and optimized.";

  const features = [
    {
      title: "Flexible Appointment Scheduling",
      description:
        "Allow customers or users to book, reschedule, or cancel appointments based on real-time availability.",
      icon: "Calendar",
    },
    {
      title: "Resource & Staff Availability",
      description:
        "Manage availability for staff, rooms, equipment, or services with smart allocation rules.",
      icon: "Users",
    },
    {
      title: "Automated Reminders & Notifications",
      description:
        "Reduce no-shows with automated reminders via SMS, email, or in-app notifications.",
      icon: "Bell",
    },
    {
      title: "Multi-Location & Time-Zone Support",
      description:
        "Handle bookings across multiple branches and time zones from a single dashboard.",
      icon: "MapPin",
    },
    {
      title: "Calendar & Tool Integrations",
      description:
        "Sync bookings with Google Calendar, Outlook, and other tools for real-time updates.",
      icon: "RefreshCcw",
    },
    {
      title: "Analytics & Booking Insights",
      description:
        "Track booking trends, utilization rates, and peak hours to optimize scheduling.",
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


      {/* Booking Flow Section */}
      <section className="container py-20 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">
            How the Booking Process Works
          </h2>
          <p className="text-muted-foreground">
            A simple, automated flow that saves time for both users and teams.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Select Service or Resource",
              description:
                "Users choose the service, staff member, or resource they want to book.",
            },
            {
              step: "02",
              title: "Choose Date & Time",
              description:
                "Available slots are shown in real time based on defined schedules.",
            },
            {
              step: "03",
              title: "Confirm Booking",
              description:
                "Bookings are confirmed instantly with automated notifications.",
            },
            {
              step: "04",
              title: "Manage & Track",
              description:
                "Users and admins can reschedule, cancel, or track bookings easily.",
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
            Never Miss a Booking Again
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Streamline scheduling, reduce no-shows, and deliver a smoother booking
            experience with Bizby’s Booking Module.
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
