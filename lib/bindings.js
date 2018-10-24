var binary = require('node-pre-gyp');
var path = require('path');
var binding_path = binary.find(path.resolve(path.join(__dirname, '../package.json')), { debug: !!process.env.NODE_OPENCV_DEBUG });
try {
  var binding = require(binding_path);
} catch (e) {
  console.error(e);
  var binding = require(path.join(process.cwd(), './opencv.node'));
}

module.exports = binding;
