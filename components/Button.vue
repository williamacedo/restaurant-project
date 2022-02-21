<template>
    <button 
        :style="colorsComputed" 
        class="button" 
        @click="$emit('button-action')" 
        data-testid="button-test"
    >
        {{ label }}
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
    @Prop({ type: String, required: true })
    public label!: string;

    @Prop({ type: String, default: '#A83A2C' })
    private bgColor!: string;

    @Prop({ type: String, default: '#FFFFFF' })
    private textColor!: string;    

    private get colorsComputed() {
        return { backgroundColor: this.bgColor, color: this.textColor }
    }
}
</script>

<style lang="scss">
    .button {
        width: 200px;
        height: 100px;
        border-radius: 20px;
        font-size: 30px;
    }
</style>