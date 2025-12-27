import React from "react";
import { FooterSection } from "@/components/layout/sections/footer";

export default function IndustryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <FooterSection />
        </>
    );
}
