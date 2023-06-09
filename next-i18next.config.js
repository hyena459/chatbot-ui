module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["de", "en", "fr", "ru", "zh", "es", "sv", "pt", "te", "ja"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/public/locales",
};
