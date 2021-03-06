module.exports = {
  plugins: [
    require(`tailwindcss`)(`./tailwind.config.js`),
    require(`autoprefixer`),
    ...(process.env.NODE_ENV === "production"
      ? [
          require('postcss-import'),
          require(`cssnano`)({
            preset: "default",
          }),
        ]
      : []),
  ],
};
