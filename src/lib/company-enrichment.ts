const genericDomains = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 
  'aol.com', 'protonmail.com', 'ymail.com', 'live.com', 'msn.com'
];

export function enrichCompanyData(name: string, email: string, providedCompany?: string, providedWebsite?: string) {
  const domain = email.split('@')[1]?.toLowerCase();
  const isGeneric = genericDomains.includes(domain);
  
  let finalCompany = providedCompany?.trim();
  let finalWebsite = providedWebsite?.trim();

  // Clean up lazy inputs like "n/a", "none", "nothing"
  if (finalCompany && finalCompany.toLowerCase().match(/^(n\/a|na|none|nothing|no|personal|self|\.|-|none provided)$/)) {
    finalCompany = "";
  }
  if (finalWebsite && finalWebsite.toLowerCase().match(/^(n\/a|na|none|nothing|no|personal|self|\.|-|none provided)$/)) {
    finalWebsite = "";
  }

  // 1. If we have a business domain, we can extract the company name and website!
  if (!isGeneric && domain) {
    if (!finalWebsite || finalWebsite === "#") {
      finalWebsite = `https://${domain}`;
    }
    if (!finalCompany) {
      // Extract "acconstruction" from "acconstruction.com"
      const namePart = domain.split('.')[0];
      // Format as "Acconstruction" (or basic capitalization)
      finalCompany = namePart.charAt(0).toUpperCase() + namePart.slice(1);
    }
  }

  // 2. If it's a generic domain and we STILL don't have a company
  if (!finalCompany) {
    // Fallback to a natural phrase rather than "Your Company"
    const firstName = name.split(' ')[0] || "there";
    // Using capitalization makes it look like a real proper noun in the email
    finalCompany = `${firstName}'s Business`; 
  }

  // Ensure website is formatted well for display
  let displayWebsite = "Not Provided";
  if (finalWebsite && finalWebsite !== "#" && finalWebsite !== "") {
    displayWebsite = finalWebsite.replace(/^https?:\/\//, '').replace(/\/$/, '');
  } else {
    finalWebsite = "#";
  }

  return {
    companyName: finalCompany,
    companyWebsite: finalWebsite,
    companyWebsiteDisplay: displayWebsite
  };
}
