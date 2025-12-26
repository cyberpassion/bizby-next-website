interface RouteProps {
	href: string;
	label: string;
}

interface ProductProps {
	title: string;
	icon: string;
	description: string;
	href: string;
}

export const routeList: RouteProps[] = [
	{
		href: "#solutions",
		label: "Solutions",
	},
	{
		href: "#pricing",
		label: "Pricing",
	},
	{
		href: "#team",
		label: "Team",
	},
	{
		href: "#contact",
		label: "Contact",
	},
];

export const productList: ProductProps[] = [
	{
		title: "Education",
		icon: "GraduationCap",
		description: "Automate School, College & Coaching Institutes",
		href: "/industry/education",
	},
	{
		title: "Healthcare",
		icon: "Stethoscope",
		description: "Automate Clinics & Hospitals",
		href: "/industry/education",
	},
	{
		title: "Hospitality",
		icon: "Hotel",
		description: "Automate Restaurants & Hotels",
		href: "/industry/education",
	},
	{
		title: "Sales & Service",
		icon: "ShoppingCart",
		description: "Automate Sales & Service",
		href: "/industry/education",
	},
	{
		title: "CRM Solutions",
		icon: "Users",
		description: "Automate Customer Relationship",
		href: "/industry/education",
	},
];
