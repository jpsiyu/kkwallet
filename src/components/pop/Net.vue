<template>
  <div class="net" v-show="visible">
    <div class="net-mask" @click="hide"></div>
    <h3>Networks</h3>
    <div class="net-main">
      <div
        class="net-main-item"
        v-for="(item, index) in nets"
        :key="index"
        @click="switchNet(item)"
      >
        <i class="el-icon-check" :class="{'net-main-item__hide': item.netId !== currentNet.netId}"></i>
        <span :style="'background:'+item.color" class="net-main-item__circle"></span>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import netCfg from "@/scripts/network/netCfg";
import { Net } from "@/scripts/network/netStruct";
@Component({})
export default class NetComp extends Vue {
  private visible: boolean = false;
  private nets: Net[] = [];

  get currentNet(): Net {
    return this.$store.state.currentNet;
  }

  mounted(): void {
    this.nets = netCfg.available;
  }

  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    this.visible = false;
  }

  public switchNet(item: Net): void {
    this.$store.commit("setNet", item);
    this.hide();
  }
}
</script>

<style lang="postcss" scoped>
.net {
  background: rgba(0, 0, 0, 0.7);
  min-width: 250px;
  min-height: 200px;
  border-radius: 5px;
  color: #fff;
  position: relative;
  overflow: hidden;
  &-mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
  }
  &-main {
    border-top: 0.1px solid #ebeef5;
    &-item {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px 5px;
      &:hover {
        background: rgba(0, 0, 0, 0.3);
      }

      &__circle {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 0 10px;
      }

      &__hide {
        visibility: hidden;
      }
    }
  }
}
</style>