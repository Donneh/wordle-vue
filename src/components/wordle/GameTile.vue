<script setup lang="ts">
import {Tile} from "../../domain/Tile";

const props = defineProps({
    tile: Tile
});
</script>

<template>
    <div class="tile" :class="tile.feedback">
        {{ tile.letter }}
    </div>
</template>

<style>
.tile {
    @apply h-16 w-16 text-center flex justify-center items-center bg-slate-400 rounded hover:bg-slate-500 focus-visible:outline-none text-xl;
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