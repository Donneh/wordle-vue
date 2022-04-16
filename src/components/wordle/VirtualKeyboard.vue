<script setup>
import { Game } from '../../domain/Game'
import { onMounted } from 'vue'

const props = defineProps({
    game: Game
})

</script>

<template>
    <section class='flex flex-col items-center gap-y-1 w-screen max-w-full touch-manipulation touch-pinch-zoom'>
        <div v-for='row in game.virtualKeyboard.layout' class='gap-x-1 flex'>
            <button v-for='key in row'
                    @click='game.keyInput(key)'
                    class='p-2 sm:p-6  rounded hover:bg-blend-darken bg-indigo-200'
                    :class='game.matchingTileForKey(key)?.feedback'>
                {{ key }}
            </button>
        </div>
    </section>
</template>

<style scoped>
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