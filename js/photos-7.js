(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{198:function(n,t,e){var r=e(125),a=e(228);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);n.exports=a.locals||{}},227:function(n,t,e){"use strict";var r=e(198);e.n(r).a},228:function(n,t,e){"use strict";e.r(t);var r=e(75),a=e.n(r)()(!0);a.push([n.i,".file[data-v-1b9c1a10],.folder[data-v-1b9c1a10]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:var(--border-radius);overflow:hidden}.file .cover[data-v-1b9c1a10],.folder .cover[data-v-1b9c1a10]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-1b9c1a10],.file:active .cover[data-v-1b9c1a10],.file:hover .cover[data-v-1b9c1a10],.file:focus .cover[data-v-1b9c1a10],.folder.active .cover[data-v-1b9c1a10],.folder:active .cover[data-v-1b9c1a10],.folder:hover .cover[data-v-1b9c1a10],.folder:focus .cover[data-v-1b9c1a10]{opacity:.3}.file--clear.active .cover[data-v-1b9c1a10],.file--clear:active .cover[data-v-1b9c1a10],.file--clear:hover .cover[data-v-1b9c1a10],.file--clear:focus .cover[data-v-1b9c1a10],.folder--clear.active .cover[data-v-1b9c1a10],.folder--clear:active .cover[data-v-1b9c1a10],.folder--clear:hover .cover[data-v-1b9c1a10],.folder--clear:focus .cover[data-v-1b9c1a10]{opacity:.1}.fade-enter-active[data-v-1b9c1a10],.fade-leave-active[data-v-1b9c1a10]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-1b9c1a10],.fade-leave-to[data-v-1b9c1a10]{opacity:0}.folder-content[data-v-1b9c1a10]{position:absolute;display:grid;width:100%;height:100%}.folder-content--grid-1[data-v-1b9c1a10]{grid-template-columns:1fr;grid-template-rows:1fr}.folder-content--grid-2[data-v-1b9c1a10]{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3[data-v-1b9c1a10]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3 img[data-v-1b9c1a10]:first-child{grid-column:span 2}.folder-content--grid-4[data-v-1b9c1a10]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content img[data-v-1b9c1a10]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.folder-name[data-v-1b9c1a10]{position:absolute;z-index:3;display:flex;overflow:hidden;flex-direction:column;width:100%;height:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:1}.folder-name__icon[data-v-1b9c1a10]{height:40%;margin-top:calc(30% - 1rem / 2);background-size:40%}.folder-name__name[data-v-1b9c1a10]{overflow:hidden;height:1rem;padding:0 10px;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:var(--color-main-background);text-shadow:0 0 8px var(--color-main-text);font-size:1rem;line-height:1rem}.folder--clear .folder-name__icon[data-v-1b9c1a10]{opacity:.3}.folder--clear .folder-name__name[data-v-1b9c1a10]{color:var(--color-main-text);text-shadow:0 0 8px var(--color-main-background)}.folder:not(.folder--clear) .cover[data-v-1b9c1a10]{opacity:.3}.folder:not(.folder--clear):active .folder-name[data-v-1b9c1a10],.folder:not(.folder--clear):active .cover[data-v-1b9c1a10],.folder:not(.folder--clear):hover .folder-name[data-v-1b9c1a10],.folder:not(.folder--clear):hover .cover[data-v-1b9c1a10],.folder:not(.folder--clear):focus .folder-name[data-v-1b9c1a10],.folder:not(.folder--clear):focus .cover[data-v-1b9c1a10]{opacity:0}\n","",{version:3,sources:["webpack://src/mixins/FileFolder.scss","webpack://src/components/FolderTagPreview.vue"],names:[],mappings:"AAsBA,gDAEC,iBAAkB,CAClB,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,wBAAiB,CAAjB,qBAAiB,CAAjB,oBAAiB,CAAjB,gBAAiB,CACjB,kCAAmC,CACnC,eAAgB,CARjB,8DAWE,SAAU,CAMV,UAAW,CACX,mBAAoB,CACpB,qDAAsD,CACtD,SAAU,CACV,uCAAwC,CArB1C,4SA6BG,UAAW,CACX,oWAQA,UAAW,CACX,wEAKF,qDAAsD,CACtD,6DAGA,SAAU,CCgFX,iCACC,iBAAkB,CAClB,YAAa,CACb,UAAW,CACX,WAAY,CAEZ,yCACC,yBAA0B,CAC1B,sBAAuB,CACvB,yCAEA,yBAA0B,CAC1B,0BAA2B,CAC3B,yCAEA,6BAA8B,CAC9B,0BAA2B,CAF3B,yDAIC,kBAAmB,CACnB,yCAGD,6BAA8B,CAC9B,0BAA2B,CAvB7B,qCA0BE,UAAW,CACX,WAAY,CAEZ,mBAAY,CAAZ,gBAAiB,CACjB,8BAMD,iBAAkB,CAClB,SAAU,CACV,YAAa,CACb,eAAgB,CAChB,qBAAsB,CACtB,UAAW,CACX,WAAY,CACZ,qDAAsD,CACtD,SAAU,CACV,oCACC,UAAW,CACX,+BAA2C,CAC3C,mBAAoB,CACpB,oCAEA,eAAgB,CAChB,WAnBgB,CAoBhB,cAAe,CACf,iBAAkB,CAClB,kBAAmB,CACnB,sBAAuB,CACvB,kCAAmC,CACnC,0CAA2C,CAC3C,cA1BgB,CA2BhB,gBA3BgB,CA4BhB,mDAQC,UAAW,CAFZ,mDAKC,4BAA6B,CAC7B,gDAAiD,CARpD,oDAiBG,UAAW,CAjBd,gXA2BI,SAAU",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n.file,\n.folder {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-radius: var(--border-radius);\n\toverflow: hidden;\n\n\t.cover {\n\t\tz-index: 2;\n\t\t// We want nice squares despite anything that is in it.\n\t\t// The .cover is what makes the exact square size of the grid.\n\t\t// We use padding-bottom because padding with percentage\n\t\t// always refers to the width. And we only want to fit\n\t\t// the css grid's width.\n\t\twidth: 100%;\n\t\tpadding-bottom: 100%;\n\t\ttransition: opacity var(--animation-quick) ease-in-out;\n\t\topacity: 0;\n\t\tbackground-color: var(--color-main-text);\n\t}\n\n\t&.active,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&--clear.active,\n\t&--clear:active,\n\t&--clear:hover,\n\t&--clear:focus {\n\t\t.cover {\n\t\t\topacity: .1;\n\t\t}\n\t}\n}\n\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity var(--animation-quick) ease-in-out;\n}\n\n.fade-enter, .fade-leave-to {\n\topacity: 0;\n}\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../mixins/FileFolder.scss';\n\n.folder-content {\n\tposition: absolute;\n\tdisplay: grid;\n\twidth: 100%;\n\theight: 100%;\n\t// folder layout if less than 4 pictures\n\t&--grid-1 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr;\n\t}\n\t&--grid-2 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\t&--grid-3 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\timg:first-child {\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n\t&--grid-4 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\n\t\tobject-fit: cover;\n\t}\n}\n\n$name-height: 1rem;\n\n.folder-name {\n\tposition: absolute;\n\tz-index: 3;\n\tdisplay: flex;\n\toverflow: hidden;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\ttransition: opacity var(--animation-quick) ease-in-out;\n\topacity: 1;\n\t&__icon {\n\t\theight: 40%;\n\t\tmargin-top: calc(30% - #{$name-height} / 2); // center name+icon\n\t\tbackground-size: 40%;\n\t}\n\t&__name {\n\t\toverflow: hidden;\n\t\theight: $name-height;\n\t\tpadding: 0 10px;\n\t\ttext-align: center;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-main-background);\n\t\ttext-shadow: 0 0 8px var(--color-main-text);\n\t\tfont-size: $name-height;\n\t\tline-height: $name-height;\n\t}\n}\n\n// Cover management empty/full\n.folder {\n\t// if no img, let's display the folder icon as default black\n\t&--clear {\n\t\t.folder-name__icon {\n\t\t\topacity: .3;\n\t\t}\n\t\t.folder-name__name {\n\t\t\tcolor: var(--color-main-text);\n\t\t\ttext-shadow: 0 0 8px var(--color-main-background);\n\t\t}\n\t}\n\n\t// show the cover as background\n\t// if  there are pictures in it\n\t// so we can sho the folder+name above it\n\t&:not(.folder--clear) {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\n\t\t// hide everything but pictures\n\t\t// on hover/active/focus\n\t\t&:active,\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t.folder-name,\n\t\t\t.cover {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]),t.default=a},229:function(n,t,e){var r=e(125),a=e(518);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);n.exports=a.locals||{}},232:function(n,t,e){var r=e(125),a=e(526);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);n.exports=a.locals||{}},266:function(n,e,r){"use strict";var a=r(17),i={name:"FolderTagPreview",props:{icon:{type:String,default:"icon-folder"},id:{type:Number,required:!0},name:{type:String,required:!0},path:{type:String,required:!0},fileList:{type:Array,default:function(){return[]}}},data:function(){return{loaded:!1,failed:[]}},computed:{isEmpty:function(){return 0===this.previewList.length},ariaUuid:function(){return"folder-".concat(this.id)},ariaLabel:function(){return t("photos",'Open the "{name}" sub-directory',{name:this.name})},previewList:function(){var n=this;return this.fileList.filter((function(t){return-1===n.failed.indexOf(t.fileid)}))},to:function(){var n=/^\/?(.+)/i.exec(this.path)[1];return Object.assign({},this.$route,{params:{path:n}})}},methods:{generateImgSrc:function(n){var t=n.fileid,e=n.etag;return Object(a.generateUrl)("/core/preview?fileId=".concat(t,"&x=",256,"&y=",256,"&a=true&v=").concat(e))},onPreviewFail:function(n){var t=n.fileid;this.failed.push(t)}}},o=(r(227),r(74)),c=Object(o.a)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("router-link",{staticClass:"folder",class:{"folder--clear":n.isEmpty},attrs:{to:n.to,"aria-label":n.ariaLabel}},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:n.loaded,expression:"loaded"}],staticClass:"folder-content",class:"folder-content--grid-"+n.previewList.length,attrs:{role:"none"}},n._l(n.previewList,(function(t){return e("img",{key:t.fileid,attrs:{src:n.generateImgSrc(t),alt:""},on:{load:function(t){n.loaded=!0},error:function(e){return n.onPreviewFail(t)}}})})),0)]),n._v(" "),e("div",{staticClass:"folder-name"},[e("span",{staticClass:"folder-name__icon",class:[n.isEmpty?"icon-dark":"icon-white",n.icon],attrs:{role:"img"}}),n._v(" "),e("p",{staticClass:"folder-name__name",attrs:{id:n.ariaUuid}},[n._v("\n\t\t\t"+n._s(n.name)+"\n\t\t")])]),n._v(" "),e("div",{staticClass:"cover",attrs:{role:"none"}})],1)}),[],!1,null,"1b9c1a10",null);e.a=c.exports},517:function(n,t,e){"use strict";var r=e(229);e.n(r).a},518:function(n,t,e){"use strict";e.r(t);var r=e(75),a=e.n(r)()(!0);a.push([n.i,".file[data-v-7da20fe2],.folder[data-v-7da20fe2]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:var(--border-radius);overflow:hidden}.file .cover[data-v-7da20fe2],.folder .cover[data-v-7da20fe2]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-7da20fe2],.file:active .cover[data-v-7da20fe2],.file:hover .cover[data-v-7da20fe2],.file:focus .cover[data-v-7da20fe2],.folder.active .cover[data-v-7da20fe2],.folder:active .cover[data-v-7da20fe2],.folder:hover .cover[data-v-7da20fe2],.folder:focus .cover[data-v-7da20fe2]{opacity:.3}.file--clear.active .cover[data-v-7da20fe2],.file--clear:active .cover[data-v-7da20fe2],.file--clear:hover .cover[data-v-7da20fe2],.file--clear:focus .cover[data-v-7da20fe2],.folder--clear.active .cover[data-v-7da20fe2],.folder--clear:active .cover[data-v-7da20fe2],.folder--clear:hover .cover[data-v-7da20fe2],.folder--clear:focus .cover[data-v-7da20fe2]{opacity:.1}.fade-enter-active[data-v-7da20fe2],.fade-leave-active[data-v-7da20fe2]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-7da20fe2],.fade-leave-to[data-v-7da20fe2]{opacity:0}.folder-content[data-v-7da20fe2]{position:absolute;display:grid;width:100%;height:100%}.folder-content--grid-1[data-v-7da20fe2]{grid-template-columns:1fr;grid-template-rows:1fr}.folder-content--grid-2[data-v-7da20fe2]{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3[data-v-7da20fe2]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3 img[data-v-7da20fe2]:first-child{grid-column:span 2}.folder-content--grid-4[data-v-7da20fe2]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content img[data-v-7da20fe2]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.folder-name[data-v-7da20fe2]{position:absolute;z-index:3;display:flex;overflow:hidden;flex-direction:column;width:100%;height:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:1}.folder-name__icon[data-v-7da20fe2]{height:40%;margin-top:calc(30% - 1rem / 2);background-size:40%}.folder-name__name[data-v-7da20fe2]{overflow:hidden;height:1rem;padding:0 10px;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:var(--color-main-background);text-shadow:0 0 8px var(--color-main-text);font-size:1rem;line-height:1rem}.folder--clear .folder-name__icon[data-v-7da20fe2]{opacity:.3}.folder--clear .folder-name__name[data-v-7da20fe2]{color:var(--color-main-text);text-shadow:0 0 8px var(--color-main-background)}.folder:not(.folder--clear) .cover[data-v-7da20fe2]{opacity:.3}.folder:not(.folder--clear).active .folder-name[data-v-7da20fe2],.folder:not(.folder--clear).active .cover[data-v-7da20fe2],.folder:not(.folder--clear):active .folder-name[data-v-7da20fe2],.folder:not(.folder--clear):active .cover[data-v-7da20fe2],.folder:not(.folder--clear):hover .folder-name[data-v-7da20fe2],.folder:not(.folder--clear):hover .cover[data-v-7da20fe2],.folder:not(.folder--clear):focus .folder-name[data-v-7da20fe2],.folder:not(.folder--clear):focus .cover[data-v-7da20fe2]{opacity:0}\n","",{version:3,sources:["webpack://src/mixins/FileFolder.scss","webpack://src/components/Folder.vue"],names:[],mappings:"AAsBA,gDAEC,iBAAkB,CAClB,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,wBAAiB,CAAjB,qBAAiB,CAAjB,oBAAiB,CAAjB,gBAAiB,CACjB,kCAAmC,CACnC,eAAgB,CARjB,8DAWE,SAAU,CAMV,UAAW,CACX,mBAAoB,CACpB,qDAAsD,CACtD,SAAU,CACV,uCAAwC,CArB1C,4SA6BG,UAAW,CACX,oWAQA,UAAW,CACX,wEAKF,qDAAsD,CACtD,6DAGA,SAAU,CCyCX,iCACC,iBAAkB,CAClB,YAAa,CACb,UAAW,CACX,WAAY,CAEZ,yCACC,yBAA0B,CAC1B,sBAAuB,CACvB,yCAEA,yBAA0B,CAC1B,0BAA2B,CAC3B,yCAEA,6BAA8B,CAC9B,0BAA2B,CAF3B,yDAIC,kBAAmB,CACnB,yCAGD,6BAA8B,CAC9B,0BAA2B,CAvB7B,qCA0BE,UAAW,CACX,WAAY,CAEZ,mBAAY,CAAZ,gBAAiB,CACjB,8BAMD,iBAAkB,CAClB,SAAU,CACV,YAAa,CACb,eAAgB,CAChB,qBAAsB,CACtB,UAAW,CACX,WAAY,CACZ,qDAAsD,CACtD,SAAU,CACV,oCACC,UAAW,CACX,+BAA2C,CAC3C,mBAAoB,CACpB,oCAEA,eAAgB,CAChB,WAnBgB,CAoBhB,cAAe,CACf,iBAAkB,CAClB,kBAAmB,CACnB,sBAAuB,CACvB,kCAAmC,CACnC,0CAA2C,CAC3C,cA1BgB,CA2BhB,gBA3BgB,CA4BhB,mDAQC,UAAW,CAFZ,mDAKC,4BAA6B,CAC7B,gDAAiD,CARpD,oDAiBG,UAAW,CAjBd,4eA4BI,SAAU",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n.file,\n.folder {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-radius: var(--border-radius);\n\toverflow: hidden;\n\n\t.cover {\n\t\tz-index: 2;\n\t\t// We want nice squares despite anything that is in it.\n\t\t// The .cover is what makes the exact square size of the grid.\n\t\t// We use padding-bottom because padding with percentage\n\t\t// always refers to the width. And we only want to fit\n\t\t// the css grid's width.\n\t\twidth: 100%;\n\t\tpadding-bottom: 100%;\n\t\ttransition: opacity var(--animation-quick) ease-in-out;\n\t\topacity: 0;\n\t\tbackground-color: var(--color-main-text);\n\t}\n\n\t&.active,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&--clear.active,\n\t&--clear:active,\n\t&--clear:hover,\n\t&--clear:focus {\n\t\t.cover {\n\t\t\topacity: .1;\n\t\t}\n\t}\n}\n\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity var(--animation-quick) ease-in-out;\n}\n\n.fade-enter, .fade-leave-to {\n\topacity: 0;\n}\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../mixins/FileFolder.scss';\n\n.folder-content {\n\tposition: absolute;\n\tdisplay: grid;\n\twidth: 100%;\n\theight: 100%;\n\t// folder layout if less than 4 pictures\n\t&--grid-1 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr;\n\t}\n\t&--grid-2 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\t&--grid-3 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\timg:first-child {\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n\t&--grid-4 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\n\t\tobject-fit: cover;\n\t}\n}\n\n$name-height: 1rem;\n\n.folder-name {\n\tposition: absolute;\n\tz-index: 3;\n\tdisplay: flex;\n\toverflow: hidden;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\ttransition: opacity var(--animation-quick) ease-in-out;\n\topacity: 1;\n\t&__icon {\n\t\theight: 40%;\n\t\tmargin-top: calc(30% - #{$name-height} / 2); // center name+icon\n\t\tbackground-size: 40%;\n\t}\n\t&__name {\n\t\toverflow: hidden;\n\t\theight: $name-height;\n\t\tpadding: 0 10px;\n\t\ttext-align: center;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-main-background);\n\t\ttext-shadow: 0 0 8px var(--color-main-text);\n\t\tfont-size: $name-height;\n\t\tline-height: $name-height;\n\t}\n}\n\n// Cover management empty/full\n.folder {\n\t// if no img, let's display the folder icon as default black\n\t&--clear {\n\t\t.folder-name__icon {\n\t\t\topacity: .3;\n\t\t}\n\t\t.folder-name__name {\n\t\t\tcolor: var(--color-main-text);\n\t\t\ttext-shadow: 0 0 8px var(--color-main-background);\n\t\t}\n\t}\n\n\t// show the cover as background\n\t// if  there are pictures in it\n\t// so we can sho the folder+name above it\n\t&:not(.folder--clear) {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\n\t\t// hide everything but pictures\n\t\t// on hover/active/focus\n\t\t&.active,\n\t\t&:active,\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t.folder-name,\n\t\t\t.cover {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]),t.default=a},525:function(n,t,e){"use strict";var r=e(232);e.n(r).a},526:function(n,t,e){"use strict";e.r(t);var r=e(75),a=e.n(r)()(!0);a.push([n.i,"@media (min-width: 0px) and (max-width: 400px){.grid-container[data-v-98d0d3fc]{padding:66px 8px 256px 8px}}@media (min-width: 400px) and (max-width: 700px){.grid-container[data-v-98d0d3fc]{padding:66px 8px 256px 8px}}@media (min-width: 700px) and (max-width: 1024px){.grid-container[data-v-98d0d3fc]{padding:66px 44px 256px 44px}}@media (min-width: 1024px) and (max-width: 1280px){.grid-container[data-v-98d0d3fc]{padding:66px 44px 256px 44px}}@media (min-width: 1280px) and (max-width: 1440px){.grid-container[data-v-98d0d3fc]{padding:88px 66px 256px 66px}}@media (min-width: 1440px) and (max-width: 1600px){.grid-container[data-v-98d0d3fc]{padding:88px 66px 256px 66px}}@media (min-width: 1600px) and (max-width: 2048px){.grid-container[data-v-98d0d3fc]{padding:88px 66px 256px 66px}}@media (min-width: 2048px) and (max-width: 2560px){.grid-container[data-v-98d0d3fc]{padding:88px 88px 256px 88px}}@media (min-width: 2560px) and (max-width: 3440px){.grid-container[data-v-98d0d3fc]{padding:88px 88px 256px 88px}}@media (min-width: 3440px){.grid-container[data-v-98d0d3fc]{padding:88px 88px 256px 88px}}\n","",{version:3,sources:["webpack://src/views/Albums.vue"],names:[],mappings:"AAsQC,+CACC,iCACC,0BAAgE,CAChE,CAHF,iDACC,iCACC,0BAAgE,CAChE,CAHF,kDACC,iCACC,4BAAgE,CAChE,CAHF,mDACC,iCACC,4BAAgE,CAChE,CAHF,mDACC,iCACC,4BAAgE,CAChE,CAHF,mDACC,iCACC,4BAAgE,CAChE,CAHF,mDACC,iCACC,4BAAgE,CAChE,CAHF,mDACC,iCACC,4BAAgE,CAChE,CAHF,mDACC,iCACC,4BAAgE,CAChE,CAHF,2BACC,iCACC,4BAAgE,CAChE",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$previous: 0;\n@each $size, $config in get('sizes') {\n\t$marginTop: map-get($config, 'marginTop');\n\t$marginW: map-get($config, 'marginW');\n\t// if this is the last entry, only use min-width\n\t$rule: '(min-width: #{$previous}px) and (max-width: #{$size}px)';\n\t@if $size == 'max' {\n\t\t$rule: '(min-width: #{$previous}px)';\n\t}\n\t@media #{$rule} {\n\t\t.grid-container {\n\t\t\tpadding: #{$marginTop}px #{$marginW}px 256px #{$marginW}px;\n\t\t}\n\t}\n\t$previous: $size;\n}\n"],sourceRoot:""}]),t.default=a},678:function(n,t,e){"use strict";e.r(t);var r=e(49),a=e(215),i=e.n(a),o=e(17),c=e(24),d=e(76);function l(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return s(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,a=function(){};return{s:a,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return o=n.done,n},e:function(n){c=!0,i=n},f:function(){try{o||null==e.return||e.return()}finally{if(c)throw i}}}}function s(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function f(n,t,e,r,a,i,o){try{var c=n[i](o),d=c.value}catch(n){return void e(n)}c.done?t(d):Promise.resolve(d).then(r,a)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function o(n){f(i,r,a,o,c,"next",n)}function c(n){f(i,r,a,o,c,"throw",n)}o(void 0)}))}}
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var A=function(){return p.apply(this,arguments)};function p(){return(p=u(regeneratorRuntime.mark((function n(){var t,e,r,a,s,f,u,A,p,v,h,m=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:"/",e=m.length>1&&void 0!==m[1]?m[1]:{},r=Object(o.generateUrl)("/apps/photos/api/v1/".concat(e.shared?"shared":"albums")),n.next=5,i.a.get(r+Object(c.a)(t),e);case 5:a=n.sent,s=a.data.map((function(n){return Object(c.b)(n)})),f={},u=[],A=[],p=l(s);try{for(p.s();!(v=p.n()).done;)(h=v.value).filename===t?f=h:"file"!==h.type?u.push(h):d.b.indexOf(h.mime)>-1&&A.push(h)}catch(n){p.e(n)}finally{p.f()}return n.abrupt("return",{folder:f,folders:u,files:A});case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var v=e(225),h=e.n(v),m=e(263),C=e(209);function g(n,t,e,r,a,i,o){try{var c=n[i](o),d=c.value}catch(n){return void e(n)}c.done?t(d):Promise.resolve(d).then(r,a)}function B(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function b(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?B(Object(e),!0).forEach((function(t){w(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):B(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function w(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var y={name:"Folder",components:{FolderTagPreview:e(266).a},inheritAttrs:!1,props:{item:{type:Object,required:!0}},data:function(){return{cancelRequest:null}},computed:b(b({},Object(r.c)(["files","folders"])),{},{folderContent:function(){return this.folders[this.item.injected.fileid]},fileList:function(){var n=this;return this.folderContent?this.folderContent.map((function(t){return n.files[t]})).filter((function(n){return!!n})).slice(0,4):[]}}),created:function(){var n,t=this;return(n=regeneratorRuntime.mark((function n(){var e,r,a,i,o,c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Object(C.a)(A),r=e.request,a=e.cancel,t.cancelRequest=a,n.prev=2,n.next=5,r(t.item.injected.filename,{shared:t.item.injected.showShared});case 5:i=n.sent,o=i.folder,c=i.folders,d=i.files,t.$store.dispatch("updateFolders",{fileid:o.fileid,files:d,folders:c}),t.$store.dispatch("updateFiles",{folder:o,files:d,folders:c}),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),n.t0.response&&n.t0.response.status&&console.error("Failed to get folder content",t.item.injected.folder,n.t0.response);case 16:return n.prev=16,t.cancelRequest=null,n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[2,13,16,19]])})),function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function o(n){g(i,r,a,o,c,"next",n)}function c(n){g(i,r,a,o,c,"throw",n)}o(void 0)}))})()},beforeDestroy:function(){this.cancelRequest&&this.cancelRequest("Navigated away")}},x=(e(517),e(74)),k=Object(x.a)(y,(function(){var n=this.$createElement;return(this._self._c||n)("FolderTagPreview",{attrs:{id:this.item.injected.fileid,name:this.item.injected.basename,path:this.item.injected.filename,"file-list":this.fileList}})}),[],!1,null,"7da20fe2",null).exports,j=e(264),O=e(265),_=e(267);function E(n,t,e,r,a,i,o){try{var c=n[i](o),d=c.value}catch(n){return void e(n)}c.done?t(d):Promise.resolve(d).then(r,a)}function D(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function o(n){E(i,r,a,o,c,"next",n)}function c(n){E(i,r,a,o,c,"throw",n)}o(void 0)}))}}function F(n){return function(n){if(Array.isArray(n))return S(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return S(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return S(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function U(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function q(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?U(Object(e),!0).forEach((function(t){P(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):U(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function P(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var $={name:"Albums",components:{VirtualGrid:h.a,EmptyContent:m.a,Navigation:O.a},mixins:[_.a],props:{rootTitle:{type:String,required:!0},path:{type:String,default:"/"},loading:{type:Boolean,required:!0},showShared:{type:Boolean,default:!1}},data:function(){return{error:null,cancelRequest:function(){}}},computed:q(q({},Object(r.c)(["files","folders"])),{},{folderId:function(){return this.$store.getters.folderId(this.path)},folder:function(){return this.files[this.folderId]},folderContent:function(){return this.folders[this.folderId]},fileList:function(){var n=this;return this.folderContent&&this.folderContent.map((function(t){return n.files[t]})).filter((function(n){return!!n}))},subFolders:function(){return this.folderId&&this.files[this.folderId]&&this.files[this.folderId].folders},folderList:function(){var n=this;return this.subFolders&&this.subFolders.map((function(t){return n.files[t]})).filter((function(n){return!!n}))},contentList:function(){var n=this,t=this.folderList.map((function(t){return{id:"folder-".concat(t.fileid),injected:q(q({},t),{},{showShared:n.showShared}),width:256,height:256,columnSpan:1,renderComponent:k}})),e=this.fileList.map((function(t){return{id:"file-".concat(t.fileid),injected:q(q({},t),{},{list:n.fileList}),width:256,height:256,columnSpan:1,renderComponent:j.a}}));return[].concat(F(t),F(e))},isEmpty:function(){return!this.haveFiles&&!this.haveFolders},haveFiles:function(){return!!this.fileList&&0!==this.fileList.length},haveFolders:function(){return!!this.folderList&&0!==this.folderList.length}}),watch:{path:function(){this.fetchFolderContent()},showShared:function(){this.fetchFolderContent()}},beforeMount:function(){var n=this;return D(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.fetchFolderContent();case 1:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.cancelRequest("Changed view")},methods:{fetchFolderContent:function(){var n=this;return D(regeneratorRuntime.mark((function t(){var e,r,a,i,o,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.cancelRequest("Changed folder"),OCA.Viewer&&OCA.Viewer.close&&OCA.Viewer.close(),OCA.Files&&OCA.Files.Sidebar.close&&OCA.Files.Sidebar.close(),n.files[n.folderId]&&n.folders[n.folderId]||n.$emit("update:loading",!0),n.error=null,e=Object(C.a)(A),r=e.request,a=e.cancel,n.cancelRequest=a,t.prev=7,t.next=10,r(n.path,{shared:n.showShared});case 10:i=t.sent,o=i.folder,c=i.folders,d=i.files,n.$store.dispatch("addPath",{path:n.path,fileid:o.fileid}),n.$store.dispatch("updateFolders",{fileid:o.fileid,files:d,folders:c}),n.$store.dispatch("updateFiles",{folder:o,files:d,folders:c}),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(7),t.t0.response&&t.t0.response.status&&(404===t.t0.response.status?(n.error=404,setTimeout((function(){n.$router.push({name:n.$route.name})}),3e3)):n.error=t.t0),console.error("Error fetching album data",t.t0);case 23:return t.prev=23,n.$emit("update:loading",!1),t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[7,19,23,26]])})))()}}},W=(e(525),Object(x.a)($,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return 404===n.error?e("EmptyContent",{attrs:{"illustration-name":"folder"}},[n._v("\n\t"+n._s(n.t("photos","This folder does not exists"))+"\n")]):n.error?e("EmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):n.loading?n._e():e("div",[n.folder?e("Navigation",n._b({key:"navigation",attrs:{"root-title":n.rootTitle,"show-actions":!0}},"Navigation",n.folder,!1)):n._e(),n._v(" "),n.isEmpty?e("EmptyContent",{key:"emptycontent",attrs:{"illustration-name":"empty"}},[n._v("\n\t\t"+n._s(n.t("photos","No photos in here"))+"\n\t")]):e("div",{staticClass:"grid-container"},[e("VirtualGrid",{ref:"virtualgrid",attrs:{items:n.contentList,"get-column-count":function(){return n.gridConfig.count},"get-grid-gap":function(){return n.gridConfig.gap}}})],1)],1)}),[],!1,null,"98d0d3fc",null));t.default=W.exports}}]);
//# sourceMappingURL=photos-7.js.map?v=ec8c4a2b8787c8babb3e