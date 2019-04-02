/**
 * @file 标尺选择工具
 * @author muzhilong
 */
import Vue from 'vue'

/* global Vue */
Vue.component('ruler', {
  template: '<div class="ruler"><p class="ruler-ruler"></p><span deg="min" class="ruler-deg" :style="minTop" @mousemove="move" @mousedown="press">{{vmin}}</span><span deg="max" class="ruler-deg" :style="maxTop" @mousemove="move" @mousedown="press">{{vmax}}</span></div>',
  data: function () {
      return {
          vmin: 0,
          vmax: this._max || 100,
          startY: 0
      };
  },
  computed: {
      _min: function () {
          return typeof this.min === 'number' ? this.min : 0;
      },
      _max: function () {
          return typeof this.max === 'number' ? this.max : 100;
      },
      minTop: function () {
          var all = this._max - this._min;
          var now = Math.min(this.vmin, this.vmax);
          var percent = (now - this._min) / (this._max - this._min);
          return 'top:' + (100 - percent * 100) + 'px';
      },
      maxTop: function () {
          var all = this._max - this._min;
          var now = Math.max(this.vmin, this.vmax);
          var percent = (now - this._min) / (this._max - this._min);
          return 'top:' + (100 - percent * 100) + 'px';
      },
      // 1px代表的数值
      perPx: function () {
          return (this._max - this._min) / 100;
      }
  },
  props: ['min', 'max', 'value'],
  created() {
      if (this.value) {
          this.vmin = parseFloat(this.value.min);
          this.vmax = parseFloat(this.value.max);
          if (this.vmin < this._min) {
              this.vmin = this._min;
              this.emit();
          }
          else if (this.vmax > this._max) {
              this.vmax = this._max;
              this.emit();
          }
      }
      else {
          this.vmin = this._min;
          this.vmax = this._max;
      }
  },
  methods: {
      press: function (e) {
          this.startY = e.clientY;
          this.startDeg = 'v' + e.target.getAttribute('deg');
      },
      move: function (e) {
          if (!e.buttons) {
              return;
          }

          // console.log('drag:', e);
          var nowY = e.clientY;
          var move = nowY - this.startY;
          this.startY = nowY;
          var deg = 'v' + e.target.getAttribute('deg');
          if (deg !== this.startDeg) {
              return;
          }

          if (typeof this[deg] === 'undefined') {
              return;
          }

          var val = this[deg] - move * this.perPx;
          if (val > this._max) {
              val = this._max;
          }

          if (val < this._min) {
              val = this._min;
          }

          if (this[deg] !== val) {
              this[deg] = val;
              if (this.vmin > this.vmax) {
                  var a = this.vmax;
                  this.vmax = this.vmin;
                  this.vmin = a;
              }

              clearTimeout(this.timer);
              this.timer = setTimeout(this.emit, 100);
          }

      },
      emit() {
          if (this.value) {
              this.value.min = this.vmin;
              this.value.max = this.vmax;
          }

          this.$emit('update', [this.vmin, this.vmax]);
      }
  }
});
