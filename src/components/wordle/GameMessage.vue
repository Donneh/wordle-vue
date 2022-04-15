<script setup lang="ts">

const props = defineProps({
    message: String
});

</script>

<template>
    <div v-if="message" class="w-full bg-indigo-900 text-indigo-200 py-4 rounded text-center mb-4 border border-indigo-700 shadow shadow-indigo-800">
        <p>{{ message }}</p>
    </div>
</template>