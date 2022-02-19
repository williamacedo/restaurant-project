<template>
    <div class="form">
        <div class="form-content">
            <slot />
        </div>
        <div class="form-footer">
            <Button 
                bgColor="#FFF" 
                textColor="#A83A2C" 
                label="Cancelar" 
                class="form-footer__button" 
            />
            <Button label="Salvar" class="form-footer__button" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Button from '../components/Button.vue';

@Component({
    components: {
        Button
    }
})
export default class Form extends Vue {

}
</script>

<style scoped lang="scss">
    .form {
        padding: 48px 100px 0 140px;
        &-content {
            display: flex;
            flex-direction: column;
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