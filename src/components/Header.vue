<template>
  <div class="hd">
    <div class="hd-left">
      <img class="hd-left__logo" src="@/assets/logo.png" alt />
      <strong class="hd-left__title">KKWALLET</strong>
    </div>
    <div class="hd-right">
      <div class="hd-right-net">
        <span class="hd-right-net__circle"></span>
        <span class="hd-right-net__name">MainNet</span>
        <i class="el-icon-arrow-down"></i>
      </div>
      <img class="hd-right__acc" src="@/assets/logo.png" alt />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.hd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  padding: 5px 10px;

  &-left {
    display: flex;
    align-items: center;
    &__title {
      font-size: 20px;
      margin-left: 3px;
    }
    &__logo {
      width: 40px;
      height: 40px;
    }
  }

  &-right {
    display: flex;
    align-items: center;
    &__acc {
      margin-left: 10px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 2px;
      box-sizing: border-box;
      border: 2px solid #409eff;
      cursor: pointer;
    }
    &-net {
      display: flex;
      align-items: center;
      border: 2px solid #dcdfe6;
      border-radius: 20px;
      padding: 3px 10px;
      cursor: pointer;
      &__name {
        margin-left: 10px;
        font-size: 12px;
      }
      &__circle {
        background-color: palevioletred;
        border-radius: 50%;
        width: 12px;
        height: 12px;
      }
      & .el-icon-arrow-down {
        margin-left: 10px;
      }
    }
  }
}
</style>