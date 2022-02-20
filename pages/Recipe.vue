<template>
    <div class="container">
        <Heading text="Cardápio" />
        <div class="recipe-loading" v-if="isLoading">Carregando...</div>
        <Row v-for="product in recipeData" :key="product.id" @edit-action="editProduct(product.id)" v-else>
            <template #number>
                <p class="recipe-row__number">01</p>
            </template>
            <template #left-top>
                <p class="recipe-row__title">{{ product.title }}</p>
            </template>
            <template #left-bottom>
                <p class="recipe-row__description">{{ product.description }}</p>
            </template>
            <template #right-text>
                <p class="recipe-row__price">{{ product.price }}</p>
            </template>
        </Row>
        <div class="recipe-button__content">
            <Button label="Novo Item" @button-action="registerProduct" data-testid="new-item-test" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';

import Row from '../components/Row.vue';
import Button from '../components/Button.vue';
import Heading from '../components/Heading.vue';

@Component({
    components: {
        Heading,
        Row,
        Button
    }
})
export default class Recipe extends Vue {
    private isError = false;
    private isLoading = true;
    private recipeData: any = []

    private async fetchRecipe() {
        this.isLoading = true;
        try{
            const result = await axios.get('http://localhost:8000/products');
            this.recipeData = result.data; 
        } catch {
            this.isError = true;
        } finally {
            this.isLoading = false;
        }
    }

    private created() {
        this.fetchRecipe();
    }

    public registerProduct() {
        this.$router.push({ path: '/register' });
    }

    public editProduct(id: string) {
       this.$router.push({ path: '/edit', query: { productId: id } }); 
    }
}
</script>

<style scoped lang="scss">
    .recipe {
        &-loading {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &-row {
            &__number {
                color: #CCAE52;
                font-size: 53px;
            }
            &__title {
                color: #5B2D1F;
                font-size: 30px;
            }
            &__description {
                color: #CCAE52;
                font-size: 15px;
            }
            &__price {
                color: #A83A2C;
                font-size: 53px;
            }    
        }
        &-button {
            &__content {
                display: flex;
                justify-content: center;
                padding-top: 78px;
            }
        }
    }
</style>
