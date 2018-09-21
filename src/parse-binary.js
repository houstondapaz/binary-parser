function ParseBinary(binary, parser) {
  if (!binary) {
    return ''
  }

  if (typeof binary === 'string') {
    return binary
  }

  const len = binary.buffer.length
  const b = binary.read(0, len)
  return parser(b)
}

module.exports = ParseBinary
