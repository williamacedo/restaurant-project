<template>
    <div class="input">
        <p class="input-label">{{ label }}</p>
        <input 
            :value="value" 
            @input="handleInput" 
            class="input-value" 
            data-testid="input-test"
            :disabled="disabled"
        />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
    @Prop({ type: String, required: true })
    public label!: string;

    @Prop({ type: String, default: '' })
    public value!: string; 
    
    @Prop({ type: Boolean, default: false })
    public disabled!: boolean; 

    public handleInput(event: Event) {
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
            background-color: #FFFFFF;
            font-size: 30px;
            &:disabled {
                background-color: #F3F3F4;
            }
        }
    }
</style>