# spline-interpolator
Library for smoothing spline interpolation.

# Usage

```
// initialization

const SplineInterpolator = require('spline-interpolator')
const x = [1, 2, 3, 4, 5]
const y = [9, 3, 6, 2, 4]
const interpolator = new SplineInterpolator(x, y)

// interpolate single point
console.log(interpolator.interpolate(2.5))
// >> 1.7468571428571422

// print curve
for (const [xi, yi] of interpolator.curve(100)) {
  console.log(xi, yi)
}
```
