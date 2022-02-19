<template>
    <div class="container">
        <Heading text="Cadastrar Item" />
        <Form>
            <div class="register-form__item">
                <Input inputLabel="Titulo" :inputValue="productTitle" class="register-form__item--input" />
                <Input inputLabel="Descrição" :inputValue="productTitle" class="register-form__item--input" />
            </div>
            <Input inputLabel="Valor" :inputValue="productTitle" />
        </Form>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Heading from '../components/Heading.vue';
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import Form from '../components/Form.vue';

@Component({
    components: {
        Heading,
        Input,
        Button,
        Form
    }
})
export default class RegisterProduct extends Vue {
    private productTitle!: string;
    private productDescription!: string;
    private productPrice!: number;
}
</script>

<style scoped lang="scss">
    .register-form__item {
        display: flex;
        margin-bottom: 20px;
        &--input {
            margin-right: 80px;
        }
    }
</style>