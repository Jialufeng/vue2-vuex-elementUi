<template lang="html">
  <div class="transfer-action">
    <button class="action-btn right btn btn-primary btn-icon" :disabled="leftDisabled" @click="moveToRight">{{actionLabel[0]}}</button>
    <button class="action-btn btn btn-primary btn-icon left" :disabled="rightDisabled" @click="moveToLeft">{{actionLabel[1]}}</button>
  </div>
</template>

<script>
  export default {
    name: 'transfer-action',
    props: {
      leftDisabled: {
        type: Boolean,
        default: true
      },
      rightDisabled: {
        type: Boolean,
        default: true
      },
      actionLabel: Array
    },
    methods: {
      moveToLeft () {
        this.$parent.$emit('moveToLeft')
      },
      moveToRight () {
        this.$parent.$emit('moveToRight')
      }
    }
  }
</script>

<style lang="css" scoped>
  .transfer-action{
    display: inline-block;
    overflow: hidden;
    margin: 0 16px;
    vertical-align: middle;
    min-width: 50px;
  }
  .transfer-action .action-btn{
    display: block;
    text-align: center;
    min-width: 100%;
    margin-bottom: 12px;
    cursor: pointer;
  }
  .transfer-action .action-btn[disabled]{
    cursor: not-allowed;
    color: #c3cbd6;
  }
</style>