<template lang="html">
  <div class="transfer-search">
    <div class="input-wrap">
      <i class="fa search-icon" :class="icon" @click="handleClick"></i>
      <input type="text" 
        class="search-input" 
        v-model="searchText" 
        :placeholder="placeholder"
        @input="handleInput">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'transfer-search',
    data () {
      return {
        searchText: ''
      }
    },
    props: ['placeholder'],
    computed: {
      icon () {
        return this.searchText && 'fa-close' || 'fa-search'
      }
    },
    methods: {
      handleClick () {
        if (this.searchText === '') {
          return
        }
        this.searchText = ''
        this.$emit('handleSearch', this.searchText)
      },
      handleInput () {
        this.$emit('handleSearch', this.searchText)
      }
    }
  }
</script>

<style lang="css">
  .transfer-search{
    position: relative;
    box-sizing: border-box;
  }
  .input-wrap{
    width: 100%;
    position: relative;
  }
  .search-icon, .search-input{
    box-sizing: border-box;
  }
  .search-icon{
    width: 24px;
    height: 24px;
    font-size: 14px;
    line-height: 24px;
    position: absolute;
    right: 0;
    color: #9ea7b4;
    text-align: center;
    cursor: pointer;
  }
  .search-input{
    width: 100%;
    height: 24px;
    line-height: 1.5;
    padding: 1px 24px 1px 7px;
    border-radius: 3px;
    font-size: 12px;
    border: 1px solid #d7dde4;
    color: #657180;
    background-color: #fff;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
  }
  .search-input:focus, .search-input:hover{
    border-color: #5cadff;
  }
</style>