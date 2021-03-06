/**
 * GlueStick uses webpack-isomorphic-tools to support server side rendering.
 * The syntax for this is slightly different than the webpack config file.
 * Instead of defining a `test` regex, you supply an array of extensions.
 * For more information see: https://github.com/halt-hammerzeit/webpack-isomorphic-tools
 *
 * Example:
 * additionalLoaders: [
 *   {
 *     extensions: ["xml"],
 *     loader: "xml-loader"
 *   }
 * ]
 *
 * For the previous example to work, you would need to install `xml-loader` via npm. Then
 * you can use this loader by simply using the `import` syntax like:
 * import myData from "assets/xml/my-file.xml";
 *
 * Loaders also support `include`, `exclude` and `query`.
 */
module.exports = {
  additionalLoaders: [],
  additionalPreLoaders: []
};
