<script setup lang='ts'>
import { Tile } from '../../domain/Tile'

const props = defineProps({
    tile: {
        type: Tile,
        required: true
    }
})
</script>

<template>
    <div class='tile' :class='tile.feedback'>
        {{ tile.letter }}
    </div>
</template>

<style scoped>
.tile {
    @apply h-16 w-16 text-center hover:brightness-125 flex justify-center items-center bg-slate-400 rounded focus-visible:outline-none text-xl;
}

.absent {
    @apply bg-rose-400
}

.present {
    @apply bg-amber-400
}

.correct {
    @apply bg-emerald-400
}
</style>