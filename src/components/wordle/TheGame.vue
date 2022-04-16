<script setup lang="ts">
import GameRow from "./GameRow.vue";
import {Game} from "../../domain/Game";
import {reactive} from "vue";
import GameMessage from './GameMessage.vue';
import VirtualKeyboard from './VirtualKeyboard.vue';


const game = reactive(new Game())

</script>

<template>
    <div class="min-h-screen h-full flex flex-col items-center justify-around py-4">

        <section class='flex flex-col '>

            <GameMessage :message="game.message"/>
            <div id="game" class="grid gap-y-2 uppercase" @keydown="game.keyInput($event.key)" tabindex="0">
                <GameRow v-for="row in game.board" :row="row" />
            </div>
        </section>

        <VirtualKeyboard :game='game'/>
    </div>

</template>