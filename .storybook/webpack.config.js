module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          // for w/e reason, we need to explicitly provide all of this to react-storybook
          presets: [ 'es2015', 'stage-0', 'react' ],
          plugins: [ 'transform-runtime' ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
