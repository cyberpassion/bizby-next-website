import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";
import { TestimonialSection } from "@/components/layout/sections/cyp/testimonial";

import { features } from "./features";
import { reviews } from "./reviews";

export default async function Page() {
	const headerImage = "/seo.jpg";

	const pageTitle = "Sales & Service Management, Simplified";
	const pageByline = "Close deals faster and deliver exceptional service experiences";
	const pageDescription =
		"Bizby is an all-in-one sales and service management platform designed for growing businesses to manage leads, customers, service requests, teams, billing, and performance insights from one connected system.";

	const getStartedLink = "/signup";
	const demoLink = "/demo";

	const featuresTitle = "Everything a Modern Sales & Service Team Needs";
	const featuresDescription =
		"From lead management and sales pipelines to service tickets, field operations, and analytics — Bizby helps teams sell smarter, serve faster, and build long-lasting customer relationships.";

	return (
		<>
			<SplitHeroSection
				headerImage={headerImage}
				title={pageTitle}
				byline={pageByline}
				description={pageDescription}
				getStartedLink={getStartedLink}
				demoLink={demoLink}
			/>
			<FeaturesSection
				title={featuresTitle}
				description={featuresDescription}
				featureList={features}
			/>
			<TestimonialSection reviewList={reviews} />
		</>
	);
}
