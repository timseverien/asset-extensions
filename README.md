# asset-extensions

A list of extensions for web assets.

## Installation

```bash
npm install asset-extensions
```

## Usage

```
const assetExtensions = require('asset-extensions');
const fontExtensions = require('asset-extensions/lib/font');
const imageExtensions = require('asset-extensions/lib/image');
const scriptExtensions = require('asset-extensions/lib/script');
const styleExtensions = require('asset-extensions/lib/style');

const isPathAsset = require('asset-extensions/lib/util/isPathAsset');
```

## Example

Connect middleware to set HTTP response headers:

```js
const isPathAsset = require('asset-extensions/util/isPathAsset');
const imageExtensions = require('asset-extensions/image');

module.exports = (req, res, next) => {
  const isAsset = isPathAsset(req.url)
  const isImage = isPathAsset(req.url, imageExtensions)

  if (!isPathAsset(req.url)) {
    res.setHeader('Content-Security-Policy', '...');
  }

  if (isPathAsset(req.url, imageExtensions)) {
    res.setHeader('Cache-Control', '...');
  }

  next();
};
```
