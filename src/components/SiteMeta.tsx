import { Helmet } from "react-helmet-async";

const TITLE = "Toto Finance – Asset-Backed Tokenization Platform";
const DESCRIPTION =
  "Toto Finance is the global infrastructure for tokenized commodities. Trade tokenized gold, silver, diamonds, and energy assets with Toto Finance.";
const KEYWORDS =
  "Toto Finance, tokenized commodities, commodity tokenization, asset-backed tokenization, tokenized metals, tokenized energy, tokenized gold, tokenized silver, tokenized diamonds, tokenized copper, real world assets, RWA infrastructure, digital commodities, on-chain settlement, commodity tokenization platform, physical asset tokenization, digital ownership, Liechtenstein tokenization, LCX validation, institutional tokenization, gold bar, silver bar, platinum bar";

const OG_IMAGE_PATH = "/Og%20Image.jpg";

const SiteMeta = () => {
  // Resolve OG image to current origin so it works on any domain (Vercel, custom domain, etc.)
  const ogImage =
    typeof window !== "undefined"
      ? `${window.location.origin}${OG_IMAGE_PATH}`
      : OG_IMAGE_PATH;

  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="author" content="Toto Finance" />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TotoFinance" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SiteMeta;
