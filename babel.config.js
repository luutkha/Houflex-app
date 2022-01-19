module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module:react-native-dotenv',
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.native.js',
          '.native.jsx',
          '.ios.js',
          '.ios.tsx',
          '.web.js',
          '.web.tsx',
        ],
        root: ['./src'],
      },
    ],
  ],
};
