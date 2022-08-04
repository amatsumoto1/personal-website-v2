const config = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current'
      },
    },
  ],
    ['@babel/preset-react'],
    ['@babel/preset-typescript', {
        allExtensions: true,
        isTSX: true
      }
    ]
  ],
  plugins: [
    'babel-plugin-styled-components'
  ]
};

module.exports = config;