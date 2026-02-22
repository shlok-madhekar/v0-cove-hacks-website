export function JsonLd() {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Cove Hacks 2026",
    description:
      "The world's largest high school hackathon. 400 hackers, 48 hours, hardware labs, workshops, mentors, and $30K+ in prizes. Bay Area, CA.",
    startDate: "2026-06-19T09:00:00-07:00",
    endDate: "2026-06-21T17:00:00-07:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Bay Area, CA",
      address: {
        "@type": "PostalAddress",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    image: "https://covehacks.dev/og-image.png",
    organizer: {
      "@type": "Organization",
      name: "Cove Hacks",
      url: "https://covehacks.dev",
      email: "team@covehacks.dev",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://lu.ma/p7fs725f",
      validFrom: "2025-01-01T00:00:00-08:00",
    },
    performer: {
      "@type": "Organization",
      name: "Cove Hacks",
    },
    maximumAttendeeCapacity: 400,
    isAccessibleForFree: true,
    typicalAgeRange: "13-19",
    keywords: [
      "hackathon",
      "high school hackathon",
      "Bay Area hackathon",
      "coding competition",
      "hardware hackathon",
      "teen hackathon",
      "Cove Hacks",
    ],
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cove Hacks",
    url: "https://covehacks.dev",
    email: "team@covehacks.dev",
    sameAs: [
      "https://discord.gg/FYyGNr3Ku7",
      "https://www.instagram.com/covehacks/",
    ],
    logo: "https://covehacks.dev/images/cove-logo.png",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cove Hacks",
    url: "https://covehacks.dev",
    description:
      "The world's largest high school hackathon. 400 hackers, 48 hours, Bay Area. June 19–21, 2026.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://covehacks.dev",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
    </>
  );
}
