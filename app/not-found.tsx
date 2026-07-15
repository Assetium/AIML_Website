import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1919] text-[#444444]">
      <h1 className="text-8xl font-bold text-[#c14511]">404</h1>
      <h2 className="text-2xl md:text-3xl font-medium mt-4">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-center max-w-md text-sm md:text-base">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <Link href="/" passHref>
        <Button className="mt-6 px-6 py-3 bg-[#c14511] text-white hover:bg-[#a1330f] transition-all flex items-center gap-2">
          <FiHome className="text-lg" />
          Go Back Home
        </Button>
      </Link>
    </div>
  );
}
