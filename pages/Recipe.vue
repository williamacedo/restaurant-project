<template>
    <div class="container">
        <Heading text="Cardápio" />
        <div class="recipe-loading" v-if="isLoading">Carregando...</div>
        <div v-else>
            <div class="recipe-select__content">
                <select @change="handleOrder">
                    <option value="number">Númerico</option>
                    <option value="letter">Alfabético</option>
                </select>
            </div>
            <Row 
                v-for="product in recipeData" 
                :key="product.id" 
                @edit-action="editProduct(product.id)" 
                @remove-action="removeProduct(product.id)"
            >
                <template #number>
                    <p class="recipe-row__number">{{ formartNumber(product.id) }}</p>
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
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';

import Row from '../components/Row.vue';
import Button from '../components/Button.vue';
import Heading from '../components/Heading.vue';
import { Products } from '../types/product';

@Component({
    components: {
        Heading,
        Row,
        Button
    }
})
export default class Recipe extends Vue {
    public isError = false;
    public isLoading = true;
    public recipeData: Products[] = []

    public sortNumbers(data: Products[]) {
        const sortedData = data.sort((a, b) => a.id - b.id);
        this.recipeData = sortedData;
    }

    public sortLetters(data: Products[]) {
        const sortedData = data.sort((a, b) => a.title.normalize().localeCompare(b.title.normalize()));
        this.recipeData = sortedData;
    }

    private async fetchRecipe() {
        this.isLoading = true;
        try{
            const result = await axios.get('http://localhost:8000/products'); 
            this.sortNumbers(result.data); 
        } catch {
            this.isError = true;
        } finally {
            this.isLoading = false;
        }
    }

    public created() {
        this.fetchRecipe();
    }

    public registerProduct() {
        this.$router.push({ path: '/register' });
    }

    public editProduct(id: string) {
       this.$router.push({ path: '/edit', query: { productId: id } }); 
    }

    public async removeProduct(id: string) {
        try{
            await axios.delete(`http://localhost:8000/products/${id}`);
            this.fetchRecipe();
        } catch {
            this.isError = true;
        }  
    }

    public formartNumber(productId: number) {
        return productId < 10 ? '0' + productId : productId;
    }

    public handleOrder(event: Event) {
        const target = event.target as HTMLInputElement;
        if(target.value === 'number') {
            this.sortNumbers(this.recipeData);
        } else {
            this.sortLetters(this.recipeData);
        }
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
        &-select {
            &__content {
                display: flex;
                justify-content: flex-end;
                margin-bottom: 10px;
                margin-right: 10px;
            }
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
                padding-bottom: 153px;
            }
        }
    }
</style>
