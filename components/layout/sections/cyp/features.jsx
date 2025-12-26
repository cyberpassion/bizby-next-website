"use client";

import React, { useState } from "react";

import { CardTitle } from "@/components/ui/card";
import Icon from "@/components/icon";
import { CardHover, CardsHover } from "@/components/ui/extras/cards-hover";
import SectionContainer from "@/components/layout/section-container";
import SectionHeader from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";

export const FeaturesSection = ({ title, description, featureList = [] }) => {
	const [value, setValue] = useState(null);
	const [showAll, setShowAll] = useState(false);

	const visibleFeatures = showAll ? featureList : featureList.slice(0, 6);

	return (
		<SectionContainer id="features" className="bg-background py-12">
			<SectionHeader title={title} description={description} className="text-left max-w-full" />

			<CardsHover className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" value={value} onValueChange={setValue}>
				{visibleFeatures.map((card) => (
					<CardHover key={card.title} value={card.icon} className="flex items-start gap-6">
						<div className="space-y-4">
							<CardTitle className="text-lg">{card.title}</CardTitle>

							<p className="text-muted-foreground font-normal">{card.description}</p>
						</div>

						<div className="bg-primary/20 ring-primary/10 rounded-full p-2 ring-8">
							<Icon name={card.icon} className="text-primary size-6" />
						</div>
					</CardHover>
				))}
			</CardsHover>
		</SectionContainer>
	);
};
