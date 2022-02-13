<template>
  <div class="container">
    <Recipe />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Recipe from './Recipe.vue';

@Component({
    components: {
      Recipe
    }
})
export default class IndexPage extends Vue {

}
</script>

<style scoped lang="scss">
  .container {
    background-color: #FBF6EA;
    position: relative;
    height: 100vh;
    width: 100vw;
  } 
</style>
