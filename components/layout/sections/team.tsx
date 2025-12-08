"use client";

import Image from "next/image";
import Link from "next/link";

import { teamList } from "@/@data/teams";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";

import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SectionContainer from "@/components/layout/section-container";
import SectionHeader from "@/components/layout/section-header";

export function TeamSection() {
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
      default:
        return null;
    }
  };

  return (
    <SectionContainer id="team">
      <SectionHeader subTitle="Team" title="The Company Dream Team" />

      <Carousel
        opts={{ align: "start" }}
        className="relative mx-auto w-[80%] sm:w-[90%] lg:max-w-(--breakpoint-xl)"
      >
        <CarouselContent>
          {teamList.map(
            ({ imageUrl, firstName, lastName, positions, socialNetworks }, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="bg-muted group/hoverimg flex h-full flex-col overflow-hidden pt-0">
                  <figure className="overflow-hidden">
                    <Image
                      src={imageUrl}
                      width={300}
                      height={300}
                      alt={`${firstName} ${lastName}`}
                      className="aspect-square w-full object-cover saturate-0 transition-all duration-200 ease-linear group-hover/hoverimg:scale-[1.05] group-hover/hoverimg:saturate-100"
                      unoptimized
                    />
                  </figure>

                  <CardHeader className="pt-0">
                    <CardTitle className="text-lg">
                      {firstName}
                      <span className="ml-1 text-primary">{lastName}</span>
                    </CardTitle>
                    <CardDescription>
                      {positions.join(", ")}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="mt-auto flex gap-4">
                    {socialNetworks.map(({ name, url }, index) => (
                      <Link
                        key={index}
                        href={url}
                        target="_blank"
                        className="transition-opacity hover:opacity-80"
                      >
                        {socialIcon(name)}
                      </Link>
                    ))}
                  </CardFooter>
                </Card>
              </CarouselItem>
            )
          )}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </SectionContainer>
  );
}
