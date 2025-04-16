"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/directory",
      label: "Directory",
      active: pathname === "/directory" || pathname.startsWith("/directory/"),
    },
    {
      href: "/events",
      label: "Events",
      active: pathname === "/events" || pathname.startsWith("/events/"),
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center h-16 px-4 mx-auto max-w-7xl">
        <Link href="/" className="mr-6 font-bold">
          Blockchain Directory
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                route.active ? "text-foreground" : "text-foreground/60",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end flex-1 space-x-4">
          <div className="relative hidden w-full max-w-sm lg:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search projects..." className="pl-8" />
          </div>

          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-foreground/80",
                      route.active ? "text-foreground" : "text-foreground/60",
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
