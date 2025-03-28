module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            general: "./src/general",
            hooks: "./src/hooks",
            screen: "./src/screens",
            services: "./src/services",
            stores: "./src/stores",
          },
          extensions: [".js", ".jsx"],
        },
      ],
    ],
  };
};