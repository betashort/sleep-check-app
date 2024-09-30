# sleep-check-app
1. [環境構築](#環境構築)
   1. [パッケージ](#パッケージ)
   2. [tailwind css](#tailwind-css)
      1. [router-dom](#router-dom)
      2. [react-hook-form](#react-hook-form)
      3. [FullCalendar](#fullcalendar)
2. [設計書](#設計書)

## 環境構築

```bash
docker-compose build
docker-compose up -d
docker-compose exec node bash
docker-compose down
```

### パッケージ

### tailwind css

1. tailwind cssのインストールと初期化

```bash
npm i -D tailwindcss
npx tailwindcss init
```

2. tailwind.config.jsの編集

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. index.cssの編集

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### router-dom

```bash

```

#### react-hook-form

```bash
npm install react-hook-form
```

#### FullCalendar

* https://fullcalendar.io/docs/react
* https://qiita.com/cokemaniaIIDX/items/32676eacf4d6f5413d81
* 
```bash
$ npm install --save @fullcalendar/react @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list

```
## 設計書

[設計書](./design/README.md)
