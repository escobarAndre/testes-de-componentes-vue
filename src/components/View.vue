<template>
	<component
		:is="element"
		:aria-label="ariaLabel"
		:disabled="isDisabled"
	>
        <slot></slot>
    </component>
</template>

<script setup>
    defineProps({
        element: String,
        ariaLabel: String,
        isDisabled: Boolean 
    })
</script>

<style lang="scss" scoped></style>
