const BASE64_DIGITS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
const HEX_DIGITS = '0123456789abcdef'

function Base64ToHex(base64) {
  let hex = ''
  for (let i = 0; i < 24;) {
    const e1 = BASE64_DIGITS.indexOf(base64[i++])
    const e2 = BASE64_DIGITS.indexOf(base64[i++])
    const e3 = BASE64_DIGITS.indexOf(base64[i++])
    const e4 = BASE64_DIGITS.indexOf(base64[i++])
    const c1 = (e1 << 2) | (e2 >> 4)
    const c2 = ((e2 & 15) << 4) | (e3 >> 2)
    const c3 = ((e3 & 3) << 6) | e4
    hex += HEX_DIGITS[c1 >> 4]
    hex += HEX_DIGITS[c1 & 15]
    if (e3 !== 64) {
      hex += HEX_DIGITS[c2 >> 4]
      hex += HEX_DIGITS[c2 & 15]
    }
    if (e4 !== 64) {
      hex += HEX_DIGITS[c3 >> 4]
      hex += HEX_DIGITS[c3 & 15]
    }
  }
  return hex
}

module.exports = Base64ToHex
