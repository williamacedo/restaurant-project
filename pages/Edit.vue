<template>
    <div class="container">
        <Heading text="Editar Item" />
        <Form @save-data="updateData">
            <div class="edit-form__item">
                <Input label="ID" :value="computedProductId" class="edit-form__item--input" disabled />
                <Input label="Titulo" v-model="productTitle" class="edit-form__item--input" />
            </div>
            <div class="edit-form__item">
                <Input label="Descrição" v-model="productDescription" class="edit-form__item--input" />
                <Input label="Valor" v-model="productPrice" class="edit-form__item--input" />
            </div>
        </Form>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';
import Heading from '../components/Heading.vue';
import Form from '../components/Form.vue';
import Input from '../components/Input.vue';

@Component({
    components: {
        Heading,
        Form,
        Input
    }
})
export default class Edit extends Vue {
    public productId!: number;
    private productTitle: string = '';
    private productDescription: string = '';
    private productPrice: string = '';
    private isLoading: boolean = true;
    private isError: boolean = false;

    private async fetchProduct() {
        try{
            const result = await axios.get(`http://localhost:8000/products/${this.$route.query.productId}`); 
            const product = result.data;
            this.productTitle = product.title;
            this.productDescription = product.description;
            this.productPrice = product.price;
        } catch {
            this.isError = true;
        } finally {
            this.isLoading = false;
        }
    }

    public updateData() {
        axios.put(`http://localhost:8000/products/${this.$route.query.productId}`, {
            title: this.productTitle,
            description: this.productDescription,
            price: this.productPrice
        }).then(() => {
            this.$router.push('/');
        }).catch(error => {
            console.log(error);
        });
    }

    public created() {
        this.fetchProduct();
    }

    public get computedProductId() {
        return this.$route.query.productId.toString();
    }
}
</script>

<style lang="scss" scoped>
.edit {
    &-form {
        &__item {
            display: flex;
            margin-bottom: 20px;
            &--input:first-child {
                margin-right: 80px;
            }            
        }
    }
}
</style>