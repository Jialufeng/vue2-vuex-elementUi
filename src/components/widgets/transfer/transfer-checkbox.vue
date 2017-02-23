<template lang="html">
  <label class="transfer-checkbox" :class="checkboxClass">
    <span class="checkbox-wrap" :class="wrapClass">
        <span class="checkbox-inner"></span>
        <input
            type="checkbox"
            class="checkbox-input"
            :disabled="disabled"
            :value="value"
            v-model="checked"
            @change="change">
    </span>
  </label>
</template>

<script>
  export default {
    name: 'transfer-checkbox',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: [String, Number, Boolean]
      },
      checked: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      wrapClass () {
        return {
          "checkbox-wrap-checked": this.checked,
          "checkbox-wrap-disabled": this.disabled
        }
      },
      checkboxClass () {
        return {
          "checkbox-checked": this.checked,
          "checkbox-disabled": this.disabled
        }
      }
    },
    methods: {
      change (e) {
        if (this.disabled) {
          return
        }
        this.selected = e.target.checked
      }
    }
  }
</script>

<style lang="css" scoped>
  .transfer-checkbox{
    cursor: pointer;
    font-size: 12px;
    display: inline-block;
  }
  .checkbox-disabled {
    cursor: not-allowed;
  }
  .checkbox-wrap, .checkbox-inner{
    display: inline-block;
    position: relative;
  }
  .checkbox-wrap{
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    outline: 0;
    line-height: 1;
  }
  .checkbox-wrap-disabled{
    cursor: not-allowed;
  }
  .checkbox-inner{
    width: 14px;
    height: 14px;
    top: 0;
    left: 0;
    border: 1px solid #d7dde4;
    border-radius: 2px;
    background-color: #fff;
    transition: border-color .2s ease-in-out,background-color .2s ease-in-out;
  }
  .checkbox-inner:after {
    content: '';
    display: table;
    width: 4px;
    height: 8px;
    position: absolute;
    top: 1px;
    left: 4px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -ms-transform: rotate(45deg) scale(0);
    transform: rotate(45deg) scale(0);
    transition: all .2s ease-in-out;
  }
  .checkbox-checked .checkbox-inner:after{
    content: '';
    display: table;
    width: 4px;
    height: 8px;
    position: absolute;
    top: 1px;
    left: 4px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    transition: all .2s ease-in-out;
  }
  .checkbox-wrap-checked .checkbox-inner{
    border-color: #39f;
    background-color: #39f;
  }
  .checkbox-wrap-disabled .checkbox-inner{
    border-color: #d7dde4;
    background-color: #f3f3f3;
  }
  .checkbox-input{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .checkbox-input[disabled]{
    cursor: not-allowed;
  }
</style>