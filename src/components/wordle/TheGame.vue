<script setup lang="ts">

import GameRow from "./GameRow.vue";

let guesses = 5;
let wordLength = 5;
</script>

<template>
    <div id="game" class="grid bg-slate-400 rounded" :class="'grid-cols-' + [guesses]">
        <GameRow v-for="guess in guesses" :wordLength="wordLength"/>
    </div>
</template>