import extractUrl from '@/extractUrl'

describe('extractUrl()', () => {
  it('called with [ref] calls ref.toString() and returns result', () => {
    const ref = { toString: jasmine.createSpy() }
    ref.toString.and.returnValue('result')

    const result = extractUrl(ref)

    expect(ref.toString).toHaveBeenCalledWith()
    expect(result).toBe('result')
  })
})
