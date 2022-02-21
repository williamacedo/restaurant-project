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
