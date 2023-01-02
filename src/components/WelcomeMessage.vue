<template>
	<div>
		<h1>{{ welcomeMessage }}</h1>

		<p v-if="shouldShowErrorMessage">
			{{ errorMessage }}
		</p>

		<input v-model="name" type="text" placeholder="Insira o seu nome" />
	</div>
</template>

<script setup>
	import { ref } from '@vue/reactivity';
	import { computed } from '@vue/runtime-core';

	const welcomeMessage = ref('Hello world, welcome to my app');

	const errorMessage = ref('Please, input your name to init');

	const name = ref('');

	const shouldShowErrorMessage = computed(() => !name.value.trim().length);
</script>
