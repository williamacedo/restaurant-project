<template>
    <div class="container">
        <Heading text="Editar Item" />
        <Form>
            <div class="edit-form__item">
                <Input inputLabel="ID" :inputValue="productId" class="edit-form__item--input" />
                <Input inputLabel="Titulo" :inputValue="productTitle" class="edit-form__item--input" />
            </div>
            <div class="edit-form__item">
                <Input inputLabel="Descrição" :inputValue="productDescription" class="edit-form__item--input" />
                <Input inputLabel="Valor" :inputValue="productPrice" class="edit-form__item--input" />
            </div>
        </Form>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Heading from '../components/Heading.vue';
import Form from '../components/Form.vue';

@Component({
    components: {
        Heading,
        Form
    }
})
export default class Edit extends Vue {
    private productId!: string;
    private productTitle!: string;
    private productDescription!: string;
    private productPrice!: number;

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