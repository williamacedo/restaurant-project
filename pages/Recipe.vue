<template>
    <div>
        <Row>
            <template #number>
                <p class="recipe-row__number">01</p>
            </template>
            <template #left-top>
                <p class="recipe-row__title">Batata Frita</p>
            </template>
            <template #left-bottom>
                <p class="recipe-row__description">Lorem Ipsum</p>
            </template>
            <template #right-text>
                <p class="recipe-row__price">5.50</p>
            </template>
        </Row>
        <Button label="Teste" />
        <Input inputLabel="Teste" :inputValue="value" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Row from '../components/Row.vue';
import Button from '../components/Button.vue';
import Input from '../components/Input.vue';

@Component({
    components: {
        Row,
        Button,
        Input
    }
})
export default class Recipe extends Vue {
    private value = '';
}
</script>

<style scoped lang="scss">
    .recipe-row__text {
        color: #CCAE52;
    }
</style>
