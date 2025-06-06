import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center space-y-8">
        <h1 className="text-7xl font-medium">
          UI library for <br /> Design Engineers
        </h1>

        <Link href="/component">
          <Button type="button">Browse Component</Button>
        </Link>
      </div>
    </div>
  );
}
