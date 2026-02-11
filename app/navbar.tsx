import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/8bit/navigation-menu";
import { Kbd } from "@/components/ui/8bit/kbd";
import { Separator } from "@/components/ui/8bit/separator";

export default function Navbar() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="w-full px-6 py-4 md:px-10">
        <Separator />
      </div>
      <div className="flex w-full max-w-6xl items-center justify-between gap-4 px-6 md:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="bg-foreground size-4 rounded-sm shadow-[2px_2px_0_0_rgba(0,0,0,0.35)] bg-green-400 animate-pulse" />
          <span className="flex flex-col gap-1 leading-none">
            <Kbd className="h-6 px-2 text-xs sm:text-sm">Sri Satya Sai</Kbd>
            <Kbd className="text-muted-foreground h-5 px-2 text-[10px] tracking-[0.35em]">
              IMMANI
            </Kbd>
          </span>
        </Link>
        <NavigationMenu viewport={false} className="w-auto">
          <NavigationMenuList className="flex flex-wrap gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="retro hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 rounded-md px-2 py-1 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  <Kbd className="h-6 px-2 animate-bounce">Home</Kbd>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/projects"
                  className="retro hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 rounded-md px-2 py-1 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  <Kbd className="h-6 px-2 animate-bounce">Projects</Kbd>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/blog"
                  className="retro hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 rounded-md px-2 py-1 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  <Kbd className="h-6 px-2 animate-bounce">Blog</Kbd>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/connect"
                  className="retro hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring/50 flex items-center gap-2 rounded-md px-2 py-1 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  <Kbd className="h-6 px-2 animate-bounce">Let&apos;s Connect</Kbd>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="w-full px-6 py-4 md:px-10">
        <Separator />
      </div>
    </div>
  );
}
