<template>
    <div class="container">
        <div class="recipe-heading__content">
            <Heading text="Cardápio" />
        </div>
        <Row v-for="product in recipeData" :key="product.id">
            <template #number>
                <p class="recipe-row__number">{{ product.number }}</p>
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
            <Button label="Novo Item" @button-action="registerProduct" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

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
    private recipeData = [
        {
            id: 1,
            number: '01',
            title: 'Batata Frita',
            description: '300g de batata frita com 50g de queijo cheddar.',
            price: 5.50
        },
        {
            id: 2,
            number: '02',
            title: 'Hamburger',
            description: 'Pão, hamburger, queijo, tomate e alface.',
            price: 10.00
        },
    ]

    public registerProduct() {
        this.$router.push({ path: '/register' });
    }
}
</script>

<style scoped lang="scss">
    .recipe {
        &-heading {
            &__content {
                display: flex;
                justify-content: center;
                padding-top: 57px;
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
            }
        }
    }
</style>
