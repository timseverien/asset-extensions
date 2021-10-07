const assetExtensions = require('../all');

module.exports = (filePath, extensions = assetExtensions) => extensions
  .some((extension) => filePath.endsWith(`.${extension}`));
