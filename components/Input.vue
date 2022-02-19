<template>
    <div class="input">
        <p class="input-label">{{ inputLabel }}</p>
        <input v-model="inputValue" class="input-value" data-testid="input-test" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
    @Prop({ type: String, required: true })
    private inputLabel!: string;

    @Prop({ type: String, required: true })
    private inputValue!: string;
}
</script>

<style scoped lang="scss">
    .input {
        &-label {
            font-size: 30px;
            line-height: 35px;
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