module.exports = {
  locales: ["default", "en", "zh"],
  defaultLocale: "default",
  localeDetection: false,
  pages: {
    "*": ["common"],
    "/": ["app"],
    "/address": ["address"],
    "/exchangeHistory": ["exchangeHistory"],
    "/level": ["level"],
  },
};
