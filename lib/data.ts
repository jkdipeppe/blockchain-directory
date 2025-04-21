import type { Blockchain, Category, FilterOptions, Project, SortOption, Event } from "./types"
// Blockchain data
export const blockchains: Blockchain[] = [
  { id: "solana", name: "Solana" },
  { id: "ethereum", name: "Ethereum" },
  { id: "base", name: "Base" },
  { id: "avalanche", name: "Avalanche" },
  { id: "arbitrum", name: "Arbitrum" },
  { id: "optimism", name: "Optimism" },
  { id: "polygon", name: "Polygon" },
  // { id: "bnb", name: "BNB Chain" },
  { id: "hyperliquid", name: "Hyperliquid" },
  { id: "berachain", name: "Berachain" },
]

// Categories
export const categories: Category[] = [
  { id: "payments", name: "Payments" },
  { id: "consumer", name: "Consumer" },
  { id: "defi", name: "DeFi" },
  { id: "gaming", name: "Gaming" },
  { id: "infrastructure", name: "Infrastructure" },
  { id: "oracles", name: "Oracles" },
  { id: "dao", name: "DAOs" },
  { id: "nft", name: "NFTs" },
  { id: "other", name: "Other" },
]

// Sort options
export const sortOptions: SortOption[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "tvl-high", label: "TVL: High to Low" },
  { value: "tvl-low", label: "TVL: Low to High" },
  { value: "alphabetical", label: "A-Z" },
]

