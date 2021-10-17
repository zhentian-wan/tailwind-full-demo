### Install

```bash
npm install tailwaindcss postcss-cli autoperfixer
```

### Config a empty tailwind config file

```bash
npx tailwind init
```

### Conig postcss

```js
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
```

### Add tailwind.css

```css
// css/tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Add scripts

```json
  "scripts": {
    "build": "postcss css/tailwind.css -o public/build/tailwind.css",
    "watch": "postcss css/tailwind.css -o public/build/tailwind.css --watch"
  },
```

Once you run `npm run build`, it will generate css file for you.

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
