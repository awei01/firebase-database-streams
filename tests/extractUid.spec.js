import extractUid from '@/extractUid'

describe('extractUid()', () => {
  it(`called with [ref]
    calls ref.toString()
    returns its result`,
    () => {
      const spy = jasmine.createSpy('toString').and.returnValue('result')
      const ref = { toString: spy }

      const result = extractUid(ref)

      expect(ref.toString).toHaveBeenCalledWith()
      expect(result).toBe('result')
    })
})
