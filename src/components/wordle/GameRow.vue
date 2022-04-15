<script setup lang="ts">
import GameTile from "./GameTile.vue";
import { PropType } from 'vue'
import { Tile } from '../../domain/Tile'

const props = defineProps({
    row: Array as PropType<Array<Tile>>,
});

</script>

<template>
    <div class="flex gap-x-2 items-center">
        <GameTile v-for="tile in row" :tile="tile"/>
    </div>
</template>