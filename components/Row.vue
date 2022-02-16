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
                    <EditIcon />
                </div>
                <div class="row-item__right--icon">
                    <RemoveIcon />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import  RemoveIcon from '../assets/icons/remove.svg';
import  EditIcon from '../assets/icons/edit.svg';

@Component({
    components: {
        RemoveIcon,
        EditIcon
    }
})
export default class Row extends Vue {

}
</script>

<style scoped lang="scss">
    .row {
        display: flex;
        padding: 17px 45px 0 15px;
        justify-content: space-between;
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
                &--icon {
                    width: 25px;
                    height: 25px;
                    margin-left: 22px;
                }
            }
        }
    }
</style>
