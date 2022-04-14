<script setup lang="ts">
const props = defineProps({
    wordLength: Number
});
</script>

<template>
    <div v-for="tile in wordLength" class="flex items-center justify-center w-24 h-24">
        x
    </div>
</template>