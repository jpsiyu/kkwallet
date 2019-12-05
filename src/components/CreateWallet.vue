<template>
  <div class="cw">
    <template v-if="isEmpty">
      <div class="cw-empty">
        <strong @click="createWallet" class="cw-textBtn cw-empty-create">初始化助记词</strong>
      </div>
    </template>
    <template v-else-if="isCreated">
      <el-row class="cw-row">
        <el-col class="cw-col" :span="8" v-for="(item, index) in mnemonic" :key="index">
          <span class="cw-col-item">{{ item }}</span>
        </el-col>
      </el-row>
      <span class="cw-textBtn" @click="writed">确定已抄下助记词!</span>
    </template>
    <template v-else-if="isNeedRecovert">
      <el-row class="cw-row">
        <el-col class="cw-col" :span="8" v-for="n in 24" :key="n">
          <span class="cw-col-item" :readonly="true">{{recover[n-1]}}</span>
        </el-col>
      </el-row>
      <el-row class="cw-row">
        <span
          v-for="(item, index) in shuffleArray"
          :key="index"
          class="cw-word"
          @click="chooseWord(item)"
        >{{item}}</span>
      </el-row>
      <el-row>
        <el-button @click="matchBack">回退</el-button>
        <el-button type="primary" @click="match">匹配</el-button>
        <el-button type="warning" @click="forceMatch">强制匹配</el-button>
      </el-row>
    </template>
    <template v-else-if="isNeedEncrypt">
      <el-form :inline="true" :model="formData">
        <el-form-item label="密码" prop="passwd">
          <el-input v-model="formData.passwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="encrypt">确定</el-button>
        </el-form-item>
      </el-form>
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
  private recover: string[];
  private shuffleArray: Array<string>;
  private formData: { passwd: string };

  constructor() {
    super();
    this.mnemonic = [];
    this.walletState = WalletState.Empty;
    this.recover = [];
    this.shuffleArray = [];
    this.formData = { passwd: "" };
  }

  get isEmpty(): boolean {
    return this.walletState === WalletState.Empty;
  }

  get isCreated(): boolean {
    return this.walletState === WalletState.Created;
  }

  get isNeedRecovert(): boolean {
    return this.walletState === WalletState.NeedRecovert;
  }

  get isNeedEncrypt(): boolean {
    return this.walletState === WalletState.NeedEncrypt;
  }

  get isStored(): boolean {
    return this.walletState === WalletState.Stored;
  }

  createWallet(): void {
    const str: string = bipHelper.random();
    this.mnemonic = str.split(" ");
    this.walletState = WalletState.Created;
  }

  shuffle<T>(array: Array<T>): void {
    for (let i = array.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = array[randomIndex];

      array[randomIndex] = array[i];
      array[i] = itemAtIndex;
    }
  }

  writed(): void {
    this.shuffleArray = Object.assign([], this.mnemonic);
    this.shuffle(this.shuffleArray);
    this.walletState = WalletState.NeedRecovert;
  }

  match(): void {
    let matched: boolean = true;
    for (let i: number = 0; i < this.mnemonic.length; i++) {
      if (this.mnemonic[i] !== this.recover[i]) {
        matched = false;
        break;
      }
    }
    if (!matched) {
      this.$message({ message: "助记词不匹配", type: "error" });
      return;
    }

    this.walletState = WalletState.NeedEncrypt;
  }

  chooseWord(word: string): void {
    const index: number = this.shuffleArray.findIndex((e: string) => {
      return e === word;
    });
    if (index !== -1) {
      this.shuffleArray.splice(index, 1);
    }
    this.recover.push(word);
  }

  matchBack(): void {
    this.recover.pop();
  }

  forceMatch(): void {
    this.recover = Object.assign([], this.mnemonic);
  }

  encrypt(): void {}
}
</script>

<style lang="postcss" scoped>
.cw {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #303133;
  position: relative;

  &-empty {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-row {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &-col {
    margin: 5px 0;
    &-item {
      display: inline-block;
      border: 1px solid #dcdfe6;
      width: 80%;
      padding: 10px 0;
      height: 44px;
      box-sizing: border-box;
    }
  }
  &-textBtn {
    text-decoration: underline;
    cursor: pointer;
  }
  &-word {
    border: 1px solid #dcdfe6;
    padding: 5px 10px;
    margin: 10px;
    cursor: pointer;
  }
}
</style>
