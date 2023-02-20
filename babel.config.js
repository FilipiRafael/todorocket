module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      'babel-preset-expo'
    ],
    plugins: [
      [
          'module-resolver',
          {
              alias: {
                  '@': './src',
                  'assets': './assets',
              }
          },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: 'react-native-dotenv',
          verbose: true,
        },
      ],
      'react-native-reanimated/plugin',
      '@stripe/stripe-react-native'
    ]
  };
};
