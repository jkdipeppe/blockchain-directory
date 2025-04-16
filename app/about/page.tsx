import { PageHeader } from "@/components/page-header"

export default function AboutPage() {
  return (
    <div className="container px-4 py-10 mx-auto max-w-4xl">
      <PageHeader title="About" description="Learn more about the Blockchain Ecosystem Directory" />

      <div className="mt-8 prose dark:prose-invert max-w-none">
        <p>
          The Blockchain Ecosystem Directory is a comprehensive resource for discovering and exploring projects across
          multiple blockchain ecosystems. Our mission is to provide a user-friendly platform that helps users navigate
          the complex and rapidly evolving blockchain landscape.
        </p>

        <h2>Our Mission</h2>
        <p>
          We aim to create the most comprehensive, up-to-date, and user-friendly directory of blockchain projects. By
          categorizing projects across different blockchains and use cases, we help users discover innovative solutions
          and stay informed about the latest developments in the blockchain space.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Browse projects across multiple blockchains including Solana, Ethereum, Base, and Avalanche</li>
          <li>Filter by categories such as DeFi, Payments, Oracles, Consumer, Gaming, and more</li>
          <li>View detailed information about each project including descriptions, social links, and metrics</li>
          <li>Save your favorite projects for quick access</li>
          <li>Search for specific projects or keywords</li>
        </ul>

        <h2>Contact</h2>
        <p>
          Want to get a project listed? Fill out this <a href="https://forms.gle/h6z8zZo9TbUQ895e8" target="_blank">directory form!</a>.
        </p>
      </div>
    </div>
  )
}
