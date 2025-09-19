const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');


module.exports = (() => {
  const defaultConfig = getDefaultConfig(__dirname);

  return {
    transformer: {
      ...defaultConfig.transformer,
    },
    resolver: {
      assetExts: defaultConfig.resolver.assetExts,
      sourceExts: [...defaultConfig.resolver.sourceExts, 'ts', 'tsx', 'js', 'jsx', 'json'],
    },
  };
})();
