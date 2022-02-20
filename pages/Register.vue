<template>
    <div class="container">
        <Heading text="Cadastrar Item" />
        <Form @save-data="saveProduct">
            <div class="register-form__item">
                <Input 
                    label="Titulo" 
                    v-model="productTitle" 
                    class="register-form__item--input" 
                    data-testid="title-test" 
                />
                <Input 
                    label="Descrição" 
                    v-model="productDescription" 
                    class="register-form__item--input" 
                    data-testid="description-test" 
                />
            </div>
            <Input label="Valor" v-model="productPrice" data-testid="price-test" />
        </Form>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Heading from '../components/Heading.vue';
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import Form from '../components/Form.vue';
import axios from 'axios';

@Component({
    components: {
        Heading,
        Input,
        Button,
        Form
    }
})
export default class RegisterProduct extends Vue {
    private productTitle: string = '';
    private productDescription: string = '';
    private productPrice: string = '';

    private saveProduct() {
        axios.post('http://localhost:8000/products', {
            title: this.productTitle,
            description: this.productDescription,
            price: this.productPrice
        }).then(() => {
            this.$router.push('/');
        }).catch(error => {
            console.log(error);
        });
    }
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