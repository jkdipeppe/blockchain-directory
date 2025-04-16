import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-medium">Blockchain Directory</h3>
            <p className="text-sm text-muted-foreground">
              Discover and explore projects across multiple blockchain ecosystems.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/directory" className="text-muted-foreground hover:text-foreground">
                  Directory
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Blockchains</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/directory?blockchain=solana" className="text-muted-foreground hover:text-foreground">
                  Solana
                </Link>
              </li>
              <li>
                <Link href="/directory?blockchain=ethereum" className="text-muted-foreground hover:text-foreground">
                  Ethereum
                </Link>
              </li>
              <li>
                <Link href="/directory?blockchain=base" className="text-muted-foreground hover:text-foreground">
                  Base
                </Link>
              </li>
              <li>
                <Link href="/directory?blockchain=avalanche" className="text-muted-foreground hover:text-foreground">
                  Avalanche
                </Link>
              </li>
              <li>
                <Link href="/directory?blockchain=avalanche" className="text-muted-foreground hover:text-foreground">
                  Berachain
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://twitter.com/bchdirectory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/bchdirectory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/bchdirectory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/h6z8zZo9TbUQ895e8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Submit Project
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t md:flex-row">
          <p className="mb-4 text-sm text-muted-foreground md:mb-0">
            &copy; {new Date().getFullYear()} Blockchain Directory. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
