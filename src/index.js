import ifElse from 'ramda/src/ifElse'
import isNil from 'ramda/src/isNil'
import identity from 'ramda/src/identity'
import when from 'ramda/src/when'
import assoc from 'ramda/src/assoc'
import memoizeWith from 'ramda/src/memoizeWith'
import { stream, map } from 'flyd'

function extractKeyFromRef (ref) {
  return ref.toString()
}
function isObject (value) {
  return value && typeof value === 'object'
}

function extractData (ref) {
  return ifElse(
    isNil,
    identity,
    when(
      isObject,
      assoc('$key', extractKeyFromRef(ref))
    )
  )
}

function bindRefToStream (ref) {
  const value = stream(undefined)
  ref.on('value', value)
  return map(extractData(ref), value)
}

export default function Repository () {
  const fetch = memoizeWith(extractKeyFromRef, bindRefToStream)

  return {
    fetch
  }
}