interface RouteProps {
  href: string;
  label: string;
}

interface ProductProps {
  title: string;
  icon: string;
  description: string;
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
  },
  {
    title: "Healthcare",
    icon: "Stethoscope",
    description: "Automate Clinics & Hospitals",
  },
  {
    title: "Hospitality",
    icon: "Hotel",
    description: "Automate Restaurants & Hotels",
  },
  {
    title: "Sales & Service",
    icon: "ShoppingCart",
    description: "Automate Sales & Service",
  },
  {
    title: "CRM Solutions",
    icon: "Users",
    description: "Automate Customer Relationship",
  },
];

