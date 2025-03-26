// @ts-check
/**
 * @type {import('prettier').Config &
 * import("@ianvs/prettier-plugin-sort-imports").PluginConfig &
 * import('prettier-plugin-tailwindcss').PluginOptions}
 */
export default {
  plugins: [
    "prettier-plugin-astro",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: ["<THIRD_PARTY_MODULES>", "", "^~/", "", "^[.]"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderCaseSensitive: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
