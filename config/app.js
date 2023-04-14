const isProd = process.arch.includes('--prod')
const isWebp = process.arch.includes('--webp')
const isDev = !isProd

module.exports = {
  isProd: isProd,
  isDev: isDev,
  isWebp: !isWebp,
  htmlmin: {
    collapseWhitespace: false,
    removeStyleLinkTypeAttributes: true, //* Удалить type="text/css" из script тегов.
    removeScriptTypeAttributes: true, //* Удалить type="text/javascript"из scriptтегов.
    trimCustomFragments: true, //* Обрезать пустое пространство
    quoteCharacter: "" //* Тип кавычек для значений атрибутов
  },
  webpack: {
    mode: isProd ? "production" : "development"
  },
  imgmin: {
    verbose: true
  },
  fonter: {
    formats: ["ttf", "woff", "eot", "svg"]
  }
}
