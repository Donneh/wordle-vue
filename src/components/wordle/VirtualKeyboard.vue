<script setup>
import { Keyboard } from '../../domain/Keyboard'

const props = defineProps({
    keyboard: Keyboard,
})

</script>

<template>
    <section>
        <div v-for='row in keyboard.layout' class='grid grid-cols-10 gap-x-1'>
            <div v-for='key in row' class='flex items-center justify-center rounded-lg mx-auto m-1 h-16 w-16 bg-blue-900'>
                {{ key }}
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>