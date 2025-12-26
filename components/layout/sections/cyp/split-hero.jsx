import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/extras/background-beams-with-collision";

export const SplitHeroSection = ({ headerImage, title, description, getStartedLink, demoLink }) => {
	return (
		<section className="relative overflow-hidden">
			{/* Background effect */}
			<BackgroundBeamsWithCollision className="absolute inset-0 -z-10" />

			<div className="container relative z-10 mx-auto px-12 py-24">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
					{/* LEFT: Content */}
					<div className="space-y-6">
						<h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">{title}</h1>

						<p className="text-lg text-muted-foreground max-w-xl">{description}</p>

						<div className="flex flex-wrap items-center gap-4 pt-4">
							<Button size="lg" className="gap-2" asChild>
								<Link href={getStartedLink}>
									Get Started
									<ChevronRight className="h-4 w-4" />
								</Link>
							</Button>

							<Button size="lg" variant="outline" asChild>
								<Link href={demoLink}>View Demo</Link>
							</Button>
						</div>
					</div>

					{/* RIGHT: Image */}
					<div className="relative">
						<div className="rounded-2xl border bg-card shadow-xl p-4">
							<Image src={headerImage} alt="Student dashboard preview" width={900} height={600} priority className="rounded-xl w-full h-auto" />
						</div>

						{/* Soft glow */}
						<div className="absolute -inset-8 -z-10 rounded-full bg-primary/10 blur-3xl" />
					</div>
				</div>
			</div>
		</section>
	);
};
