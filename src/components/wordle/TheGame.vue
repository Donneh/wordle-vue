<script setup lang="ts">
import GameRow from "./GameRow.vue";
import {Game} from "../../domain/Game";
import {reactive} from "vue";
import GameMessage from './GameMessage.vue';
import VirtualKeyboard from './VirtualKeyboard.vue';


const game = reactive(new Game())

</script>

<template>
    <h1>Test</h1>
    <div>
        <GameMessage :message="game.message"/>

        <div id="game" class="grid gap-y-2 uppercase mb-16" @keydown="game.keyInput($event)" tabindex="0">
            <GameRow v-for="row in game.board" :row="row" />
        </div>
    </div>

    <VirtualKeyboard :keyboard='game.virtualKeyboard'/>
</template>