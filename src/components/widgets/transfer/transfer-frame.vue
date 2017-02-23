<template lang="html">
  <div class="transfer-frame">
    <transferList
      position="left"
      ref="left"
      :data="leftData"
      :title="listTitle[0]"
      :render-format="renderFormat"
      :checked-keys="leftCheckedKeys"
      :style="style"
      :search="search"
      :searchPlaceholder="searchPlaceholder"
      :searchHandler="searchHandler"
      @itemClick="listItemClick"
      @toggleSelectAll="toggleSelectAll">
    </transferList>
    <transferAction
      :left-disabled="leftDisabled"
      :right-disabled="rightDisabled"
      :actionLabel="actionLabel"></transferAction>
    <transferList
      position="right"
      ref="right"
      :data="rightData"
      :title="listTitle[1]"
      :render-format="renderFormat"
      :checked-keys="rightCheckedKeys"
      :style="style"
      :search="search"
      :searchPlaceholder="searchPlaceholder"
      :searchHandler="searchHandler"
      @itemClick="listItemClick"
      @toggleSelectAll="toggleSelectAll">
    </transferList>
  </div>
</template>

<script>
  import transferList from './transfer-list.vue'
  import transferAction from './transfer-action.vue'

  export default {
    name: 'transfer-frame',
    data() {
      return {
        leftData: [],
        rightData: [],
        leftCheckedKeys: [],
        rightCheckedKeys: []
      }
    },
    props: {
      style: {
        type: Object,
        default () {
          return {
            width: '250px',
            height: '300px'
          }
        }
      },
      source: {
        type: Array,
        default () {
          return []
        }
      },
      targetKeys: {
        type: Array,
        default () {
          return []
        }
      },
      renderFormat: {
        type: Function,
        default (listItem) {
          return listItem.title || listItem.label
        }
      },
      listTitle: {
        type: Array,
        default () {
          return ['SOURCE', 'TARGET']
        }
      },
      search: {
        type: Boolean,
        default: false
      },
      searchPlaceholder: {
        type: String,
        default: '搜索'
      },
      searchHandler: {
        type: Function,
        default (data, searchText) {
          return data.label.indexOf(searchText) > -1 || data.title.indexOf(searchText) > -1
        }
      },
      searchNotFound: {
        type: String,
        default: '未找到匹配项'
      },
      actionLabel: {
        type: Array,
        default () {
          return ['>', '<']
        }
      }
    },
    computed: {
      leftDisabled() {
        return this.checkActions('left').length < 1
      },
      rightDisabled() {
        return this.checkActions('right').length < 1
      }
    },
    created() {
      this.buildData()
      this.$on('moveToLeft', this.moveToLeft)
      this.$on('moveAllToLeft', this.moveAllToLeft)
      this.$on('moveToRight', this.moveToRight)
      this.$on('moveAllToRight', this.moveAllToRight)
    },
    watch: {
      targetKeys () {
        this.buildData()
      }
    },
    methods: {
      buildData() {
        this.leftData = [...this.source]
        this.rightData = []
        this.targetKeys.forEach(key => {
          this.rightData.push(
            this.leftData.filter((data, index) => {
              if (data.key === key) {
                this.leftData.splice(index, 1)
                return true
              }
              return false
            })[0]
          )
        })
      },
      listItemClick (which, key) {
        let tmp = this[`${which}CheckedKeys`]
        let index = tmp.indexOf(key)
        if (index > -1) {
          tmp.splice(index, 1)
        } else {
          tmp.push(key)
        }
      },
      toggleSelectAll (which, selected) {
        this[`${which}CheckedKeys`] = selected && this[`${which}Data`].filter(data => !data.disabled).map(data => data.key) || []
      },
      checkActions(direction) {
        return this[`${direction}Data`].filter(data => {
          return !data.disabled && this[`${direction}CheckedKeys`].indexOf(data.key) > -1
        }).map(data => data.key)
      },
      moveTo (direction) {
        let destination = direction
        let origin = direction === 'left' && 'right' || 'left'
        let newTargetKeys = []
        let moveDataKeys = this.checkActions(origin)
        if (direction === 'right') {
          newTargetKeys = this.targetKeys.concat(moveDataKeys)
        } else {
          newTargetKeys = this.targetKeys.filter(key => {
            return moveDataKeys.indexOf(key) === -1
          })
        }
        this[`${origin}CheckedKeys`] = []
        this.$emit('change', newTargetKeys, direction, moveDataKeys);
      },
      moveToLeft () {
        this.moveTo('left')
      },
      moveToRight () {
        this.moveTo('right')
      }
    },
    components: {
      transferList,
      transferAction
    }
  }
</script>

<style lang="css">
  .transfer-frame {
    position: relative;
    line-height: 1.5;
  }
</style>