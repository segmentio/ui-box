export default function parseUnit(_str, _out = [0, '']) {
  const out = _out
  const str = String(_str)
  const num = parseFloat(str, 10)
  out[0] = num
  out[1] = str.match(/[\d.\-+]*\s*(.*)/)[1] || ''
  return out
}
