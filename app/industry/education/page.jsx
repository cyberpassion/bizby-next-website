import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";
import { TestimonialSection } from "@/components/layout/sections/cyp/testimonial";

import { features } from "./features";
import { reviews } from "./reviews";

export default async function Page() {
	const headerImage = "/seo.jpg";

	const pageTitle = "Education Management, Simplified";
	const pageByline = "Run your institution smarter, faster, and more connected";
	const pageDescription = "Bizby is an all-in-one student management system designed for schools, colleges, and coaching institutes to manage admissions, attendance, fees, communication, and analytics from one platform.";

	const getStartedLink = "/signup";
	const demoLink = "/demo";

	const featuresTitle = "Everything an Education Institution Needs";
	const featuresDescription = "From student admissions to attendance, exams, communication, and reporting — Bizby helps educational institutions operate efficiently and make data-driven decisions.";

	return (
		<>
			<SplitHeroSection headerImage={headerImage} title={pageTitle} byline={pageByline} description={pageDescription} getStartedLink={getStartedLink} demoLink={demoLink} />
			<FeaturesSection title={featuresTitle} description={featuresDescription} featureList={features} />
			<TestimonialSection reviewList={reviews} />
		</>
	);
}
