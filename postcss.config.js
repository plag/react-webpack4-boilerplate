module.exports = {
  ident: 'postcss',
  plugins: [
    require('postcss-easy-import')({ prefix: '_', extensions: ['.sass', '.scss'] }), // keep this first
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }) // so imports are auto-prefixed too
  ]
}
