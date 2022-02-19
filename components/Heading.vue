<template>
    <h1 class="heading">{{ text }}</h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Heading extends Vue {
    @Prop({ type: String, required: true })
    private text!: string;
}
</script>

<style scoped>
.heading {
    font-size: 80px;
    font-weight: 400;
    text-align: center;
    padding-top: 57px;
}
</style>