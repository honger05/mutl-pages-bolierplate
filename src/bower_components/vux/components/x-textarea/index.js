!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxXTextarea=t():e.vuxXTextarea=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(6)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(2),r=n(i),s=o(5),u=n(s);t["default"]={minxins:[r["default"]],components:{GroupTitle:u["default"]},props:{showCounter:{type:Boolean,"default":!0},max:{type:Number},value:{type:String,"default":"",twoWay:!0},placeholder:{type:String,"default":""},row:{type:Number,"default":3}},watch:{value:function(e){this.max&&this.value.length>this.max&&(this.value=e.slice(0,this.max)),this.$dispatch("on-change",this.value)}},computed:{count:function(){return this.value.length}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{required:{type:Boolean,"default":!0}},created:function(){this.uuid=Math.random().toString(36).substring(3,8),this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(e){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$dispatch("change",e)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(e,t){e.exports="<div class=weui_cells_title> <slot></slot> </div>"},function(e,t){e.exports='<div class=weui_cell> <div class="weui_cell_bd weui_cell_primary"> <textarea class=weui_textarea placeholder={{placeholder}} :rows=row v-model=value></textarea> <div class=weui_textarea_counter v-show="showCounter && max"><span>{{count}}</span>/{{max}}</div> </div> </div>'},function(e,t,o){var n,i;i=o(3),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,t,o){var n,i;n=o(1),i=o(4),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}])});