import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-custom-purple text-white p-4 h-16 header">
      <div className="container flex justify-between items-center h-full">
        {/* Left side: Dashboard button */}
        <Link href="/"><button className="text-3xl font-extrabold text-white font-bold">
        Envision Monitoring App
        </button></Link>

        {/* Right side: Optional space for additional items like user profile or icons */}
        <div></div>
      </div>
    </header>
  );
}
