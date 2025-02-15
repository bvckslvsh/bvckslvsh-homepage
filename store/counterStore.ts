import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter-store', () => {
    const counter = ref<number>(0);
    return {
        counter
    };
});
