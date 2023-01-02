import { fireEvent, render, screen } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import ButtonCounter from '../ButtonCounter.vue';

describe('ButtonCounter', async() => {
	let initial = 5;

	render(ButtonCounter, { props: { initial: initial } });

    const counter = await screen.findByTestId('counter');

	it('render initial value correctly', async () => {
		expect(counter.innerHTML).toBe('5');
	});

	it('decrement button is decrementing correctly', async () => {
		const decrementButton = screen.getByTestId('decrement');

        const decrementTimes = Math.floor(Math.random() * (100 - 1) + 1)

        for (let i = 0; i < decrementTimes; i++) {
            await fireEvent.click(decrementButton);
        }

        const result = initial - decrementTimes

        initial = result

		expect(counter.innerHTML).toBe(result.toString());
	});

    it('increent button is incrementing correctly', async () => {
		const incrementButton = screen.getByTestId('increment');

        const incrementTimes = Math.floor(Math.random() * (100 - 1 + 1) + 1)

        for (let i = 0; i < incrementTimes; i++) {
            await fireEvent.click(incrementButton); 
        }

        const result = initial + incrementTimes

		expect(counter.innerHTML).toBe(result.toString());
	});
});
