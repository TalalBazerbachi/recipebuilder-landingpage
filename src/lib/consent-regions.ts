// Countries where nothing identifying is stored without consent (EEA, UK,
// Switzerland). The site has no cookie banner, so in these countries Google
// tags run cookieless (Consent Mode "denied") and first-party analytics sets
// no visitor or session ID.
export const CONSENT_REQUIRED_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
];
