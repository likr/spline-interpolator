/* eslint-env mocha */

const SplineInterpolator = require('./index')
const assert = require('power-assert')

describe('SplineInterpolator', () => {
  describe('interpolate', () => {
    it('works!', () => {
      const x = [1, 2, 3, 4, 5]
      const y = [9, 3, 6, 2, 4]
      const interpolator = new SplineInterpolator(x, y)
      assert.equal(interpolator.interpolate(0.5), 9)
      assert.equal(interpolator.interpolate(1), 9)
      assert.equal(interpolator.interpolate(1.5), 4.868303571428572)
      assert.equal(interpolator.interpolate(2), 3)
      assert.equal(interpolator.interpolate(2.5), 4.5200892857142865)
      assert.equal(interpolator.interpolate(3), 6)
      assert.equal(interpolator.interpolate(3.5), 4.301339285714286)
      assert.equal(interpolator.interpolate(4), 2)
      assert.equal(interpolator.interpolate(4.5), 2.1495535714285703)
      assert.equal(interpolator.interpolate(5), 4)
      assert.equal(interpolator.interpolate(5.5), 4)
    })
  })

  describe('min', () => {
    it('works!', () => {
      const x = [1, 2, 3, 4, 5]
      const y = [9, 3, 6, 2, 4]
      const interpolator = new SplineInterpolator(x, y)
      assert.equal(interpolator.min(), 1.7468571428571422)
    })
  })

  describe('max', () => {
    it('works!', () => {
      const x = [1, 2, 3, 4, 5]
      const y = [9, 3, 6, 2, 4]
      const interpolator = new SplineInterpolator(x, y)
      assert.equal(interpolator.max(), 9)
    })
  })

  describe('domain', () => {
    it('works!', () => {
      const x = [1, 2, 3, 4, 5]
      const y = [9, 3, 6, 2, 4]
      const interpolator = new SplineInterpolator(x, y)
      assert.deepEqual(interpolator.domain(), [1, 5])
    })
  })

  describe('range', () => {
    it('works!', () => {
      const x = [1, 2, 3, 4, 5]
      const y = [9, 3, 6, 2, 4]
      const interpolator = new SplineInterpolator(x, y)
      assert.deepEqual(interpolator.range(), [1.7468571428571422, 9])
    })
  })

  describe('curve', () => {
    it('works!', () => {
      const x = [1, 2, 3, 4, 5]
      const y = [9, 3, 6, 2, 4]
      const interpolator = new SplineInterpolator(x, y)
      assert.deepEqual(interpolator.curve(9), [
        [1, 9],
        [1.5, 4.868303571428572],
        [2, 3],
        [2.5, 4.5200892857142865],
        [3, 6],
        [3.5, 4.301339285714286],
        [4, 2],
        [4.5, 2.1495535714285703],
        [5, 4]
      ])
    })
  })
})
