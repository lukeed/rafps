# rafps [![codecov](https://badgen.now.sh/codecov/c/github/lukeed/rafps)](https://codecov.io/gh/lukeed/rafps)

> A tiny (178B) helper for playing, pausing, and setting [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) frame rates.

This module is delivered as:

* **ES Module**: [`dist/rafps.mjs`](https://unpkg.com/rafps/dist/index.mjs)
* **CommonJS**: [`dist/rafps.js`](https://unpkg.com/rafps/dist/index.js)
* **UMD**: [`dist/rafps.min.js`](https://unpkg.com/rafps)

## Install

```
$ npm install --save rafps
```


## Usage

```js
import rafps from 'rafps';

// Run at 30fps
const ctx = rafps(frame => {
  console.log('Current frame:', frame);

  // Do animation things...

  // target hit, pause animation
  // .. or can run indefinitely
  if (frame >= 1e3) ctx.pause();
}, 30);

// Begin playback
ctx.play();
```


## API

### rafps(draw, fps?)
Returns: `RAFPS`

Returns a new `RAFPS` instance which can toggle between play/pause states using the same `draw` and `fps` values.

#### draw

Type: `Function`<br>
Required: `true`

The callback function to invoke at every "frame" tick.

It will receive one argument, `frame` (number), which is the current frame count since playback began.<br>The `frame` count starts at `0` and will increment indefinitely until paused. Once paused, `frame` will start from `0` the next time playback begins.

#### fps
Type: `Number`<br>
Default: `60`

The number of _frames per second_<sup>*</sup> to target.<br>
Put differently, this is the maximum number of times `draw` will be called per second.

> **Important:** This is a time-based calculation, so it's a **best guess** solution!<br>Also, your true frame rate will be at the mercy of your `draw` callback. <br>You should aim for lightweight operations that complete within `1ms`.


### rafps.play()
Returns: `void`

Begin playback.<br>
Your `draw` function will begin invocations, receiving a new `frame` (number) parameter. See [`draw`](#draw) for info.

### rafps.pause()
Returns: `void`

Pause playback.


## License

MIT © [Luke Edwards](https://lukeed.com)
