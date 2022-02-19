<template>
  <div>
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

<style lang="scss">
  .container {
    background-color: #FBF6EA;
    position: relative;
    width: 100%;
    height: 100vh;
  } 

  body {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  button {
    border: none;
    cursor: pointer;
    background: none;
  }
</style>
