import setOnCache from '@/setOnCache'

describe('setOnCache()', () => {
  it('called with [cache, id, item] sets cache.id = item', () => {
    const cache = {}
    setOnCache(cache, 'foo', 'foo value')
    expect(cache).toEqual({ foo: 'foo value' })
  })
})
