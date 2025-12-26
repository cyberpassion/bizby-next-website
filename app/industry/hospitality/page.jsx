import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";
import { TestimonialSection } from "@/components/layout/sections/cyp/testimonial";

import { features } from "./features";
import { reviews } from "./reviews";

export default async function Page() {
	const headerImage = "/seo.jpg";

	const pageTitle = "Hospitality Management, Simplified";
	const pageByline = "Deliver exceptional guest experiences with connected operations";
	const pageDescription =
		"Bizby is an all-in-one hospitality management platform designed for hotels, resorts, serviced apartments, and hospitality groups to manage reservations, guests, staff, billing, and insights from a single platform.";

	const getStartedLink = "/signup";
	const demoLink = "/demo";

	const featuresTitle = "Everything a Modern Hospitality Business Needs";
	const featuresDescription =
		"From reservations and guest check-ins to housekeeping, billing, and performance analytics — Bizby helps hospitality businesses streamline operations and elevate guest satisfaction.";

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
