import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { factory } from '../../utils';

import PurchaseButton from '../PurchaseButton.vue/';

describe('PurchaseButton', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	const wrapper = factory(PurchaseButton, {
		props: {
			businessHours: [9, 17],
			businessDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
		}
	});

	it('allows purchases within business hours', async () => {
		const date = new Date(2001, 1, 1, 13);

		vi.setSystemTime(date);

		const mockPurchase = vi.fn(wrapper.vm.$.exposed.purchase);

		const result = mockPurchase();

		expect(mockPurchase).toHaveBeenCalledTimes(1);
		expect(result).toStrictEqual({ message: 'success' });
	});

	it('block purchases without business hours', async () => {
		const date = new Date(2001, 1, 1, 8);

		vi.setSystemTime(date);

		const mockPurchase = vi.fn(wrapper.vm.$.exposed.purchase);

		const result = mockPurchase();

		expect(mockPurchase).toHaveBeenCalledTimes(1);
		expect(result).toStrictEqual({ message: 'Out of business hour' });
	});
});
