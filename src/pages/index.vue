<template>
  <el-container class="home">
    <el-header class="home-header">
      <Header />
    </el-header>
    <el-main class="home-main">
      <div class="home-main-left">
        <Account />
      </div>
      <div class="home-main-right"></div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import fileHelper from "@/scripts/fileHelper";
import Header from "@/components/Header.vue";
import Account from "@/components/Account.vue";
@Component({
  components: { Header, Account }
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
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  &-header {
    padding: 0;
    margin: 0;
    height: auto !important;
  }
  &-main {
    display: flex;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 52px;
    bottom: 0;
    &-left {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      border-right: 1px solid #ebeef5;
    }
    &-right {
      flex: 2;
    }
  }
}
</style>
