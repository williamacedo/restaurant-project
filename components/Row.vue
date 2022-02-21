<template>
    <div class="row">
        <div class="row-item">
            <div class="row-item__number">
                <slot name="number" />
            </div>
            <div class="row-item__left">
                <div class="row-item__left--top">
                    <slot name="left-top" />
                </div>
                <div class="row-item__left--bottom">
                    <slot name="left-bottom" />
                </div>  
            </div>      
        </div>
        <div class="row-item">
            <div class="row-item__right">
                <div class="row-item__right--text">
                    <slot name="right-text" />
                </div>
                <div class="row-item__right--icon">
                    <button @click="goToEditPage" data-testid="edit-test">
                        <EditIcon />
                    </button>
                </div>
                <div class="row-item__right--icon">
                    <button @click="removeAction" data-testid="remove-test">
                        <RemoveIcon />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';
import { RemoveIcon, EditIcon } from '../assets/icons';

@Component({
    components: {
        RemoveIcon,
        EditIcon
    }
})
export default class Row extends Vue {
    @Emit('edit-action')
    public goToEditPage(productId: string) {
        return productId;
    }

    @Emit('remove-action')
    public removeAction(productId: string) {
        return productId;
    }
}
</script>

<style scoped lang="scss">
    .row {
        display: flex;
        margin: 17px 45px 14px 15px;
        justify-content: space-between;
        border-bottom: 2px dashed #A83A2C;
        &-item {
            display: flex;
            &__number {
                margin-right: 10px;
            }
            &__left {
                display: flex;
                flex-direction: column;
            }
            &__right {
                display: flex;
                align-items: center;
                &--icon {
                    width: 25px;
                    height: 25px;
                    margin-left: 22px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
