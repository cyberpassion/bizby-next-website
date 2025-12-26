import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";
import { TestimonialSection } from "@/components/layout/sections/cyp/testimonial";

import { features } from "./features";
import { reviews } from "./reviews";

export default async function Page() {
	const headerImage = "/seo.jpg";

	const pageTitle = "Healthcare Management, Simplified";
	const pageByline = "Deliver better care with smarter, connected systems";
	const pageDescription = "Bizby is an all-in-one healthcare management platform designed for hospitals, clinics, and diagnostic centers to manage patients, appointments, billing, staff, and insights from a single secure platform.";

	const getStartedLink = "/signup";
	const demoLink = "/demo";

	const featuresTitle = "Everything a Modern Healthcare Provider Needs";
	const featuresDescription = "From patient registration and appointment scheduling to billing, medical records, and analytics — Bizby helps healthcare organizations streamline operations and improve patient outcomes.";

	return (
		<>
			<SplitHeroSection headerImage={headerImage} title={pageTitle} byline={pageByline} description={pageDescription} getStartedLink={getStartedLink} demoLink={demoLink} />
			<FeaturesSection title={featuresTitle} description={featuresDescription} featureList={features} />
			<TestimonialSection reviewList={reviews} />
		</>
	);
}

