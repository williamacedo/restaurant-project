<template>
    <div class="container">
        <Heading text="Cadastrar Item" />
        <div class="register">
            <div class="register-form">
                <div class="register-form__item">
                    <Input inputLabel="Titulo" :inputValue="productTitle" class="register-form__item--input" />
                    <Input inputLabel="Descrição" :inputValue="productTitle" class="register-form__item--input" />
                </div>
                <Input inputLabel="Valor" :inputValue="productTitle" />
            </div>
            <div class="register-footer">
                <Button 
                    bgColor="#FFF" 
                    textColor="#A83A2C" 
                    label="Cancelar" 
                    class="register-footer__button" 
                />
                <Button label="Salvar" class="register-footer__button" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Heading from '../components/Heading.vue';
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

@Component({
    components: {
        Heading,
        Input,
        Button
    }
})
export default class RegisterProduct extends Vue {
    private productTitle!: string;
    private productDescription!: string;
    private productPrice!: number;
}
</script>

<style scoped lang="scss">
    .register {
        padding: 48px 100px 0 140px;
        &-form {
            display: flex;
            flex-direction: column;
            &__item {
                display: flex;
                margin-bottom: 20px;
                &--input {
                    margin-right: 80px;
                }
            }
        }
        &-footer {
            display: flex;
            justify-content: flex-end;
            padding-top: 78px;
            &__button:first-child {
                margin-right: 16px;
            }
        }
    }
</style>