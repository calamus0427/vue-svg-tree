<template>
  <div>
      <vue-svg-tree
        :treeData="treeData"
        svgId='svg'
        ref="svgTree"
      ></vue-svg-tree>
  </div>
</template>

<script>
import VueSvgTree from "@/lib/index";
import { list } from './list.js'
export default {
  components:{
    VueSvgTree
  },
  data(){
    return {
        treeData:list
    }
  }
}
</script>