// Sample project data
export const projects: Project[] = [
   // Solana Projects
   {
    id: "jupiter",
    title: "Jupiter",
    subtitle: "DEX Aggregator on Solana",
    description:
      "Jupiter is a DEX aggregator for Solana, providing the best swap routes across all Solana DEXs. It offers the best price execution for traders while providing a simple, unified API for developers to tap into Solana's liquidity.",
    logo: "/project-logos/jup.jpg",
    website: "https://jup.ag",
    blockchains: ["Solana"],
    categories: ["DeFi", "Infrastructure"],
    status: "Live",
    featured: false,
    launchDate: "Oct 2021",
    hasToken: true,
    tokenSymbol: "JUP",
    twitter: "https://twitter.com/JupiterExchange",
    discord: "https://discord.gg/jup",
    github: "https://github.com/jup-ag",
    features: [
      "Best price execution across all Solana DEXs",
      "Limit orders",
      "Unified liquidity API",
      "Terminal for advanced traders",
      "Low transaction fees",
    ],
  },
  {
    id: "drift-protocol",
    title: "Drift Protocol",
    subtitle: "Decentralized Perpetual Exchange",
    description:
      "Drift is a decentralized perpetual futures exchange built on Solana, offering traders low fees, deep liquidity, and up to 20x leverage. It uses a unique dynamic AMM model to provide sustainable liquidity for perpetual futures markets.",
    logo: "/project-logos/drift.png",
    website: "https://drift.trade",
    blockchains: ["Solana"],
    categories: ["DeFi", "Derivatives"],
    status: "Live",
    featured: false,
    tvl: "85M",
    funding: "$15M Series A",
    launchDate: "Feb 2022",
    hasToken: true,
    tokenSymbol: "DRIFT",
    twitter: "https://twitter.com/DriftProtocol",
    discord: "https://discord.gg/driftprotocol",
    github: "https://github.com/drift-labs",
    features: [
      "Perpetual futures trading",
      "Cross-margined collateral",
      "Dynamic AMM for liquidity",
      "Up to 50x leverage",
      "Low trading fees",
    ],
  },
  {
    id: "marinade-finance",
    title: "Marinade Finance",
    subtitle: "Liquid Staking Protocol for Solana",
    description:
      "Marinade Finance is a non-custodial liquid staking protocol built on Solana. It allows users to stake their SOL tokens while receiving liquid mSOL tokens that can be used across the Solana DeFi ecosystem, enabling users to earn staking rewards while maintaining liquidity.",
    logo: "/project-logos/marinade.jpg",
    website: "https://marinade.finance",
    blockchains: ["Solana"],
    categories: ["DeFi", "Staking"],
    status: "Live",
    featured: false,
    tvl: "250M",
    launchDate: "Aug 2021",
    hasToken: true,
    tokenSymbol: "MNDE",
    twitter: "https://twitter.com/MarinadeFinance",
    discord: "https://discord.gg/marinade",
    github: "https://github.com/marinade-finance",
    features: [
      "Liquid staking for SOL",
      "Validator diversification",
      "Governance through MNDE token",
      "Integration with Solana DeFi",
      "Automatic compounding of rewards",
    ],
  },
  {
    id: "kamino",
    title: "Kamino",
    subtitle: "Lending/Borrowing",
    description:
      "Kamino is a non-custodial lending/borrowing protocol built on Solana. It allows users to stake their tokens and earn yield. They can also borrow other tokens against their deposits which will be used as collateral.",
    logo: "/project-logos/kmno.png",
    website: "https://app.kamino.finance",
    blockchains: ["Solana"],
    categories: ["DeFi", "Lending"],
    status: "Live",
    featured: true,
    tvl: "",
    launchDate: "",
    hasToken: true,
    tokenSymbol: "KMNO",
    twitter: "https://x.com/KaminoFinance",
    discord: "https://discord.com/invite/kaminofinance",
    github: "https://docs.kamino.finance/",
    features: [
      "Lending and borrowing",
      "DEX Aggregator",
    ],
  },
  {
    id: "save",
    title: "Save Finance",
    subtitle: "Lending and Borrowing Protocol",
    description:
      "Save Finance is an algorithmic, decentralized protocol for lending and borrowing on Solana. It allows users to earn interest by supplying assets to the protocol and to borrow assets by using their deposits as collateral.",
    logo: "/project-logos/save.png",
    website: "https://save.finance",
    blockchains: ["Solana"],
    categories: ["DeFi", "Lending"],
    status: "Live",
    tvl: "180M",
    funding: "$6.5M Seed Round",
    launchDate: "Jun 2021",
    hasToken: true,
    tokenSymbol: "SAVE",
    twitter: "https://x.com/save_finance",
    discord: "https://discord.gg/solend",
    github: "https://github.com/solendprotocol",
    features: [
      "Lending and borrowing",
      "Multiple lending pools",
      "Isolated risk markets",
      "Flash loans",
      "Governance through SLND token",
    ],
  },
  {
    id: "magic-eden",
    title: "Magic Eden",
    subtitle: "NFT Marketplace on Solana",
    description:
      "Magic Eden is the leading NFT marketplace on Solana, providing a platform for creators and collectors to discover, trade, and engage with NFTs. It offers low fees, fast transactions, and a suite of creator tools for launching and managing NFT collections.",
    logo: "/project-logos/magiceden.jpg",
    website: "https://magiceden.io",
    blockchains: ["Solana", "Ethereum"],
    categories: ["NFT", "Consumer"],
    status: "Live",
    featured: false,
    funding: "$130M Series B",
    launchDate: "Sep 2021",
    hasToken: false,
    twitter: "https://twitter.com/MagicEden",
    discord: "https://discord.gg/magiceden",
    features: [
      "NFT trading marketplace",
      "Launchpad for new collections",
      "Creator royalties",
      "Multi-chain support",
      "Low transaction fees",
    ],
    founders: [
      {
        name: "Jack Lu",
        role: "Co-founder & CEO",
        twitter: "https://twitter.com/jackblu_",
      },
      {
        name: "Zhuoxun Yin",
        role: "Co-founder & COO",
        twitter: "https://twitter.com/zhuoxunyin",
      },
    ],
  },
  {
    id: "hedgehog",
    title: "Hedgehog Markets",
    subtitle: "Prediction Markets",
    description:
      "Hedgehog Markets is a prediction market protocol built on Solana where users can bet on the outcome of events. Their Versus markets are a new P2P style of betting where users can set the odds and size for anything and funds are escrowed on chain.",
    logo: "/project-logos/hedgehog.png",
    website: "https://hedgehog.markets",
    blockchains: ["Solana"],
    categories: ["DeFi", "Consumer"],
    status: "Live",
    featured: true,
    tvl: "",
    funding: "$3.5M Seed Round",
    launchDate: "Dec 2023",
    hasToken: false,
    tokenSymbol: "",
    twitter: "https://x.com/hedgehogmarket",
    discord: "https://discord.gg/Jwj2C6FT3K",
    github: "",
    features: [
      "Prediction markets",
      "Sports Betting",
      "On-chain Escrow",
      "Peer-to-peer betting",
    ],
  },
  {
    id: "tensor",
    title: "Tensor",
    subtitle: "NFT Marketplace on Solana",
    description:
      "Tensor is a leading NFT marketplace on Solana, offering fast trading, deep liquidity, and advanced features for pro traders, including an AMM for NFTs.",
    logo: "/project-logos/tensor.jpg",
    website: "https://tensor.trade",
    blockchains: ["Solana"],
    categories: ["NFT", "Consumer", "DeFi"],
    status: "Live",
    featured: false,
    funding: "$3M Seed Round",
    launchDate: "Jun 2022",
    hasToken: true,
    tokenSymbol: "TNSR",
    twitter: "https://x.com/tensor_hq",
    discord: "https://discord.gg/tensor",
    github: "",
    features: [
      "NFT Marketplace",
      "Advanced Trading Features",
      "AMM for NFTs (TensorSwap)",
      "Price Locks",
      "Deep Liquidity",
      "Fast Execution",
    ],
  },
  {
    id: "vector",
    title: "Vector",
    subtitle: "Meme Coin Trading on Solana",
    description: "Vector is a peer-to-peer token trading protocol built on Solana, allowing users to trade memecoins and broadcast trades with each other.",
    logo: "/project-logos/vector.jpg", // Placeholder logo path
    website: "https://vector.fun/", // Found from Twitter profile
    blockchains: ["Solana"],
    categories: ["DeFi", "Meme Coins", "Trading"],
    status: "Live", // Assuming live based on activity
    featured: true,
    tvl: "", // TVL not readily available
    funding: "", // Funding info not readily available
    launchDate: "2024", // Estimated launch year based on recent activity
    hasToken: true, // No evidence of a token found
    tokenSymbol: "TNSR",
    twitter: "https://x.com/VECTORDOTFUN",
    discord: "https://discord.gg/vectordotfun", // Found from Twitter profile
    github: "", // Could not find a public GitHub link
    features: [
      "Peer-to-Peer Trading",
      "Built on Solana",
      "Meme Coin",
    ],
  },
  {
    id: "timedotfun",
    title: "time.fun",
    subtitle: "Social Platform for Creator Time",
    description:
      "time.fun is a social protocol on Solana where users can buy and sell 'time' from creators, essentially investing in their attention and future potential. It utilizes bonding curves and SOL locking mechanisms.",
    logo: "/project-logos/timedotfun.jpg", // Placeholder logo path
    website: "https://time.fun/",
    blockchains: ["Solana"],
    categories: ["Social", "Consumer", "DeFi", "Creator Economy"],
    status: "Live",
    featured: true,
    tvl: "", // TVL concept might differ, not readily available
    funding: "", // Funding info not readily available
    launchDate: "2024", // Estimated launch year
    hasToken: false, // Focuses on creator-specific 'time' keys
    tokenSymbol: "",
    twitter: "https://x.com/timedotfun",
    discord: "https://discord.gg/timedotfun", // Found via website
    github: "", // No public repo found
    features: [
      "Buying/Selling Creator 'Time'",
      "Bonding Curves",
      "Social Interaction Feed",
      "Focus on Attention Economy",
    ],
  },
  {
    id: "solflare",
    title: "Solflare",
    subtitle: "Solana Wallet for Desktop, Mobile & Web",
    description:
      "Solflare is a non-custodial wallet built specifically for Solana. It offers a comprehensive feature set including staking, swapping, NFT management, and dApp interaction across multiple platforms.",
    logo: "/project-logos/solflare.jpg", // Placeholder logo path
    website: "https://solflare.com/",
    blockchains: ["Solana"],
    categories: ["Wallet", "Infrastructure", "Consumer"],
    status: "Live",
    featured: false,
    tvl: "N/A",
    funding: "", // Funding details not prominently displayed
    launchDate: "Oct 2020", // Approximate initial launch
    hasToken: false,
    tokenSymbol: "",
    twitter: "https://x.com/solflare_wallet",
    discord: "https://discord.gg/solflare", // Often linked from wallet/website
    github: "", // Typically wallets don't have public repos
    features: [
      "Solana Native Wallet",
      "In-wallet Staking (SOL & SPL)",
      "Token Swapping",
      "NFT Portfolio & Management",
      "Ledger Hardware Wallet Support",
      "dApp Browser",
      "Available as Browser Extension, Mobile App, Web App",
    ],
  },
  {
    id: "squads",
    title: "Squads Protocol",
    subtitle: "Multi-Sig Infrastructure for Solana",
    description:
      "Squads Protocol provides secure multi-sig infrastructure for teams building on Solana. It enables businesses and DAOs to manage treasuries, programs, and validators with customizable signing thresholds.",
    logo: "/project-logos/squads.jpg", // Placeholder logo path
    website: "https://squads.so/", // Found via Twitter
    blockchains: ["Solana"],
    categories: ["Infrastructure", "DAO", "Wallet", "Security"],
    status: "Live",
    featured: false,
    tvl: "~600M", // Value secured, check their site for updates
    funding: "$5M Seed Round", // June 2022
    launchDate: "Feb 2022", // Approximate mainnet launch
    hasToken: false,
    tokenSymbol: "",
    twitter: "https://x.com/SquadsProtocol",
    discord: "https://discord.gg/squadsprotocol", // Often linked from site
    github: "https://github.com/Squads-Protocol", // Found via website
    features: [
      "On-chain Multi-Signature Wallets",
      "Treasury Management",
      "Program Deployment Control",
      "Validator Management",
      "Customizable Signing Thresholds",
      "SDK for Developers",
    ],
    founders: [
      {
        name: "Stepan Simkin",
        role: "Co-founder & CEO",
        twitter: "https://x.com/simkinice",
      }
    ]
  },
  {
    id: "step-finance",
    title: "Step Finance",
    subtitle: "Solana Portfolio Dashboard & Aggregator",
    description:
      "Step Finance is a portfolio visualization dashboard for the Solana ecosystem. It allows users to track their assets, LPs, yield farms, stakes, and NFTs across various Solana protocols in one place.",
    logo: "/project-logos/stepfinance.jpg", // Placeholder logo path
    website: "https://step.finance/",
    blockchains: ["Solana"],
    categories: ["DeFi", "Consumer", "Infrastructure", "Portfolio"],
    status: "Live",
    featured: false,
    tvl: "N/A",
    funding: "$2M Seed Round", // April 2021
    launchDate: "Apr 2021",
    hasToken: true,
    tokenSymbol: "STEP",
    twitter: "https://x.com/StepFinance_",
    discord: "https://discord.gg/stepfinance", // Found via website
    github: "https://github.com/step-finance", // Found via website
    features: [
      "Portfolio Tracking & Visualization",
      "Transaction History",
      "LP Management",
      "Yield Farm Tracking",
      "Staking Overview",
      "In-app Swaps (Aggregator)",
      "NFT Gallery",
    ],
  },
  {
    id: "wasabi-protocol",
    title: "Wasabi Protocol",
    subtitle: "NFT Options & Derivatives Protocol",
    description:
      "Wasabi Protocol allows users to trade tokens and NFT futures across multiple blockchains. It provides tools for hedging and speculating on NFT and token volatility.",
    logo: "/project-logos/wasabi.png", // Placeholder logo path
    website: "https://wasabi.protocol.com/", // Note: Specific domain might vary, check twitter bio link
    blockchains: ["Solana", "Ethereum", "Base", "Berachain"],
    categories: ["DeFi", "NFT", "Derivatives", "Options"],
    status: "Live",
    featured: false,
    tvl: "", // Check DefiLlama or similar for TVL
    funding: "", // Funding info not readily available
    launchDate: "Early 2023", // Approximate launch time
    hasToken: true, // Check if token launched
    tokenSymbol: "",
    twitter: "https://x.com/wasabi_protocol",
    discord: "https://discord.gg/wasabiprotocol", // Common discord pattern, verify
    github: "", // Check if public repo exists
    features: [
      "Perpetual Futures",
      "Token Futures",
      "Hedging Tools",
      "Leveraged NFT Trading",
    ],
  },
  {
    id: "helium",
    title: "Helium Network",
    subtitle: "Decentralized Wireless Network (DePIN)",
    description:
      "The Helium Network is a decentralized wireless infrastructure powered by a global community. It provides open-source, affordable connectivity for IoT devices and, more recently, 5G mobile users, built on the Solana blockchain.",
    logo: "/project-logos/helium.jpg", // Placeholder logo path
    website: "https://helium.com/",
    blockchains: ["Solana"], // Core infrastructure migrated to Solana
    categories: ["Infrastructure", "DePIN", "Consumer"],
    status: "Live",
    featured: false,
    tvl: "N/A", // TVL not typical metric
    funding: "$200M Series D", // As of Feb 2022
    launchDate: "Jul 2019", // Initial network launch
    hasToken: true,
    tokenSymbol: "HNT", // Also IOT, MOBILE tokens
    twitter: "https://x.com/helium",
    discord: "https://discord.gg/helium",
    github: "https://github.com/helium",
    features: [
      "Decentralized LoRaWAN network (IoT)",
      "Decentralized 5G network (Mobile)",
      "Powered by community-run hotspots",
      "Token incentives for network coverage (HNT, IOT, MOBILE)",
      "Built on Solana for scalability",
    ],
  },
  {
    id: "flashtrade",
    title: "FlashTrade",
    subtitle: "Decentralized Perpetual Exchange on Solana",
    description:
      "FlashTrade aims to be a fast and efficient decentralized perpetual futures exchange built on the Solana network, offering leveraged trading on various assets.",
    logo: "/project-logos/flash.jpg", // Placeholder logo path
    website: "https://beast.flash.trade/", // Website link not readily available on Twitter profile
    blockchains: ["Solana"],
    categories: ["DeFi", "Derivatives", "Exchange"],
    status: "Live", // Assuming live or close to launch based on activity
    featured: false,
    tvl: "", // TVL likely not applicable or available yet
    funding: "", // Funding info not readily available
    launchDate: "2024", // Estimated launch/activity start
    hasToken: true, // Token status unknown
    tokenSymbol: "FAF",
    twitter: "https://x.com/FlashTrade_",
    discord: "", // Discord link not readily available on Twitter profile
    github: "", // GitHub link not readily available
    features: [
      "Perpetual Futures Trading",
      "Leveraged Trading",
      "Built on Solana",
      "Fast Execution",
      "Low Fees",
    ],
  },
  
  // Ethereum Projects
  {
    id: "uniswap",
    title: "Uniswap",
    subtitle: "Decentralized Exchange Protocol",
    description:
      "Uniswap is a decentralized exchange protocol built on Ethereum that allows users to swap ERC-20 tokens without relying on centralized intermediaries. It uses an automated market maker (AMM) model where liquidity providers deposit assets into pools and traders swap against these pools.",
    longDescription:
      "Uniswap pioneered the automated market maker (AMM) model in DeFi, allowing anyone to swap tokens, provide liquidity, and participate in decentralized trading. The protocol eliminates the need for trusted intermediaries, prioritizing decentralization, censorship resistance, and security.\n\nUniswap v3 introduced concentrated liquidity, allowing liquidity providers to allocate their capital within specific price ranges, significantly improving capital efficiency compared to earlier versions.",
    logo: "/project-logos/uniswap.png",
    website: "https://uniswap.org",
    blockchains: ["Ethereum", "Base", "Avalanche"],
    categories: ["DeFi", "DEX"],
    status: "Live",
    featured: false,
    tvl: "3.2B",
    funding: "$165M Series B",
    launchDate: "Nov 2018",
    hasToken: true,
    tokenSymbol: "UNI",
    twitter: "https://twitter.com/Uniswap",
    discord: "https://discord.gg/uniswap",
    telegram: "https://t.me/uniswap",
    github: "https://github.com/Uniswap",
    features: [
      "Token swaps with minimal slippage",
      "Concentrated liquidity positions",
      "Multi-chain deployment",
      "Governance through UNI token",
      "Fee tiers for different asset pairs",
    ],
    founders: [
      {
        name: "Hayden Adams",
        role: "Founder & CEO",
        twitter: "https://twitter.com/haydenzadams",
        linkedin: "https://linkedin.com/in/haydenadams",
      },
    ],
  },
  {
    id: "aave",
    title: "Aave",
    subtitle: "Decentralized Lending Protocol",
    description:
      "Aave is an open-source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets. It enables users to deposit cryptocurrencies into lending pools to earn interest while allowing others to borrow from these pools by posting collateral.",
    logo: "/project-logos/aave.png",
    website: "https://aave.com",
    blockchains: ["Ethereum", "Avalanche"],
    categories: ["DeFi", "Lending"],
    status: "Live",
    featured: false,
    tvl: "5.1B",
    funding: "$25M Series A",
    launchDate: "Jan 2020",
    hasToken: true,
    tokenSymbol: "AAVE",
    twitter: "https://twitter.com/aave",
    discord: "https://discord.gg/aave",
    github: "https://github.com/aave",
    features: [
      "Flash loans",
      "Variable and stable interest rates",
      "Collateralized borrowing",
      "Governance through AAVE token",
      "Risk management framework",
    ],
    founders: [
      {
        name: "Stani Kulechov",
        role: "Founder & CEO",
        twitter: "https://twitter.com/StaniKulechov",
        linkedin: "https://linkedin.com/in/stani-kulechov",
      },
    ],
  },
  {
    id: "chainlink",
    title: "Chainlink",
    subtitle: "Decentralized Oracle Network",
    description:
      "Chainlink is a decentralized oracle network that enables smart contracts to securely interact with real-world data and services outside of blockchain networks. It provides reliable tamper-proof inputs and outputs for complex smart contracts on any blockchain.",
    logo: "/project-logos/chainlink.jpg",
    website: "https://chain.link",
    blockchains: ["Ethereum", "Solana", "Avalanche"],
    categories: ["Oracles", "Infrastructure"],
    status: "Live",
    featured: false,
    funding: "$32M ICO",
    launchDate: "May 2019",
    hasToken: true,
    tokenSymbol: "LINK",
    twitter: "https://twitter.com/chainlink",
    discord: "https://discord.gg/chainlink",
    github: "https://github.com/smartcontractkit/chainlink",
    features: [
      "Price feeds for DeFi applications",
      "Verifiable random functions (VRF)",
      "Cross-chain interoperability",
      "Proof of Reserve for stablecoins",
      "Automation for smart contract maintenance",
    ],
    founders: [
      {
        name: "Sergey Nazarov",
        role: "Co-founder & CEO",
        twitter: "https://twitter.com/SergeyNazarov",
      },
    ],
  },
  {
    id: "ens",
    title: "Ethereum Name Service",
    subtitle: "Decentralized Domain Name System",
    description:
      "Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain. It maps human-readable names to machine-readable identifiers such as Ethereum addresses, content hashes, and metadata.",
    logo: "/project-logos/ens.jpg",
    website: "https://ens.domains",
    blockchains: ["Ethereum"],
    categories: ["Infrastructure", "Consumer"],
    status: "Live",
    tvl: "N/A",
    launchDate: "May 2017",
    hasToken: true,
    tokenSymbol: "ENS",
    twitter: "https://twitter.com/ensdomains",
    discord: "https://discord.gg/ens",
    github: "https://github.com/ensdomains",
    features: [
      "Human-readable Ethereum addresses",
      "Decentralized website hosting",
      "Profile avatars and social links",
      "Reverse resolution",
      "Subdomain support",
    ],
    founders: [
      {
        name: "Nick Johnson",
        role: "Founder & Lead Developer",
        twitter: "https://twitter.com/nicksdjohnson",
      },
    ],
  },
  {
    id: "phantom",
    title: "Phantom",
    subtitle: "Multi-chain Crypto Wallet",
    description:
      "Phantom is a popular self-custodial crypto wallet designed for DeFi and NFTs. It provides a user-friendly interface to manage assets, interact with dApps, and swap tokens across Solana, Ethereum, Polygon, and Bitcoin.",
    logo: "/project-logos/phantom.jpg", // Placeholder logo path
    website: "https://phantom.app",
    blockchains: ["Solana", "Ethereum", "Polygon", "Bitcoin"],
    categories: ["Infrastructure", "Consumer", "Wallet"],
    status: "Live",
    featured: false,
    tvl: "N/A",
    funding: "$109M Series B", // As of Feb 2022
    launchDate: "May 2021",
    hasToken: false,
    tokenSymbol: "",
    twitter: "https://twitter.com/phantom",
    discord: "https://discord.gg/phantom",
    github: "", // No public GitHub repo found
    features: [
      "Multi-chain support (Solana, Ethereum, Polygon, Bitcoin)",
      "NFT management & display",
      "In-wallet token swaps",
      "dApp browser",
      "Staking access",
      "Ledger hardware wallet support",
    ],
    founders: [
      {
        name: "Brandon Millman",
        role: "Co-founder & CEO",
        twitter: "https://twitter.com/bmillman",
      },
      {
        name: "Chris Kalani",
        role: "Co-founder & CPO",
        twitter: "https://twitter.com/ChrisKalani",
      },
      {
        name: "Francesco Agosti",
        role: "Co-founder & CTO",
        twitter: "https://twitter.com/fragosti",
      }
    ]
  },
  {
    id: "backpack",
    title: "Backpack",
    subtitle: "Next-Generation Crypto Wallet & Exchange",
    description:
      "Backpack is a self-custodial wallet for Solana and Ethereum, focusing on xNFTs (executable NFTs) and integrating with the Backpack Exchange. It aims to provide a unified experience for assets, NFTs, and DeFi.",
    logo: "/project-logos/backpack.jpg", // Placeholder logo path
    website: "https://backpack.app/", // Found via Twitter
    blockchains: ["Solana", "Ethereum"], // Primarily Solana, Ethereum support
    categories: ["Infrastructure", "Consumer", "Wallet", "NFT", "Exchange"],
    status: "Live",
    featured: true,
    tvl: "N/A",
    funding: "$17M Strategic Round", // March 2024
    launchDate: "Nov 2022", // Wallet launch approx
    hasToken: false,
    tokenSymbol: "",
    twitter: "https://x.com/Backpack",
    discord: "https://discord.gg/backpack", // Found via Twitter/Website
    github: "", // No public repo found
    features: [
      "xNFT support (executable NFTs)",
      "Integrated Exchange (Backpack Exchange)",
      "Multi-chain asset management (Solana, Ethereum)",
      "NFT Collection management",
      "dApp Browser",
      "Focus on security and user experience",
    ],
    founders: [
      {
        name: "Armani Ferrante",
        role: "Co-founder & CEO",
        twitter: "https://x.com/armaniferrante",
      }
    ]
  },
  // {
  //   id: "opensea",
  //   title: "OpenSea",
  //   subtitle: "NFT Marketplace",
  //   description:
  //     "OpenSea is the world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). It allows users to buy, sell, and discover exclusive digital items including art, game items, domain names, and more.",
  //   logo: "/project-logos/opensea.jpg",
  //   website: "https://opensea.io",
  //   blockchains: ["Ethereum"],
  //   categories: ["NFT", "Consumer"],
  //   status: "Live",
  //   funding: "$300M Series C",
  //   launchDate: "Dec 2017",
  //   hasToken: false,
  //   twitter: "https://twitter.com/opensea",
  //   discord: "https://discord.gg/opensea",
  //   features: [
  //     "NFT trading marketplace",
  //     "Creator royalties",
  //     "Collection verification",
  //     "Multi-chain support",
  //     "NFT creation tools",
  //   ],
  //   founders: [
  //     {
  //       name: "Devin Finzer",
  //       role: "Co-founder & CEO",
  //       twitter: "https://twitter.com/dfinzer",
  //     },
  //     {
  //       name: "Alex Atallah",
  //       role: "Co-founder & CTO",
  //       twitter: "https://twitter.com/xanderatallah",
  //     },
  //   ],
  // },

  // Base Projects
  {
    id: "aerodrome",
    title: "Aerodrome",
    subtitle: "Decentralized Exchange on Base",
    description:
      "Aerodrome is a decentralized exchange built on the Base network, designed to provide efficient token swaps and liquidity provision. It uses a vote-escrowed tokenomics model to align incentives between liquidity providers and governance participants.",
    logo: "/project-logos/aerodrome.jpg",
    website: "https://aerodrome.finance",
    blockchains: ["Base"],
    categories: ["DeFi", "DEX"],
    status: "Live",
    featured: true,
    tvl: "450M",
    launchDate: "Aug 2023",
    hasToken: true,
    tokenSymbol: "AERO",
    twitter: "https://twitter.com/AerodromeFinance",
    discord: "https://discord.gg/aerodrome",
    features: [
      "Concentrated liquidity pools",
      "Vote-escrowed tokenomics",
      "Bribes for gauge voting",
      "Optimized for Base network",
      "Low trading fees",
    ],
  },
  {
    id: "baseswap",
    title: "BaseSwap",
    subtitle: "DEX and Yield Farming Platform",
    description:
      "BaseSwap is a decentralized exchange and yield farming platform built specifically for the Base network. It offers token swaps, liquidity provision, staking, and farming opportunities for Base ecosystem tokens.",
    logo: "/project-logos/baseswap.jpg",
    website: "https://baseswap.fi",
    blockchains: ["Base"],
    categories: ["DeFi", "DEX"],
    status: "Live",
    tvl: "120M",
    launchDate: "Jul 2023",
    hasToken: true,
    tokenSymbol: "BSWAP",
    twitter: "https://x.com/BaseSwapDex",
    discord: "https://discord.gg/baseswap",
    features: ["Token swaps", "Liquidity provision", "Yield farming", "Staking rewards", "Governance"],
  },
  {
    id: "friend-tech",
    title: "Friend.tech",
    subtitle: "Social Platform with Token-Gated Chats",
    description:
      "Friend.tech is a social platform built on Base that allows users to buy and sell 'shares' of Twitter accounts, providing token-gated access to exclusive chats with the account owners. It creates a marketplace for social influence and direct creator-to-fan relationships.",
    logo: "/project-logos/friendtech.jpg",
    website: "https://friend.tech",
    blockchains: ["Base"],
    categories: ["Consumer", "Social"],
    status: "Live",
    featured: false,
    launchDate: "Aug 2023",
    hasToken: false,
    twitter: "https://twitter.com/friendtech",
    features: [
      "Social token marketplace",
      "Token-gated chat access",
      "Twitter account integration",
      "Trading fees for creators",
      "Direct creator-to-fan engagement",
    ],
  },
  {
    id: "degen",
    title: "Degen",
    subtitle: "Base Ecosystem Token",
    description:
      "Degen is the first memecoin and ecosystem token built for the Base network. It aims to become a core currency for the Base ecosystem, used for tipping, payments, and various applications built on the network.",
    logo: "/project-logos/degentoken.jpg",
    website: "https://degen.tips",
    blockchains: ["Base"],
    categories: ["Payments", "Consumer"],
    status: "Live",
    launchDate: "Sep 2023",
    hasToken: true,
    tokenSymbol: "DEGEN",
    twitter: "https://x.com/degentokenbase",
    discord: "https://discord.gg/degen",
    features: [
      "Base ecosystem token",
      "Social tipping functionality",
      "Integration with Base dApps",
      "Community governance",
      "Meme culture",
    ],
  },

  // Avalanche Projects
  {
    id: "trader-joe",
    title: "Trader Joe",
    subtitle: "DEX and DeFi Hub on Avalanche",
    description:
      "Trader Joe is a one-stop decentralized trading platform on the Avalanche network. It combines AMM functionality with lending, staking, and farming features to create a comprehensive DeFi ecosystem for Avalanche users.",
    logo: "/project-logos/traderjoe.jpg",
    website: "https://lfj.gg/",
    blockchains: ["Avalanche"],
    categories: ["DeFi", "DEX"],
    status: "Live",
    featured: false,
    tvl: "180M",
    launchDate: "Jul 2021",
    hasToken: true,
    tokenSymbol: "JOE",
    twitter: "https://x.com/LFJ_gg",
    discord: "https://discord.gg/traderjoe",
    github: "https://github.com/traderjoe-xyz",
    features: ["Token swaps", "Liquidity provision", "Yield farming", "Lending markets", "Launchpad for new projects"],
  },
  {
    id: "gmx",
    title: "GMX",
    subtitle: "Decentralized Perpetual Exchange",
    description:
      "GMX is a decentralized spot and perpetual exchange on Avalanche that supports low swap fees and zero price impact trades. It offers traders leveraged positions with deep liquidity while allowing liquidity providers to earn fees from market making and leverage trading.",
    logo: "/project-logos/gmx.jpg",
    website: "https://gmx.io",
    blockchains: ["Avalanche", "Ethereum"],
    categories: ["DeFi", "Derivatives"],
    status: "Live",
    featured: false,
    tvl: "590M",
    launchDate: "Sep 2021",
    hasToken: true,
    tokenSymbol: "GMX",
    twitter: "https://twitter.com/GMX_IO",
    discord: "https://discord.gg/gmx",
    github: "https://github.com/gmx-io",
    features: [
      "Perpetual trading with up to 50x leverage",
      "Zero price impact trades",
      "Multi-asset liquidity pool",
      "Real yield from trading fees",
      "Low trading fees",
    ],
  },
  {
    id: "benqi",
    title: "BENQI",
    subtitle: "Lending Protocol on Avalanche",
    description:
      "BENQI is a non-custodial liquidity market protocol on Avalanche, enabling users to effortlessly lend, borrow, and earn interest with their digital assets. It aims to bridge decentralized finance with institutional networks.",
    logo: "/project-logos/benqi.jpg",
    website: "https://benqi.fi",
    blockchains: ["Avalanche"],
    categories: ["DeFi", "Lending"],
    status: "Live",
    tvl: "120M",
    launchDate: "Aug 2021",
    hasToken: true,
    tokenSymbol: "QI",
    twitter: "https://twitter.com/BenqiFinance",
    discord: "https://discord.gg/benqi",
    github: "https://github.com/benqi-fi",
    features: [
      "Lending and borrowing",
      "Interest-bearing tokens",
      "Liquid staking for AVAX",
      "Governance through QI token",
      "Flash loans",
    ],
  },
  {
    id: "colony",
    title: "Colony",
    subtitle: "Avalanche Ecosystem Investment DAO",
    description:
      "Colony is an investment DAO built on Avalanche that focuses on funding and supporting projects within the Avalanche ecosystem. It allows community members to participate in early-stage investments and ecosystem growth.",
    logo: "/project-logos/colony.jpg",
    website: "https://colonylab.io",
    blockchains: ["Avalanche"],
    categories: ["DAO", "Infrastructure"],
    status: "Live",
    launchDate: "Dec 2021",
    hasToken: true,
    tokenSymbol: "CLY",
    twitter: "https://twitter.com/ColonyLab",
    discord: "https://discord.gg/colony",
    features: [
      "Ecosystem investments",
      "Community governance",
      "Incubation for Avalanche projects",
      "Staking rewards",
      "Validator node operation",
    ],
  },
  // Polygon Projects
  {
    id: "polymarket",
    title: "Polymarket",
    subtitle: "Decentralized Prediction Market",
    description:
      "Polymarket is an information markets platform that lets users trade on the outcomes of real-world events using cryptocurrency (USDC on Polygon). Participants buy and sell shares representing the likelihood of an event occurring.",
    logo: "/project-logos/polymarket.jpg", // Placeholder logo path
    website: "https://polymarket.com/",
    blockchains: ["Polygon"],
    categories: ["Prediction Markets", "DeFi", "Consumer"],
    status: "Live",
    featured: false,
    tvl: "N/A", // Trading volume is more relevant metric
    funding: "$70M+ total ($45M Series B in May 2024)",
    launchDate: "2020",
    hasToken: false, // Uses USDC for trading; potential future token
    tokenSymbol: "",
    twitter: "https://x.com/Polymarket",
    discord: "", // No official public Discord linked
    github: "", // Not open source
    features: [
      "Trading on real-world event outcomes (politics, crypto, etc.)",
      "Uses USDC on Polygon PoS",
      "Liquidity Provider incentives",
      "Market resolution based on UMA",
    ],
  },
  // Hyperliquid Project (on its own L1)
  {
    id: "hyperliquid",
    title: "Hyperliquid",
    subtitle: "Decentralized Perpetual Futures Exchange",
    description:
      "Hyperliquid is a decentralized order book perpetual futures exchange built on its own Layer 1 blockchain (Hyperliquid L1). It offers fast, transparent trading with low fees.",
    logo: "/project-logos/hyperliquid.png", // Placeholder logo path
    website: "https://app.hyperliquid.xyz/",
    blockchains: ["Hyperliquid"],
    categories: ["DeFi", "Derivatives", "Exchange", "Infrastructure"],
    status: "Live",
    featured: true,
    tvl: "~350M", // Approximate TVL, check DefiLlama for updates
    funding: "", // Funding info not readily available
    launchDate: "Late 2023", // Approximate launch
    hasToken: true, // Currently uses a points system
    tokenSymbol: "HYPER",
    twitter: "https://x.com/HyperliquidX",
    discord: "https://discord.gg/hyperliquid", // Found via website
    github: "", // No public repo found
    features: [
      "Order book perpetuals exchange",
      "Built on native Hyperliquid L1",
      "Fast transaction speeds",
      "Low trading fees",
      "On-chain transparency",
      "Points program for users",
    ],
  },
  // Berachain Projects
  {
    id: "dolomite",
    title: "Dolomite",
    subtitle: "Next-Gen Lending Protocol",
    description: "Dolomite is a next-gen lending protocol on Berachain, supporting a broader range of assets.",
    logo: "/project-logos/dolomite.jpg", // Placeholder
    website: "https://dolomite.io/", // Placeholder
    blockchains: ["Berachain", "Arbitrum", "Mantle", "X Layer", "Polygon zkEVM"],
    categories: ["DeFi", "Lending"],
    status: "Live", // Assuming live on testnet/mainnet
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: false, // Unknown
    tokenSymbol: "",
    twitter: "https://x.com/Dolomite_io",
    discord: "",
    github: "",
    features: ["Lending", "Broader Asset Support"],
  },
  {
    id: "honey-chat",
    title: "Honey Chat",
    subtitle: "SocialFi Experience",
    description: "Built natively on Berachain, Honey Chat is a SocialFi experience where engagement translates into economic value.",
    logo: "/project-logos/honeychat.png", // Placeholder
    website: "https://honeychat.app/", // Placeholder
    blockchains: ["Berachain"],
    categories: ["Social", "SocialFi"],
    status: "Live",
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: true, // Unknown
    tokenSymbol: "HONEY",
    twitter: "https://x.com/HoneyChatApp",
    discord: "",
    github: "",
    features: ["Social Engagement Rewards", "Native Berachain App"],
  },
  {
    id: "infrared",
    title: "Infrared",
    subtitle: "Liquid Staking & Node Infrastructure",
    description: "Infrared maximizes value capture by providing liquid staking solutions for BGT and BERA, node infrastructure, and PoL vaults.",
    logo: "/project-logos/infrared.jpg", // Placeholder
    website: "https://infrared.finance/", // Placeholder
    blockchains: ["Berachain"],
    categories: ["DeFi", "Infrastructure", "Staking"],
    status: "Live",
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: false, // Unknown
    tokenSymbol: "",
    twitter: "https://x.com/infraredfinance",
    discord: "",
    github: "",
    features: ["Liquid Staking (BGT, BERA)", "Node Infrastructure", "PoL Vaults"],
  },
  {
    id: "ooga-booga",
    title: "Ooga Booga",
    subtitle: "Native Liquidity Aggregator",
    description: "Ooga Booga is Berachain's native liquidity aggregator.",
    logo: "/project-logos/oogabooga.jpg", // Placeholder
    website: "https://www.oogabooga.io/", // Placeholder
    blockchains: ["Berachain"],
    categories: ["DeFi", "DEX Aggregator"],
    status: "Live",
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: false, // Unknown
    tokenSymbol: "",
    twitter: "https://x.com/oogaboogaberas",
    discord: "",
    github: "",
    features: ["Liquidity Aggregation", "Native Berachain DEX"],
  },
  {
    id: "origami",
    title: "Origami",
    subtitle: "Automated Leverage Layer",
    description: "Origami is the automated leverage layer for DeFi, integrated with third-party lenders for automated folded strategies.",
    logo: "/project-logos/origami.jpg", // Placeholder
    website: "https://origami.finance/", // Placeholder
    blockchains: ["Berachain"],
    categories: ["DeFi", "Leverage"],
    status: "Live",
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: false, // Unknown
    tokenSymbol: "",
    twitter: "https://x.com/origami_fi",
    discord: "",
    github: "",
    features: ["Automated Leverage", "Folded Strategies", "Capital Efficiency"],
  },
  {
    id: "abracadabra-money",
    title: "Abracadabra Money",
    subtitle: "DeFi Protocol",
    description: "Abracadabra Money on Berachain.", // Placeholder
    logo: "/project-logos/abracadabra.png", // Placeholder
    website: "https://abracadabra.money/", // Placeholder
    blockchains: ["Berachain"],
    categories: ["DeFi"],
    status: "Live",
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: true, // MIM/SPELL exist elsewhere
    tokenSymbol: "SPELL",
    twitter: "https://x.com/MIM_Spell",
    discord: "",
    github: "",
    features: ["Lending", "Stablecoin (MIM)"],
  },
  {
    id: "alterimai",
    title: "AlterimAI",
    subtitle: "NFT & AI Project",
    description: "AlterimAI combines NFTs and AI on Berachain.", // Placeholder
    logo: "/project-logos/alterimai.jpg", // Placeholder
    website: "https://www.alterim.ai/", // Placeholder
    blockchains: ["Berachain"],
    categories: ["NFT", "AI"],
    status: "Live",
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: false, // Unknown
    tokenSymbol: "",
    twitter: "https://x.com/Alterim_ai",
    discord: "",
    github: "",
    features: ["NFTs", "Artificial Intelligence Integration"],
  },
  {
    id: "api3",
    title: "Api3",
    subtitle: "Oracle Provider",
    description: "Api3 provides oracle services on Berachain.", // Placeholder
    logo: "/project-logos/api3.jpg", // Placeholder
    website: "https://api3.org/", // Placeholder
    blockchains: ["Berachain"],
    categories: ["Oracle", "Infrastructure"],
    status: "Live",
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: true, // API3 token exists
    tokenSymbol: "API3",
    twitter: "https://x.com/Api3DAO",
    discord: "",
    github: "",
    features: ["Decentralized Oracles", "Data Feeds"],
  },
  {
    id: "apiology-dao",
    title: "Apiology DAO",
    subtitle: "DAO Project",
    description: "Apiology DAO operating on Berachain.", // Placeholder
    logo: "/project-logos/apiology.jpg", // Placeholder
    website: "https://www.apiologydao.xyz/", // Placeholder
    blockchains: ["Berachain"],
    categories: ["DAO"],
    status: "Live",
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: false, // Unknown
    tokenSymbol: "",
    twitter: "https://x.com/ApiologyDAO",
    discord: "",
    github: "",
    features: ["Decentralized Autonomous Organization"],
  },
  {
    id: "aquabera",
    title: "AquaBera",
    subtitle: "DeFi Project",
    description: "AquaBera is a DeFi project on Berachain.", // Placeholder
    logo: "/project-logos/aquabera.jpg", // Placeholder
    website: "https://aquabera.com/", // Placeholder
    blockchains: ["Berachain"],
    categories: ["DeFi"],
    status: "Live",
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: false, // Unknown
    tokenSymbol: "",
    twitter: "https://x.com/aqua_bera",
    discord: "",
    github: "",
    features: ["Decentralized Finance"],
  },
  {
    id: "arbera",
    title: "Arbera",
    subtitle: "DeFi Project",
    description: "Arbera is a DeFi project on Berachain.", // Placeholder
    logo: "/project-logos/arbera.png", // Placeholder
    website: "https://arbera.io/", // Placeholder
    blockchains: ["Berachain"],
    categories: ["DeFi"],
    status: "Live",
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: false, // Unknown
    tokenSymbol: "",
    twitter: "https://x.com/ArbitrageBera",
    discord: "",
    github: "",
    features: ["Decentralized Finance"],
  },
  {
    id: "astro-pump",
    title: "Astro Pump",
    subtitle: "Launchpad",
    description: "Astro Pump is a launchpad project on Berachain.", // Placeholder
    logo: "/project-logos/astropump.jpg", // Placeholder
    website: "https://astropump.fun/", // Placeholder
    blockchains: ["Berachain", "Base", "Optimism"],
    categories: ["Launchpad"],
    status: "Live",
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: false, // Unknown
    tokenSymbol: "",
    twitter: "https://x.com/astropump_fun",
    discord: "",
    github: "",
    features: ["Token Launch Platform"],
  },
  {
    id: "azex",
    title: "AZEx",
    subtitle: "DeFi Exchange",
    description: "AZEx is a DeFi exchange project on Berachain with agentic integrations.", // Placeholder
    logo: "/project-logos/azex.jpg", // Placeholder
    website: "https://www.azex.io/home", // Placeholder
    blockchains: ["Berachain"],
    categories: ["DeFi", "Exchange"],
    status: "Live",
    featured: false,
    tvl: "",
    funding: "",
    launchDate: "",
    hasToken: false, // Unknown
    tokenSymbol: "",
    twitter: "https://x.com/azex_io",
    discord: "",
    github: "",
    features: ["Decentralized Exchange"],
  },
  // Add Solana Spaces
  {
    id: "solana-spaces",
    title: "Solana Spaces",
    subtitle: "Retail & Online Solana Activations",
    description:
      "Solana Spaces operates physical pop-up stores and online e-commerce focused on onboarding users and showcasing Solana ecosystem projects and merchandise.",
    logo: "/project-logos/solanaspaces.jpg", // Placeholder logo
    website: "https://solanaspaces.com/", // Found via web search
    blockchains: ["Solana"],
    categories: ["Consumer", "Infrastructure", "Retail", "Education"],
    status: "Live", // Assuming active based on Twitter
    featured: false,
    tvl: "N/A",
    funding: "", // Funding info not readily available
    launchDate: "Jul 2022", // Approx. based on initial store opening
    hasToken: true,
    tokenSymbol: "STORE",
    twitter: "https://x.com/solanaspaces",
    telegram: "t.me/SolanaSpacesBot", 
    discord: "", 
    github: "", // GitHub link not readily available
    features: [
      "Physical Retail Stores (Pop-ups)",
      "Online E-commerce Store",
      "User Onboarding",
      "Ecosystem Project Showcasing",
      "Solana Merchandise",
      "Community Events",
    ],
  },
]

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured).slice(0, 6)
}

