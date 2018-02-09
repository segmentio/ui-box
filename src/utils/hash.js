/* eslint-disable unicorn/number-literal-case */
// murmurhash2 via https://gist.github.com/raycmorgan/588423

export default function hash(str) {
  return murmurhash2(str, str.length).toString(36)
}

function murmurhash2(str, seed) {
  const m = 0x5bd1e995
  const r = 24
  let h = seed ^ str.length
  let length = str.length
  let currentIndex = 0

  while (length >= 4) {
    let k = uint32(str, currentIndex)

    k = umul32(k, m)
    k ^= k >>> r
    k = umul32(k, m)

    h = umul32(h, m)
    h ^= k

    currentIndex += 4
    length -= 4
  }

  switch (length) {
    case 3:
      h ^= uint16(str, currentIndex)
      h ^= str.charCodeAt(currentIndex + 2) << 16
      h = umul32(h, m)
      break

    case 2:
      h ^= uint16(str, currentIndex)
      h = umul32(h, m)
      break

    case 1:
      h ^= str.charCodeAt(currentIndex)
      h = umul32(h, m)
      break

    default:
  }

  h ^= h >>> 13
  h = umul32(h, m)
  h ^= h >>> 15

  return h >>> 0
}

function uint32(str, pos) {
  return (
    str.charCodeAt(pos++) +
    (str.charCodeAt(pos++) << 8) +
    (str.charCodeAt(pos++) << 16) +
    (str.charCodeAt(pos) << 24)
  )
}

function uint16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8)
}

function umul32(n, m) {
  n |= 0
  m |= 0
  const nlo = n & 0xffff
  const nhi = n >>> 16
  const res = (nlo * m + (((nhi * m) & 0xffff) << 16)) | 0
  return res
}
