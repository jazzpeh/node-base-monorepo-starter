import { sum } from '../src';

describe('sum', () => {
	it('should sum up all the numbers', () => {
		const value = sum(1, 2, 3);
		expect(value).toEqual(6);
	});
});
