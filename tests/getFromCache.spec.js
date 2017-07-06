import getFromCache from '@/getFromCache'

describe('getFromCache()', () => {
  it('called with cache and id, returns the cache.id', () => {
    const cache = { foo: 'foo value' }
    expect(getFromCache(cache, 'foo')).toBe('foo value')
  })
})
