<template>
	<button @click="purchase">Comprar</button>
</template>

<script setup>
	import { weekDays } from '../utils/enums';

	const props = defineProps({
		businessHours: {
			type: Array,
			required: true
		},
		businessDays: {
			type: Array,
			default: () => []
		}
	});

	function purchase() {
		const currentDate = new Date();
		const currentHour = currentDate.getHours();
		const currentDay = weekDays[currentDate.getDay()];

		const [open, close] = props.businessHours;

		const openedDays = props.businessDays;

        console.log('ALO')

		if (
			currentHour > open &&
			currentHour < close &&
			openedDays.includes(currentDay)
		) {
			return { message: 'success' };
		}

		return { message: 'Out of business hour' };
	}

    defineExpose({ purchase })
</script>
