
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="max-w-3lx mx-auto md:py-10 h-screen">
      <div className="h-full border rounded-md">
        <div className="h-20">
            <div className="p-5 border-b flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1">
                  <h1 className="text-xl font-bold">Daily Chat</h1>
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"> </div>
                  <h1 className="text-sm text-gray-400"> 2 online</h1>
                </div>
              </div>
              <Button> Login</Button>
            </div>
        </div>

      </div>
    </div>
  );
}
