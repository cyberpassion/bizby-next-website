import { SplitHeroSection } from "@/components/layout/sections/cyp/split-hero";
import { FeaturesSection } from "@/components/layout/sections/cyp/features";

import { features } from "./features";

export default async function Page() {
    const headerImage = "/cashflow.jpg";

    const pageTitle = "Cashflow Management, Simplified";
    const pageByline = "Track, control, and forecast your business finances with confidence";
    const pageDescription =
        "Bizby Cashflow is a powerful financial management module that helps businesses monitor income, expenses, approvals, and real-time cash positions — all from a single dashboard.";

    const getStartedLink = "/signup";
    const demoLink = "/demo";

    const featuresTitle = "Everything You Need to Manage Cashflow";
    const featuresDescription =
        "From tracking inflows and outflows to approvals, reconciliation, and reporting — Bizby Cashflow gives you full visibility and control over your financial operations.";

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
        </>
    );
}
