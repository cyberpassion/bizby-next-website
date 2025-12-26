import Image from "next/image";

export default function AutomotivePage() {
  return (
    <main className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">
            Transform vehicle experiences with modern Automotive CRM
          </h1>
          <p className="text-lg mb-8">
            Accelerate innovation with AI and automation. Drive personalised experiences,
            explore new revenue models and power automotive growth.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary">Try for free</button>
            <button className="btn btn-outline-light">Contact us</button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="container mx-auto px-6 text-center grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">14</h2>
          <p>days average implementation time*</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">33%</h2>
          <p>faster automation of business processes*</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">21%</h2>
          <p>decrease in IT costs*</p>
        </div>
      </section>

      {/* Customer Quote / Testimonial */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="italic text-xl max-w-3xl mx-auto">
            “Salesforce helps us to understand our customers’ needs even better.
            We know their purchasing history and can anticipate what the customer
            is looking for — that’s the power of the technology we’re working on
            together.”
          </blockquote>
          <p className="mt-4 font-bold">Ola Källenius, CEO, Mercedes-Benz</p>
        </div>
      </section>

      {/* Use-Cases / Sections */}
      <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <CaseStudy
          title="OEMs"
          description="Delight drivers at every touchpoint with a 360° view of the driver and vehicle."
        />
        <CaseStudy
          title="Retailers and Dealers"
          description="Build trusted relationships with a unified source of Automotive truth."
        />
        <CaseStudy
          title="Captive Finance"
          description="Grow loyalty with financial relationships beyond the first purchase."
        />
        <CaseStudy
          title="Software-Defined Vehicles"
          description="Unlock new revenue streams and power in-vehicle subscriptions."
        />
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to modernise your Automotive business?
        </h2>
        <button className="btn btn-primary">Start your free trial</button>
      </section>

      {/* FAQ or Info Section */}
      <section className="container mx-auto px-6 space-y-6">
        <h3 className="text-2xl font-bold text-center">What is Automotive CRM?</h3>
        <p className="max-w-3xl mx-auto text-center">
          Automotive CRM is a system for managing all interactions with customers,
          drivers, vehicles, and financial partners throughout the entire vehicle lifecycle.
          It unifies sales, service, marketing and analytics on a single platform
        </p>
      </section>
    </main>
  );
}

function CaseStudy({ title, description }: { title: string; description: string }) {
  return (
    <div className="border p-6 rounded-lg hover:shadow-lg transition">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );
}
