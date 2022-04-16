<script setup lang="ts">
import GameRow from "./GameRow.vue";
import {Game} from "../../domain/Game";
import { onMounted, reactive } from 'vue'
import GameMessage from './GameMessage.vue';
import VirtualKeyboard from './VirtualKeyboard.vue';


const game = reactive(new Game())

onMounted(() =>{
    window.addEventListener('keydown', (event) => {
        game.keyInput(event.key);
    });
})

</script>

<template>
    <div class="min-h-screen h-full flex flex-col items-center justify-around py-4">

        <GameMessage :message="game.message"/>

        <div id="game" class="grid gap-y-2 uppercase" @keydown='' tabindex="0">
            <GameRow v-for="row in game.board" :row="row" />
        </div>

        <VirtualKeyboard :game='game'/>
    </div>

</template>