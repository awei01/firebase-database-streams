import extractUrlFromRef from '@/extractUrlFromRef'

describe('extractUrlFromRef()', () => {
  it('called with [ref] calls ref.toString() and returns result', () => {
    const ref = { toString: jasmine.createSpy() }
    ref.toString.and.returnValue('result')

    const result = extractUrlFromRef(ref)

    expect(ref.toString).toHaveBeenCalledWith()
    expect(result).toBe('result')
  })
})
