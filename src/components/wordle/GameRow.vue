<script setup lang="ts">
import GameTile from "./GameTile.vue";

const props = defineProps({
    row: Array
});

</script>

<template>
    <div class="flex gap-x-2">
        <GameTile v-for="tile in row" :tile="tile"/>
    </div>
</template>