// Get filtered projects
export function getFilteredProjects(options: FilterOptions): Project[] {
  let filteredProjects = [...projects]

  // Filter by blockchain
  if (options?.blockchain !== "all") {
    filteredProjects = filteredProjects.filter((project) =>
      project.blockchains.some((chain) => chain.toLowerCase() === options?.blockchain?.toLowerCase()),
    )
  }

  // Filter by categories
  if (options?.categories?.length > 0) {
    filteredProjects = filteredProjects.filter((project) =>
      options.categories.some((category) => project.categories.some((c) => c.toLowerCase() === category.toLowerCase())),
    )
  }

  // Filter by search
  if (options.search) {
    const searchLower = options.search.toLowerCase()
    filteredProjects = filteredProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchLower) ||
        project.subtitle.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.categories.some((category) => category.toLowerCase().includes(searchLower)),
    )
  }

  // Sort projects
  switch (options.sort) {
    case "newest":
      // This is a simplified sort since we don't have actual timestamps
      filteredProjects.sort((a, b) => (b.launchDate || "").localeCompare(a.launchDate || ""))
      break
    case "oldest":
      filteredProjects.sort((a, b) => (a.launchDate || "").localeCompare(b.launchDate || ""))
      break
    case "tvl-high":
      filteredProjects.sort((a, b) => {
        const aTvl = a.tvl ? Number.parseFloat(a.tvl.replace(/[^0-9.]/g, "")) : 0
        const bTvl = b.tvl ? Number.parseFloat(b.tvl.replace(/[^0-9.]/g, "")) : 0
        return bTvl - aTvl
      })
      break
    case "tvl-low":
      filteredProjects.sort((a, b) => {
        const aTvl = a.tvl ? Number.parseFloat(a.tvl.replace(/[^0-9.]/g, "")) : 0
        const bTvl = b.tvl ? Number.parseFloat(b.tvl.replace(/[^0-9.]/g, "")) : 0
        return aTvl - bTvl
      })
      break
    case "alphabetical":
      filteredProjects.sort((a, b) => a.title.localeCompare(b.title))
      break
    case "featured":
    default:
      // Featured projects first, then alphabetical
      filteredProjects.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return a.title.localeCompare(b.title)
      })
      break
  }

  return filteredProjects
}

