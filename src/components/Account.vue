<template>
  <div class="acc">
    <img class="acc-img" src="@/assets/logo.png" alt />
    <el-tooltip class="item" effect="dark" content="Copy to clipboard" placement="bottom">
      <div class="acc-addr">
        <span>{{currentAcc.address | hideMid}}</span>
        <i class="acc-addr__icon el-icon-document"></i>
      </div>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Net } from "@/scripts/network/netStruct";

@Component({
  filters: {
    hideMid(val: string): string {
      if (!val) return "";
      const len: number = val.length;
      if (len < 10) return val;
      const modify: string =
        "0x" + val.substring(0, 4) + "..." + val.substring(len - 4);
      return modify;
    }
  }
})
export default class Account extends Vue {
  get currentAcc(): string {
    return this.$store.state.currentAcc;
  }
}
</script>

<style lang="postcss" scoped>
.acc {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #dcdfe6;
  }
  &-addr {
    margin-top: 5px;
    background: #dcdfe6;
    padding: 0 10px;
    cursor: pointer;
    border-radius: 5px;
    &__icon {
      margin-left: 5px;
    }
  }
}
</style>