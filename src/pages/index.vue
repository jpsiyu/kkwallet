<template>
  <div class="home">
    <strong>home</strong>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({})
export default class Home extends Vue {
  mounted(): void {
    this.$router.push({ path: "/wallet/create" });
  }
}
</script>
