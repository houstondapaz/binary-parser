const ParseBinary = require('./src/parse-binary')
const BufferToGUID = require('./src/buffer-to-guid')
const BufferToUUID = require('./src/buffer-to-uuid')

module.exports.BinaryToGUID = function BinaryToGUID(binary) {
  return ParseBinary(binary, BufferToGUID)
}

module.exports.BinaryToUUID = function BinaryToUUID(binary) {
  return ParseBinary(binary, BufferToUUID)
}
