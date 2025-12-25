'use client'

// Placeholder companies - replace with real customer logos when available
const companies = [
  { name: "Nexus AI", initials: "NA" },
  { name: "Cortex Labs", initials: "CL" },
  { name: "Synapse", initials: "SY" },
  { name: "Prism AI", initials: "PA" },
  { name: "Forge ML", initials: "FM" },
  { name: "Atlas Data", initials: "AD" },
  { name: "Neural Hub", initials: "NH" },
  { name: "Apex AI", initials: "AA" },
  { name: "Vector AI", initials: "VA" },
  { name: "Quantum ML", initials: "QM" },
]

function LogoPlaceholder({ name, initials }: { name: string; initials: string }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 shrink-0"
      title={name}
    >
      <div className="w-8 h-8 rounded-md bg-foreground/[0.06] flex items-center justify-center">
        <span className="text-xs font-semibold text-foreground/40">{initials}</span>
      </div>
      <span className="text-sm font-medium text-foreground/40">{name}</span>
    </div>
  )
}

export function LogoBarSection() {
  // Double the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <section className="py-12 md:py-16 border-t overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by AI teams at leading companies
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-marquee">
          {duplicatedCompanies.map((company, index) => (
            <LogoPlaceholder
              key={`${company.name}-${index}`}
              name={company.name}
              initials={company.initials}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
