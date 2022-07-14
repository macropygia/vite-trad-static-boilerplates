const autoprefixer = require('autoprefixer')
const cssDeclarationSorter = require('css-declaration-sorter')
const csso = require('postcss-csso')
const sortMediaQueries = require('postcss-sort-media-queries')

module.exports = {
  plugins: [
    sortMediaQueries({ sort: 'mobile-first' }),
    cssDeclarationSorter({ order: 'smacss' }),
    autoprefixer(),
    csso({ restructure: true }),
  ],
}
