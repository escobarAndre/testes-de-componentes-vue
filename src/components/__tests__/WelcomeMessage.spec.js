import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import WelcomeMessage from '../WelcomeMessage.vue';

const factory = (options = {}) => {
	return mount(WelcomeMessage, options);
};

describe('WelcomeMessage', async () => {
	it('show welcome message correctly', async () => {
		const wrapper = factory();

		expect(wrapper.text()).toContain('Hello world, welcome to my app');
	});

	it('show error message if input value is empty', () => {
		const wrapper = factory();

		const input = wrapper.find('input');

		expect(input.element.value).toBeFalsy();
		expect(wrapper.text()).toContain('Please, input your name to init');
	});

	it('dont show error message if input value is not empty', () => {
		const wrapper = factory();

		const input = wrapper.find('input');

		input.setValue('André Escobar');

		expect(input.element.value).toBe('André Escobar');
		// expect(wrapper.text()).not.toContain('Please, input your name to init');
	});
});
