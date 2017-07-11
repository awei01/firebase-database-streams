import extractKey from '@/extractKey'

describe('extractKey()', () => {
  it('called with [ref], returns ref.key', () => {
    const ref = { key: 'foo' }
    expect(extractKey(ref)).toBe('foo')
  })
  it('called with [ref], when ref does not have key throws error', () => {
    const ref = {}
    expect(() => {
      extractKey(ref)
    }).toThrowError('Invalid ref or snap is missing property [key]')
  })
})
