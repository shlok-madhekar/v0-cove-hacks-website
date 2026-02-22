import { Monitor, Users, Zap, Trophy, Globe, Code } from "lucide-react";

export const PROSPECTUS_DATA = {
  stats: [
    { value: "400+", label: "Hackers", detail: "Top high school talent" },
    { value: "48h", label: "Hacking", detail: "Non-stop creation" },
    { value: "200+", label: "Projects", detail: "Innovative solutions" },
    { value: "$25k+", label: "Prizes", detail: "Hardware & grants" },
  ],
  whySponsor: [
    {
      title: "Recruit Top Talent",
      description:
        "Connect with the most ambitious high school developers, designers, and builders in the Bay Area before they hit college.",
      icon: Users,
    },
    {
      title: "Brand Visibility",
      description:
        "Get your brand in front of 400+ hackers through workshops, branded swag, and opening ceremony shoutouts.",
      icon: Globe,
    },
    {
      title: "Product Adoption",
      description:
        "Get students building on your API or hardware platform. We host dedicated workshops to onboard hackers to your stack.",
      icon: Code,
    },
    {
      title: "Support Innovation",
      description:
        "Enable the next generation of founders. Your sponsorship provides hardware labs, food, and mentorship for the weekend.",
      icon: Zap,
    },
  ],
  demographics: {
    interests: [
      { name: "Web Development", percent: 85 },
      { name: "AI / ML", percent: 70 },
      { name: "Mobile App Dev", percent: 55 },
      { name: "Hardware / IoT", percent: 40 },
      { name: "Game Dev", percent: 30 },
    ],
    experience: [
      { name: "First Hackathon", percent: 30 },
      { name: "Intermediate (2-5)", percent: 50 },
      { name: "Veteran (5+)", percent: 20 },
    ],
  },
  pastSponsors: [],
  tiers: [
    { name: "Bronze", price: "$1k", color: "#CD7F32" },
    { name: "Silver", price: "$2.5k", color: "#C0C0C0" },
    { name: "Gold", price: "$5k", color: "#FFD700" },
    { name: "Platinum", price: "$10k", color: "#6B9BD2" },
  ],
  features: [
    { name: "Logo on website footer", tiers: [true, true, true, true] },
    { name: "Distribution of swag/stickers", tiers: [true, true, true, true] },
    { name: "Mentions in opening ceremony", tiers: [true, true, true, true] },
    { name: "Access to resume drop", tiers: [true, true, true, true] },
    { name: "Small logo on t-shirt", tiers: [false, true, true, true] },
    { name: "Dedicated table at event", tiers: [false, true, true, true] },
    { name: "Social media shoutouts", tiers: [false, true, true, true] },
    {
      name: "API/Product demo workshop (30m)",
      tiers: [false, true, true, true],
    },
    { name: "Large logo on t-shirt", tiers: [false, false, true, true] },
    { name: "Keynote speaking slot", tiers: [false, false, "5 min", "15 min"] },
    { name: "Judge panel seat", tiers: [false, false, true, true] },
    {
      name: "Company branded challenge prize",
      tiers: [false, false, true, true],
    },
    { name: "Main event co-branding", tiers: [false, false, false, true] },
    { name: "XL Logo on t-shirt back", tiers: [false, false, false, true] },
    { name: "Private recruiting lounge", tiers: [false, false, false, true] },
    {
      name: "Custom activation/hardware lab",
      tiers: [false, false, false, true],
    },
  ],
};
