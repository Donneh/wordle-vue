<script setup lang="ts">
import GameTile from "./GameTile.vue";

const props = defineProps({
    wordLength: Number
});

</script>

<template>
    <GameTile :wordLength="props.wordLength"/>
</template>