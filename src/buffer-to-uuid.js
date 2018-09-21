function BufferToUUID(buffer) {
  let hex = ''

  for (let i = 0; i < buffer.length; i++) {
    const n = buffer.readUInt8(i)
    if (n < 16) {
      hex += '0' + n.toString(16)
    } else {
      hex += n.toString(16)
    }
  }

  const uuidStr = hex.substr(0, 8) + '-' + hex.substr(8, 4) + '-' + hex.substr(12, 4) + '-' + hex.substr(16, 4) + '-' + hex.substr(20, 12)
  return uuidStr
}

module.exports = BufferToUUID
