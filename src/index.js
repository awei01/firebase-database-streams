import partial from 'ramda/src/partial'
import memoizeWith from 'ramda/src/memoizeWith'
import { stream } from 'flyd'

import extractUrl from './extractUrl'
import extractKey from './extractKey'
export { extractUrl, extractKey }

function refreshStream (stream, snap) {
  stream(snap.val())
}
function bindRefToStream (ref) {
  const value = stream(undefined)
  ref.on('value', partial(refreshStream, [value]))
  return value
}

export default function Streamer () {
  const fetch = memoizeWith(extractUrl, bindRefToStream)

  return {
    fetch
  }
}
