### generate a full tailwind config file

`npx tailwind init tailwind-full.config.js --full`

### Install Purgecss to remove unused CSS

```bash
npm install @fullhuman/postcss-purgecss --save-dev
```

Edit `postcss.config.js`:

```js
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        // add all the html files
        content: ["./src/**/*.vue", "./public/index.html"],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
};
```

Then run `npm run build`, you will notice that the generate css file size down from `186602` lines to `600` lines.
