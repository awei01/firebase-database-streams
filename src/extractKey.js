export default function extractKey (refOrSnap) {
  if ('key' in refOrSnap) {
    return refOrSnap.key
  }
  throw new Error('Invalid ref or snap is missing property [key]')
}
