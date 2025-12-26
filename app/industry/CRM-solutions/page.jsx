import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";
import { TestimonialSection } from "@/components/layout/sections/cyp/testimonial";

import { features } from "./features";
import { reviews } from "./reviews";

export default async function Page() {
	const headerImage = "/seo.jpg";

	const pageTitle = "CRM Solutions, Simplified";
	const pageByline = "Build stronger relationships with every customer";
	const pageDescription =
		"Bizby is a powerful CRM platform designed to help businesses manage leads, customers, sales, and support interactions in one centralized system for complete visibility and smarter decision-making.";

	const getStartedLink = "/signup";
	const demoLink = "/demo";

	const featuresTitle = "Everything a Modern CRM Needs";
	const featuresDescription =
		"From lead capture and contact management to sales pipelines, customer support, automation, and analytics — Bizby helps teams stay organized, close more deals, and deliver exceptional customer experiences.";

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
