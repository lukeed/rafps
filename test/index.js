import test from 'tape';
import rafiki from '../src';

// ---
// @see https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

var lastTime = 0;
global.requestAnimationFrame = function (callback) {
	var currTime = Date.now();
	var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	var id = setTimeout(function () {
		callback(currTime + timeToCall);
	}, timeToCall);
	lastTime = currTime + timeToCall;
	return id;
};

global.cancelAnimationFrame = function(id) {
	clearTimeout(id);
};

// ---

test('exports', t => {
	t.is(typeof rafiki, 'function', 'exports a function');
	t.end();
});

test('instance', t => {
	let ctx = rafiki(console.log);
	t.is(typeof ctx.play, 'function');
	t.is(typeof ctx.pause, 'function');
	t.end();
});

test('usage', t => {
	t.plan(4);

	let num = 0;
	let ctx = rafiki(x => {
		if (num++ == 0) t.is(x, 0, 'starts w/ 0');
		if (num > 9) {
			t.is(num, 10, 'ends w/ 10');
			t.is(ctx.pause(), undefined, '~> pause returns nothing');
		}
	});

	t.is(ctx.play(), undefined, '~> play returns nothing');
});