// Get project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

// Get blockchain stats
export function getBlockchainStats() {
  const stats = blockchains.map((blockchain) => {
    const count = projects.filter((project) =>
      project.blockchains.some((chain) => chain.toLowerCase() === blockchain.id.toLowerCase()),
    ).length

    return {
      name: blockchain.name,
      value: count,
    }
  })

  return stats
}

// --- Event Data ---

const eventsData: Event[] = [
  {
    id: "1",
    title: "Solana Across America (Calendar)",
    date: "April 2025",
    location: "USA",
    lumaUrl: "https://lu.ma/solanamerica",
    state: undefined,
    country: "USA",
    lat: 39.8283, // Placeholder USA center
    lon: -98.5795, // Placeholder USA center
  },
  {
    id: "chicago",
    title: "Solana Across America — CHICAGO",
    date: "April 23rd, 2025",
    location: "Chicago, Illinois",
    lumaUrl: "https://lu.ma/cj2e58nb",
    state: "IL",
    country: "USA",
    lat: 41.8781, // Placeholder Chicago
    lon: -87.6298, // Placeholder Chicago
  },
  {
    id: "dc",
    title: "Solana Across America — WASHINGTON DC",
    date: "April 23rd 2025",
    location: "Arlington, VA",
    lumaUrl: "https://lu.ma/solanamerica_DC",
    state: "VA",
    country: "USA",
    lat: 38.8951, // Placeholder DC area
    lon: -77.0369, // Placeholder DC area
  },
  {
    id: "nyc",
    title: "Solana Across America — NYC",
    date: "April 23rd, 2025",
    location: "New York, New York",
    lumaUrl: "https://lu.ma/solanamerica_nyc",
    state: "NY",
    country: "USA",
    lat: 40.7128, // Placeholder NYC
    lon: -74.0060, // Placeholder NYC
  },
  {
    id: "philly",
    title: "Solana Across America — Philadelphia",
    date: "April 23rd, 2025",
    location: "Philadelphia, PA (Register for Location)",
    lumaUrl: "https://lu.ma/solanamerica_philly",
    state: "PA",
    country: "USA",
    lat: 39.9526, // Placeholder Philly
    lon: -75.1652, // Placeholder Philly
  },
  {
    id: "kentucky",
    title: "Solana Across America — KENTUCKY",
    date: "April 23rd, 2025",
    location: "Kentucky (The LongTail Building)",
    lumaUrl: "https://lu.ma/solanamerica_kentucky",
    state: "KY",
    country: "USA",
    lat: 37.8393, // Placeholder Kentucky
    lon: -84.2700, // Placeholder Kentucky
  },
  {
    id: "boston",
    title: "Solana Across America — BOSTON",
    date: "April 23rd, 2025",
    location: "Boston, MA (Industrious)",
    lumaUrl: "https://lu.ma/solanamerica_boston",
    state: "MA",
    country: "USA",
    lat: 42.3601, // Placeholder Boston
    lon: -71.0589, // Placeholder Boston
  },
  {
    id: "miami",
    title: "Solana Across America — MIAMI",
    date: "April 23rd, 2025",
    location: "Miami, Florida",
    lumaUrl: "https://lu.ma/solanamerica_miami",
    state: "FL",
    country: "USA",
    lat: 25.7617, // Placeholder Miami
    lon: -80.1918, // Placeholder Miami
  },
  {
    id: "houston",
    title: "Solana Across America — HOUSTON",
    date: "April 23rd, 2025",
    location: "Houston, TX (Cedar Creek)",
    lumaUrl: "https://lu.ma/solanamerica_houston",
    state: "TX",
    country: "USA",
    lat: 29.7604, // Placeholder Houston
    lon: -95.3698, // Placeholder Houston
  },
  {
    id: "west-texas",
    title: "Solana Across America — WEST TEXAS",
    date: "April 23rd, 2025",
    location: "West Texas (TBA)",
    lumaUrl: "https://lu.ma/solanamerica_westtexas",
    state: "TX",
    country: "USA",
    lat: 31.9686, // Placeholder West Texas
    lon: -99.9018, // Placeholder West Texas
  },
  {
    id: "dallas",
    title: "Solana Across America — DALLAS",
    date: "April 23rd, 2025",
    location: "Dallas, TX (Cowboys Club)",
    lumaUrl: "https://lu.ma/solanamerica_dallas",
    state: "TX",
    country: "USA",
    lat: 32.7767, // Placeholder Dallas
    lon: -96.7970, // Placeholder Dallas
  },
  {
    id: "denver",
    title: "Solana Across America — DENVER",
    date: "April 23rd, 2025",
    location: "Denver, CO (TBA)",
    lumaUrl: "https://lu.ma/solanamerica_denver",
    state: "CO",
    country: "USA",
    lat: 39.7392, // Placeholder Denver
    lon: -104.9903, // Placeholder Denver
  },
  {
    id: "seattle",
    title: "Solana Across America — SEATTLE",
    date: "April 23rd, 2025",
    location: "Seattle, WA (Niftmint)",
    lumaUrl: "https://lu.ma/v8ydyt4g",
    state: "WA",
    country: "USA",
    lat: 47.6062, // Placeholder Seattle
    lon: -122.3321, // Placeholder Seattle
  },
  {
    id: "vegas",
    title: "Solana Across America — LAS VEGAS",
    date: "April 23rd, 2025",
    location: "Las Vegas, NV",
    lumaUrl: "https://lu.ma/solanamerica_lasvegas",
    state: "NV",
    country: "USA",
    lat: 36.1699, // Placeholder Vegas
    lon: -115.1398, // Placeholder Vegas
  },
  {
    id: "sf",
    title: "Solana Across America — SAN FRANCISCO",
    date: "April 23rd, 2025",
    location: "San Francisco, CA (TBA)",
    lumaUrl: "https://lu.ma/solanamerica_sanfran",
    state: "CA",
    country: "USA",
    lat: 37.7749, // Placeholder SF
    lon: -122.4194, // Placeholder SF
  },
  {
    id: "portland",
    title: "Solana Across America — Portland",
    date: "April 23rd, 2025",
    location: "Portland, OR (TBA)",
    lumaUrl: "https://lu.ma/solanamerica_portland",
    state: "OR",
    country: "USA",
    lat: 45.5051, // Placeholder Portland
    lon: -122.6750, // Placeholder Portland
  },
  {
    id: "la",
    title: "tidalDAO: The Swell, Wave IV x Solana Across America",
    date: "April 23rd, 2025",
    location: "Los Angeles County, California",
    lumaUrl: "https://lu.ma/osv8nalb",
    state: "CA",
    country: "USA",
    lat: 34.0522, // Placeholder LA
    lon: -118.2437, // Placeholder LA
  },
];

export function getEvents(): Event[] {
  // In a real app, you might fetch this data from an API
  return eventsData;
}

// --- End Event Data ---
