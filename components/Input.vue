<template>
    <div class="input">
        <p class="input-label">{{ label }}</p>
        <input 
            :value="value" 
            @input="handleInput" 
            class="input-value" 
            data-testid="input-test"
        />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
    @Prop({ type: String, required: true })
    private label!: string;

    @Prop({ type: String, required: true })
    private value!: string;  

    private handleInput(event: Event) {
        const input = event.target as HTMLInputElement;
        this.$emit('input', input.value);
    }
}
</script>

<style scoped lang="scss">
    .input {
        &-label {
            font-size: 30px;
        }
        &-value {
            width: 560px;
            height: 95px;
            border: none;
            border-radius: 10px;
            background-color: '#FFFFFF';
            font-size: 30px;
        }
    }
</style>