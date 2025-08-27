import Featured from "@/components/Home/Featured";
import Hero from "../components/Home/Hero"
export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <div className="space-y-30 mb-32">
      <Hero />
      <Featured />
    </div>
  );
}
