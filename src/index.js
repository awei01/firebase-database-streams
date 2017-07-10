import partial from 'ramda/src/partial'
import memoizeWith from 'ramda/src/memoizeWith'
import { stream } from 'flyd'

function extractKeyFromRef (ref) {
  return ref.toString()
}
function refreshStream (stream, snap) {
  stream(snap.val())
}
function bindRefToStream (ref) {
  const value = stream(undefined)
  ref.on('value', partial(refreshStream, [value]))
  return value
}

export default function Repository () {
  const fetch = memoizeWith(extractKeyFromRef, bindRefToStream)

  return {
    fetch
  }
}
