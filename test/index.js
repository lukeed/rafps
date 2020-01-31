import test from 'tape';
import rafiki from '../src';

test('exports', t => {
	t.is(typeof rafiki, 'function', 'exports a function');
	t.end();
});
