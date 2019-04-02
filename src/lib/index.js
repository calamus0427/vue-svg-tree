// import VueSvgTree from './index.vue'

// /* istanbul ignore next */
// VueSvgTree.install = function(Vue) {
//   Vue.component(VueSvgTree.name, VueSvgTree);
// }

// export default VueSvgTree

import VueSvgTree from './index.vue';
export default VueSvgTree;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(VueSvgTree.name, VueSvgTree);
}
