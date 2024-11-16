const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });

// Remove 'svg' from assetExts and add it to sourceExts for SVG support
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts.push('svg');

// Add the SVG transformer
config.transformer = {
  ...config.transformer, // Ensure existing transformations are retained
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};