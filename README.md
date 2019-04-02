# vue-svg-tree
> 基于vue和svg的动态树形UI

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://https://www.calamus.xyz)
 [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://www.calamus.xyz)

### [截图](http://calamus.wiki/vue-svg-tree/example/index.html)
<img alt="截图" src="https://cdn.calamus.xyz/svgTree.png" style="width:400px"/>

### [应用](http://calamus.wiki/vue-svg-tree/example/index.html)
```bash
  npm install vue-svg-tree
```

### [示例](http://calamus.wiki/vue-svg-tree/example/index.html)
```vue
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
import VueSvgTree from "vue-svg-tree"
export default {
  components:{
    VueSvgTree
  },
  data(){
    return {
        treeData:[
            {id: 100, name: 'Calamus',  des:'www.calamus.xyz',color:'#E1244E',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你', value: 123, delay: 120, fatherId: 0,tlevel:1},
            {id: 101, name: 'Calamus1', des:'www.calamus.xyz',color:'#E1244E',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 0, fatherId: 100,tlevel:1},
            {id: 102, name: 'Calamus2', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 100, fatherId: 100,tlevel:0},
            {id: 103, name: 'Calamus3', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 100,tlevel:0},
            {id: 104, name: 'Calamus4', des:'www.calamus.xyz',color:'#E1244E',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 200, fatherId: 100,tlevel:0},
            {id: 105, name: 'Calamus5', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 101,tlevel:0},
            {id: 106, name: 'Calamus6', des:'www.calamus.xyz',color:'#E1244E',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 102,tlevel:0},
            {id: 107, name: 'Calamus7', des:'www.calamus.xyz',color:'#E1244E',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 102,tlevel:0},
            {id: 108, name: 'Calamus8', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 102,tlevel:0},
            {id: 109, name: 'Calamus9', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 102,tlevel:0},
            {id: 110, name: 'Calamus10', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 102,tlevel:0},
            {id: 111, name: 'Calamus11', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 102,tlevel:0},
            {id: 112, name: 'Calamus12', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 300, fatherId: 103,tlevel:0},
            {id: 113, name: 'Calamus13', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 103,tlevel:0},
            {id: 114, name: 'Calamus14', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 108,tlevel:0},
            {id: 116, name: 'Calamus15', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 108,tlevel:0},
            {id: 117, name: 'Calamus16', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 108,tlevel:0},
          ]
    }
  }
}
</script>
```

### 参数
|    参数    |    描述   |   类型   |	 默认/是否必须 	|
| ----------  | ------- | :--------: | :-------: |
| treeData       | 树形结构数据 |Array| 必须 |
| direction         | 树形方向 | String | 'row'/'col'(纵/横)|
| svgId  | svgId | String | 'svgId'(一个页面多个图时svgId不能相同) |
| curveness     | 连接线是直线还是弧线 | Boolean | false(false：弧线；true：直线) |

### ToDo
- [x]横向显示还有点小问题没有修复
- [x]弧度不可调整
- [x]框框样式暂时不可自定义，暂时建议复制源码修改，后期会修改为可配置，[欢迎pr](https://github.com/calamus0427/vue-svg-tree)

### 链接
[github](https://github.com/calamus0427/vue-svg-tree)
[官网](https://www.calamus.xyz)
[组件介绍](https://www.cnblogs.com/calamus/p/10643952.html)
