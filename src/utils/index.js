import { mount } from '@vue/test-utils';

export const factory = (component, options = {}) => {
	return mount(component, options);
};
