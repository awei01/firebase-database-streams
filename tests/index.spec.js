import Repository from '@'

describe('Repository()', () => {
  describe('fetch()', () => {
    it(`called with [ref]
        returns stream() of [undefined]`,
      () => {
        const { fetch } = Repository()
        const ref = fakeRef('foo')
        const stream = fetch(ref)

        expect(stream()).toBe(undefined)
      })

    it(`called with [ref]
        and snapshot updates with [result]
        returns stream() of [result]`,
      () => {
        const { fetch } = Repository()
        const ref = fakeRef('foo')
        const stream = fetch(ref)

        ref.mockVal('result')

        expect(stream()).toBe('result')
      })

    describe('memoization', () => {
      it(`called with [ref] twice where ref is same,
          returns same stream`,
        () => {
          const { fetch } = Repository()
          const ref1 = fakeRef('foo')
          const ref2 = fakeRef('foo')
          const stream1 = fetch(ref1)
          const stream2 = fetch(ref2)

          ref1.mockVal('new data')

          expect(stream1).toBe(stream2)
          expect(stream1()).toBe('new data')
          expect(stream2()).toBe('new data')
        })
      it(`called with [ref] twice where ref is different,
          returns independent streams`,
        () => {
          const { fetch } = Repository()
          const ref1 = fakeRef('foo')
          const ref2 = fakeRef('bar')
          const stream1 = fetch(ref1)
          const stream2 = fetch(ref2)

          ref1.mockVal('new data')

          expect(stream1()).toBe('new data')
          expect(stream2()).toBe(undefined)
        })
      it(`called with [ref] on 2 Repository() where ref is same,
          returns independent streams`,
        () => {
          const repo1 = Repository()
          const repo2 = Repository()
          const ref = fakeRef('foo')
          const stream1 = repo1.fetch(ref)
          const stream2 = repo2.fetch(ref)

          ref.mockVal('new data')

          expect(stream1).not.toBe(stream2)
          expect(stream1()).toBe('new data')
          expect(stream2()).toBe('new data')
        })
    })
  })
})

function fakeRef (name) {
  if (!name) {
    throw new Error('Missing [name] for ref')
  }
  const ref = {
    toString () {
      return `${name}.url`
    },
    on: jasmine.createSpy(),
    // fake method to mock updates on snapshot
    mockVal (val) {
      const calls = ref.on.calls.all()
      if (!calls.length) {
        throw new Error(`fakeRef [${name}] on() not called`)
      }

      // make the snap
      const snap = {
        val () {
          return val
        }
      }

      calls.forEach((call) => {
        call.args[1](snap)
      })
    }
  }
  return ref
}
