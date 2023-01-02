<script setup>
import View from './components/View.vue'
import ButtonCounter from './components/ButtonCounter.vue'
import PurchaseButton from './components/PurchaseButton.vue'
import WelcomeMessage from'./components/WelcomeMessage.vue'
</script>

<template>
  <div>
    <PurchaseButton :business-hours="[9, 17]"  />
  </div>
</template>
