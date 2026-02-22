import { Navbar } from "@/components/navbar";
import { TeamPage } from "@/components/team-page";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Team",
  description:
    "Meet the crew of high schoolers organizing the largest high school hackathon ever.",
};

export default function Team() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TeamPage />
      <Footer />
    </main>
  );
}
