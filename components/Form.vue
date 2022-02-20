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
            <Button label="Salvar" class="form-footer__button" @button-action="saveData" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';
import Button from '../components/Button.vue';

@Component({
    components: {
        Button
    }
})
export default class Form extends Vue {
    @Emit('save-data')
    public saveData() {
        return;
    }
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