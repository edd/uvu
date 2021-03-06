import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import * as uvu from '../src/index';

const QUEUE = suite('QUEUE');

QUEUE('should be an Array', () => {
	assert.instance(uvu.QUEUE, Array);
});

QUEUE.run();

// ---

const ste = suite('suite');

ste('should be a function', () => {
	assert.type(uvu.suite, 'function');
});

ste.run();

// ---

const test = suite('test');

test('should be a function', () => {
	assert.type(uvu.test, 'function');
});

test.run();

// ---

const exec = suite('exec');

exec('should be a function', () => {
	assert.type(uvu.exec, 'function');
});

exec.run();
