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

interface SolutionProps{
	title: string;
	icon: string;
	description: string;
	href: string;
}

export const routeList: RouteProps[] = [
	
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
		href: "/industry/healthcare",
	},
	{
		title: "Hospitality",
		icon: "Hotel",
		description: "Automate Restaurants & Hotels",
		href: "/industry/hospitality",
	},
	{
		title: "Sales & Service",
		icon: "ShoppingCart",
		description: "Automate Sales & Service",
		href: "/industry/sales&service",
	},
	{
		title: "CRM Solutions",
		icon: "Users",
		description: "Automate Customer Relationship",
		href: "/industry/CRM-solutions",
	},
];


export const solutionList: SolutionProps[] = [
	{
		title: "Consultation",
		icon: "Stethoscope",
		description: "Manage expert consultations, appointments, and client interactions",
		href: "/solutions/consultation",
	},
	{
		title: "Student",
		icon: "GraduationCap",
		description: "Centralized student profiles, academics, and engagement tracking",
		href: "/solutions/student",
	},
	{
		title: "Patient",
		icon: "HeartPulse",
		description: "End-to-end patient records, treatments, and care history",
		href: "/solutions/patient",
	},
	{
		title: "Booking",
		icon: "CalendarCheck",
		description: "Smart scheduling and booking management for services and visits",
		href: "/solutions/booking",
	},
	{
		title: "Employee",
		icon: "Users",
		description: "Employee profiles, roles, performance, and HR operations",
		href: "/solutions/employee",
	},

	{
		title: "Customer",
		icon: "UserRound",
		description: "Manage customer profiles, interactions, and relationship history",
		href: "/solutions/customer",
	},
	{
		title: "Event Manager",
		icon: "CalendarDays",
		description: "Plan, organize, and track events and activities seamlessly",
		href: "/solutions/eventmanager",
	},
	{
		title: "Exam Result",
		icon: "FileCheck",
		description: "Publish, manage, and analyze examination results securely",
		href: "/solutions/examresult",
	},
	{
		title: "Lead",
		icon: "TrendingUp",
		description: "Capture, track, and convert leads efficiently",
		href: "/solutions/lead",
	},
	{
		title: "Leave Application",
		icon: "CalendarOff",
		description: "Automated leave requests, approvals, and tracking",
		href: "/solutions/leaveapplication",
	},
	{
		title: "Checklist",
		icon: "ListChecks",
		description: "Task checklists to ensure process consistency and compliance",
		href: "/solutions/checklist",
	},
	{
		title: "Contact",
		icon: "Phone",
		description: "Centralized contact directory with communication history",
		href: "/solutions/contact",
	},
	{
		title: "Registration",
		icon: "ClipboardPen",
		description: "Digital registrations for users, events, or services",
		href: "/solutions/registration",
	},
	{
		title: "Visit Planner",
		icon: "MapPin",
		description: "Plan and track field visits and schedules",
		href: "/solutions/visitplanner",
	},
	{
		title: "Vendor",
		icon: "Truck",
		description: "Manage vendors, contracts, and supply relationships",
		href: "/solutions/vendor",
	},
	{
		title: "Treatment",
		icon: "Syringe",
		description: "Track treatments, procedures, and medical outcomes",
		href: "/solutions/treatment",
	},
	{
		title: "Product",
		icon: "Package",
		description: "Product catalog, pricing, and inventory control",
		href: "/solutions/product",
	},
	{
		title: "Notes",
		icon: "StickyNote",
		description: "Quick notes and internal documentation",
		href: "/solutions/notes",
	},
	{
		title: "Announcement",
		icon: "Megaphone",
		description: "Broadcast announcements and important updates",
		href: "/solutions/announcement",
	},
	{
		title: "Attendance",
		icon: "UserCheck",
		description: "Track attendance for employees, students, or staff",
		href: "/solutions/attendance",
	},
	{
		title: "Communication",
		icon: "MessageSquare",
		description: "Unified communication via email, SMS, and notifications",
		href: "/solutions/communication",
	},
	{
		title: "Meeting Manager",
		icon: "Video",
		description: "Schedule, manage, and record meetings",
		href: "/solutions/meetingmanager",
	},
	{
		title: "Sale & Service",
		icon: "Handshake",
		description: "Manage sales operations and service workflows",
		href: "/solutions/saleservice",
	},
	{
		title: "Service",
		icon: "Wrench",
		description: "Service requests, execution, and tracking",
		href: "/solutions/service",
	},
	{
		title: "Subscription",
		icon: "Repeat",
		description: "Subscription plans, billing cycles, and renewals",
		href: "/solutions/subscription",
	},
	{
		title: "Survey",
		icon: "BarChart3",
		description: "Collect feedback and analyze survey responses",
		href: "/solutions/survey",
	},
	{
		title: "Test",
		icon: "ClipboardCheck",
		description: "Create, manage, and evaluate tests or assessments",
		href: "/solutions/test",
	},
	{
		title: "Timetable",
		icon: "Clock",
		description: "Organize schedules, classes, or work shifts",
		href: "/solutions/timetable",
	},
	{
		title: "Transport",
		icon: "Bus",
		description: "Manage transport routes, vehicles, and logistics",
		href: "/solutions/transport",
	},
	{
		title: "Visit Activity",
		icon: "Activity",
		description: "Track on-site visit activities and outcomes",
		href: "/solutions/visitactivity",
	},
];
