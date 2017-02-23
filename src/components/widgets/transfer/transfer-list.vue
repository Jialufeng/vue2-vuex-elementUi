<template lang="html">
  <div class="transfer-list">
    <div class="list-header">
      <!--<span class="header-title">{{ title }}</span>-->
      <span class="header-count">{{ data.length }}</span>
      <span class="header-title">项</span>

    </div>
    <div class="list-body" :class="{'body-search': search}">
      <div class="list-search-wrap" v-if="search">
        <transferSearch 
          @handleSearch="handleSearch"
          :placeholder="searchPlaceholder"></transferSearch>
      </div>
      <div class="list-content-wrap">
        <ul class="list-content">
          <li class="list-item" :class="{'item-disabled': item.disabled}" v-for="item in showList" @click="handleItemClick(item)">
            <transferCheckbox :checked="isChecked(item)" :disabled="item.disabled"></transferCheckbox>
            <span class="item-text text" v-html="showText(item)"></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="list-footer">
      <div class="select-all list-item" :class="{'select-all-disabled': selectAllDisabled}" @click="toggleSelectAll">
        <transferCheckbox :checked="allSelected" :disabled="selectAllDisabled"></transferCheckbox>
        <span class="select-all-text text">全选</span>
      </div>
    </div>
  </div>
</template>

<script>
  import transferSearch from './transfer-search.vue'
  import transferCheckbox from './transfer-checkbox.vue'

  export default {
    name: 'transfer-list',
    data () {
      return {
        searchText: ''
      }
    },
    props: ['position', 'data', 'title', 'renderFormat', 'checkedKeys', 'search', 'searchPlaceholder', 'searchHandler'],
    computed: {
      showList () {
        return this.data.filter(this.searchFilter.bind(this))
      },
      selectAllDisabled() {
        return this.data.filter(data => !data.disabled).length < 1
      },
      allSelected() {
        return this.data.filter(data => !data.disabled).length === this.checkedKeys.length && this.checkedKeys.length !== 0
      }
    },
    methods: {
      showText(item) {
        return this.renderFormat(item)
      },
      isChecked(item) {
        return this.checkedKeys.indexOf(item.key) > -1
      },
      handleItemClick(item) {
        if (item.disabled) {
          return
        }
        this.$emit('itemClick', this.position, item.key)
      },
      toggleSelectAll(status) {
        if (this.selectAllDisabled) {
          return
        }
        this.$emit('toggleSelectAll', this.position, !this.allSelected)
      },
      searchFilter (data) {
        return this.searchHandler(data, this.searchText)
      },
      handleSearch (searchText) {
        this.searchText = searchText
      }
    },
    components: {
      transferSearch,
      transferCheckbox
    }
  }
</script>

<style lang="css">
  .transfer-list {
    display: inline-block;
    width: 180px;
    height: 210px;
    font-size: 12px;
    vertical-align: middle;
    position: relative;
    padding-top: 35px;
    padding-bottom: 35px;
  }
  
  .list-header {
    padding: 8px 16px;
    background: #f9fafc;
    color: #657180;
    border: 1px solid #d7dde4;
    border-bottom: 1px solid #e3e8ee;
    border-radius: 6px 6px 0 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
  
  .list-body {
    height: 100%;
    border: 1px solid #d7dde4;
    border-top: none;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }
  .list-body.body-search{
    padding-top: 34px;
  }
  .list-content-wrap,
  .list-content {
    height: 100%;
  }
  
  .list-search-wrap {
    padding: 8px 8px 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  
  .list-content {
    overflow: auto;
    padding: 4px 0;
  }
  
  .list-item {
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding: 7px 16px;
    clear: both;
    color: #657180;
    font-size: 12px!important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background .2s ease-in-out;
  }
  
  .list-item.item-disabled {
    color: #c3cbd6;
    cursor: not-allowed;
  }
  
  .list-footer {
    border: 1px solid #d7dde4;
    border-top: none;
    border-radius: 0 0 6px 6px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    zoom: 1;
    height: 35px;
  }
  
  .list-footer:before,
  .list-footer:after {
    content: '';
    display: table;
    box-sizing: border-box;
  }
  
  .list-footer:after {
    clear: both;
    visibility: hidden;
    font-size: 0;
    height: 0;
  }
  
  .select-all {
    height: 100%;
    box-sizing: border-box;
    padding-top: 10px;
  }
  
  .select-all-disabled {
    cursor: not-allowed;
  }
  
  .text {
    margin-left: 5px;
  }
</style>