export const revalidate = 24 * 60 * 60;

const sitemap = () => {
  const sitemapUrl = [
    // "https://www.travelerroutes.com/",
    // "https://travelerroutes.com/about-us",
    // "https://travelerroutes.com/properties",
    // "https://travelerroutes.com/contact-us",
    // "https://travelerroutes.com/blogs",
    "https://acme.com",
    "https://acme.com/about",
    "https://acme.com/blogs",
  ];

  const urls = sitemapUrl.map((item) => ({
    url: item,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...urls];
};

export default sitemap;
