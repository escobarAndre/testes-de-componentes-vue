<template>
	<div data-testid="buttonCounter">
		<p data-testid="counter" style="margin-bottom: 30px; font-size: 30px;">{{ counter }}</p>

		<div class="buttons">
			<button @click="decrement" data-testid="decrement">-</button>
            
			<button @click="increment" data-testid="increment">+</button>
		</div>
	</div>
</template>

<script setup>
	import { onBeforeMount, ref } from 'vue';

	const props = defineProps({
		initial: { type: Number, default: null }
	});

	onBeforeMount(() => {
		if (props.initial) counter.value = props.initial;
	});

	const counter = ref(0);

    function increment() {
        counter.value++
    }

    function decrement() {
        counter.value--
    }
</script>

<style scoped>
.buttons {
    display: flex;
    align-items: center;
    gap: 20px
}
</style>
