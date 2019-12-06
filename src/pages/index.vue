<template>
  <el-container class="home">
    <el-header class="home-header">
      <Header />
    </el-header>
    <el-main>dene</el-main>
  </el-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import fileHelper from "@/scripts/fileHelper";
import Header from "@/components/Header.vue";
@Component({
  components: { Header }
})
export default class Home extends Vue {
  private keystores: any[];
  private current: any;

  constructor() {
    super();
    this.keystores = [];
  }

  created(): void {
    const keystores = fileHelper.getAllKeystore();
    if (keystores.length === 0) {
      this.$router.push({ path: "/wallet/create" });
      return;
    }

    this.current = keystores[0];
  }
}
</script>

<style lang="postcss" scoped>
.home {
  &-header {
    padding: 0;
  }
}
</style>
