<template>
  <div class="cw">
    <template v-if="isEmpty">
      <strong @click="createWallet" class="cw-textBtn cw-create">初始化助记词</strong>
    </template>
    <template v-else-if="isCreated">
      <el-row class="cw-row">
        <el-col class="cw-col" :span="8" v-for="(item, index) in mnemonic" :key="index">
          <span class="cw-col-item">{{ item }}</span>
        </el-col>
      </el-row>
      <span class="cw-textBtn">确定已抄下助记词!</span>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import bipHelper from "@/scripts/bipHelper";
import { WalletState } from "@/scripts/walletStruct";
@Component({})
export default class CreateWallet extends Vue {
  private mnemonic: string[];
  private walletState: WalletState;

  constructor() {
    super();
    this.mnemonic = [];
    this.walletState = WalletState.Empty;
  }

  get isEmpty(): boolean {
    return this.walletState === WalletState.Empty;
  }

  get isCreated(): boolean {
    return this.walletState === WalletState.Created;
  }

  get isEncrypted(): boolean {
    return this.walletState === WalletState.Encrypted;
  }

  get isStored(): boolean {
    return this.walletState === WalletState.Stored;
  }

  createWallet(): void {
    const str = bipHelper.random();
    this.mnemonic = str.split(" ");
    this.walletState = WalletState.Created;
  }
}
</script>

<style lang="postcss" scoped>
.cw {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #303133;

  &-create {
    margin-top: 100px;
  }
  &-row {
    width: 80%;
  }
  &-col {
    margin: 5px 0;
    &-item {
      display: inline-block;
      border: 1px solid #dcdfe6;
      width: 80%;
      padding: 10px 0;
    }
  }
  &-textBtn {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
