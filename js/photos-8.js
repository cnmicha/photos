(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{412:function(n,e,t){"use strict";var i=t(99),a=t.n(i)()(!0);a.push([n.i,".file[data-v-72c8239b],.folder[data-v-72c8239b]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:var(--border-radius);overflow:hidden}.file .cover[data-v-72c8239b],.folder .cover[data-v-72c8239b]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-72c8239b],.file:active .cover[data-v-72c8239b],.file:hover .cover[data-v-72c8239b],.file:focus .cover[data-v-72c8239b],.folder.active .cover[data-v-72c8239b],.folder:active .cover[data-v-72c8239b],.folder:hover .cover[data-v-72c8239b],.folder:focus .cover[data-v-72c8239b]{opacity:.3}.file--clear.active .cover[data-v-72c8239b],.file--clear:active .cover[data-v-72c8239b],.file--clear:hover .cover[data-v-72c8239b],.file--clear:focus .cover[data-v-72c8239b],.folder--clear.active .cover[data-v-72c8239b],.folder--clear:active .cover[data-v-72c8239b],.folder--clear:hover .cover[data-v-72c8239b],.folder--clear:focus .cover[data-v-72c8239b]{opacity:.1}.fade-enter-active[data-v-72c8239b],.fade-leave-active[data-v-72c8239b]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-72c8239b],.fade-leave-to[data-v-72c8239b]{opacity:0}.folder-content[data-v-72c8239b]{position:absolute;display:grid;width:100%;height:100%}.folder-content--grid-1[data-v-72c8239b]{grid-template-columns:1fr;grid-template-rows:1fr}.folder-content--grid-2[data-v-72c8239b]{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3[data-v-72c8239b]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3 img[data-v-72c8239b]:first-child{grid-column:span 2}.folder-content--grid-4[data-v-72c8239b]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content img[data-v-72c8239b]{width:100%;height:100%;object-fit:cover}.folder-name[data-v-72c8239b]{position:absolute;z-index:3;display:flex;overflow:hidden;flex-direction:column;width:100%;height:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:1}.folder-name__icon[data-v-72c8239b]{height:40%;margin-top:calc(30% - 1rem / 2);background-size:40%}.folder-name__name[data-v-72c8239b]{overflow:hidden;height:1rem;padding:0 10px;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:var(--color-main-background);text-shadow:0 0 8px var(--color-main-text);font-size:1rem;line-height:1rem}.folder--clear .folder-name__icon[data-v-72c8239b]{opacity:.3}.folder--clear .folder-name__name[data-v-72c8239b]{color:var(--color-main-text);text-shadow:0 0 8px var(--color-main-background)}.folder:not(.folder--clear) .cover[data-v-72c8239b]{opacity:.3}.folder:not(.folder--clear):active .folder-name[data-v-72c8239b],.folder:not(.folder--clear):active .cover[data-v-72c8239b],.folder:not(.folder--clear):hover .folder-name[data-v-72c8239b],.folder:not(.folder--clear):hover .cover[data-v-72c8239b],.folder:not(.folder--clear):focus .folder-name[data-v-72c8239b],.folder:not(.folder--clear):focus .cover[data-v-72c8239b]{opacity:0}\n","",{version:3,sources:["webpack://src/mixins/FileFolder.scss","webpack://src/components/FolderTagPreview.vue"],names:[],mappings:"AAsBA,gDAEC,iBAAkB,CAClB,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,wBAAiB,CAAjB,qBAAiB,CAAjB,oBAAiB,CAAjB,gBAAiB,CACjB,kCAAmC,CACnC,eAAgB,CARjB,8DAWE,SAAU,CAMV,UAAW,CACX,mBAAoB,CACpB,qDAAsD,CACtD,SAAU,CACV,uCAAwC,CArB1C,4SA6BG,UAAW,CACX,oWAQA,UAAW,CACX,wEAKF,qDAAsD,CACtD,6DAGA,SAAU,CCgFX,iCACC,iBAAkB,CAClB,YAAa,CACb,UAAW,CACX,WAAY,CAEZ,yCACC,yBAA0B,CAC1B,sBAAuB,CACvB,yCAEA,yBAA0B,CAC1B,0BAA2B,CAC3B,yCAEA,6BAA8B,CAC9B,0BAA2B,CAF3B,yDAIC,kBAAmB,CACnB,yCAGD,6BAA8B,CAC9B,0BAA2B,CAvB7B,qCA0BE,UAAW,CACX,WAAY,CAEZ,gBAAiB,CACjB,8BAMD,iBAAkB,CAClB,SAAU,CACV,YAAa,CACb,eAAgB,CAChB,qBAAsB,CACtB,UAAW,CACX,WAAY,CACZ,qDAAsD,CACtD,SAAU,CACV,oCACC,UAAW,CACX,+BAA2C,CAC3C,mBAAoB,CACpB,oCAEA,eAAgB,CAChB,WAnBgB,CAoBhB,cAAe,CACf,iBAAkB,CAClB,kBAAmB,CACnB,sBAAuB,CACvB,kCAAmC,CACnC,0CAA2C,CAC3C,cA1BgB,CA2BhB,gBA3BgB,CA4BhB,mDAQC,UAAW,CAFZ,mDAKC,4BAA6B,CAC7B,gDAAiD,CARpD,oDAiBG,UAAW,CAjBd,gXA2BI,SAAU",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n.file,\n.folder {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-radius: var(--border-radius);\n\toverflow: hidden;\n\n\t.cover {\n\t\tz-index: 2;\n\t\t// We want nice squares despite anything that is in it.\n\t\t// The .cover is what makes the exact square size of the grid.\n\t\t// We use padding-bottom because padding with percentage\n\t\t// always refers to the width. And we only want to fit\n\t\t// the css grid's width.\n\t\twidth: 100%;\n\t\tpadding-bottom: 100%;\n\t\ttransition: opacity var(--animation-quick) ease-in-out;\n\t\topacity: 0;\n\t\tbackground-color: var(--color-main-text);\n\t}\n\n\t&.active,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&--clear.active,\n\t&--clear:active,\n\t&--clear:hover,\n\t&--clear:focus {\n\t\t.cover {\n\t\t\topacity: .1;\n\t\t}\n\t}\n}\n\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity var(--animation-quick) ease-in-out;\n}\n\n.fade-enter, .fade-leave-to {\n\topacity: 0;\n}\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../mixins/FileFolder.scss';\n\n.folder-content {\n\tposition: absolute;\n\tdisplay: grid;\n\twidth: 100%;\n\theight: 100%;\n\t// folder layout if less than 4 pictures\n\t&--grid-1 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr;\n\t}\n\t&--grid-2 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\t&--grid-3 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\timg:first-child {\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n\t&--grid-4 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\n\t\tobject-fit: cover;\n\t}\n}\n\n$name-height: 1rem;\n\n.folder-name {\n\tposition: absolute;\n\tz-index: 3;\n\tdisplay: flex;\n\toverflow: hidden;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\ttransition: opacity var(--animation-quick) ease-in-out;\n\topacity: 1;\n\t&__icon {\n\t\theight: 40%;\n\t\tmargin-top: calc(30% - #{$name-height} / 2); // center name+icon\n\t\tbackground-size: 40%;\n\t}\n\t&__name {\n\t\toverflow: hidden;\n\t\theight: $name-height;\n\t\tpadding: 0 10px;\n\t\ttext-align: center;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-main-background);\n\t\ttext-shadow: 0 0 8px var(--color-main-text);\n\t\tfont-size: $name-height;\n\t\tline-height: $name-height;\n\t}\n}\n\n// Cover management empty/full\n.folder {\n\t// if no img, let's display the folder icon as default black\n\t&--clear {\n\t\t.folder-name__icon {\n\t\t\topacity: .3;\n\t\t}\n\t\t.folder-name__name {\n\t\t\tcolor: var(--color-main-text);\n\t\t\ttext-shadow: 0 0 8px var(--color-main-background);\n\t\t}\n\t}\n\n\t// show the cover as background\n\t// if  there are pictures in it\n\t// so we can sho the folder+name above it\n\t&:not(.folder--clear) {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\n\t\t// hide everything but pictures\n\t\t// on hover/active/focus\n\t\t&:active,\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t.folder-name,\n\t\t\t.cover {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]),e.a=a},440:function(n,e,i){"use strict";var a=i(20),r={name:"FolderTagPreview",props:{icon:{type:String,default:"icon-folder"},id:{type:Number,required:!0},name:{type:String,required:!0},path:{type:String,required:!0},fileList:{type:Array,default:()=>[]}},data:()=>({loaded:!1,failed:[]}),computed:{isEmpty(){return 0===this.previewList.length},ariaUuid(){return"folder-".concat(this.id)},ariaLabel(){return t("photos",'Open the "{name}" sub-directory',{name:this.name})},previewList(){return this.fileList.filter(n=>-1===this.failed.indexOf(n.fileid))},to(){const n=/^\/?(.+)/i.exec(this.path)[1];return Object.assign({},this.$route,{params:{path:n.split("/")}})}},methods:{generateImgSrc:({fileid:n,etag:e})=>Object(a.generateUrl)("/core/preview?fileId=".concat(n,"&x=",256,"&y=",256,"&a=true&v=").concat(e)),onPreviewFail({fileid:n}){this.failed.push(n)}}},o=i(98),d=i.n(o),s=i(412),l={insert:"head",singleton:!1},c=(d()(s.a,l),s.a.locals,i(66)),A=Object(c.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("router-link",{staticClass:"folder",class:{"folder--clear":n.isEmpty},attrs:{to:n.to,"aria-label":n.ariaLabel}},[t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.loaded,expression:"loaded"}],staticClass:"folder-content",class:"folder-content--grid-"+n.previewList.length,attrs:{role:"none"}},n._l(n.previewList,(function(e){return t("img",{key:e.fileid,attrs:{src:n.generateImgSrc(e),alt:""},on:{load:function(e){n.loaded=!0},error:function(t){return n.onPreviewFail(e)}}})})),0)]),n._v(" "),t("div",{staticClass:"folder-name"},[t("span",{staticClass:"folder-name__icon",class:[n.isEmpty?"icon-dark":"icon-white",n.icon],attrs:{role:"img"}}),n._v(" "),t("p",{staticClass:"folder-name__name",attrs:{id:n.ariaUuid}},[n._v("\n\t\t\t"+n._s(n.name)+"\n\t\t")])]),n._v(" "),t("div",{staticClass:"cover",attrs:{role:"none"}})],1)}),[],!1,null,"72c8239b",null);e.a=A.exports},666:function(n,e,t){"use strict";var i=t(99),a=t.n(i)()(!0);a.push([n.i,".file[data-v-95e00322],.folder[data-v-95e00322]{position:relative;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:var(--border-radius);overflow:hidden}.file .cover[data-v-95e00322],.folder .cover[data-v-95e00322]{z-index:2;width:100%;padding-bottom:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:0;background-color:var(--color-main-text)}.file.active .cover[data-v-95e00322],.file:active .cover[data-v-95e00322],.file:hover .cover[data-v-95e00322],.file:focus .cover[data-v-95e00322],.folder.active .cover[data-v-95e00322],.folder:active .cover[data-v-95e00322],.folder:hover .cover[data-v-95e00322],.folder:focus .cover[data-v-95e00322]{opacity:.3}.file--clear.active .cover[data-v-95e00322],.file--clear:active .cover[data-v-95e00322],.file--clear:hover .cover[data-v-95e00322],.file--clear:focus .cover[data-v-95e00322],.folder--clear.active .cover[data-v-95e00322],.folder--clear:active .cover[data-v-95e00322],.folder--clear:hover .cover[data-v-95e00322],.folder--clear:focus .cover[data-v-95e00322]{opacity:.1}.fade-enter-active[data-v-95e00322],.fade-leave-active[data-v-95e00322]{transition:opacity var(--animation-quick) ease-in-out}.fade-enter[data-v-95e00322],.fade-leave-to[data-v-95e00322]{opacity:0}.folder-content[data-v-95e00322]{position:absolute;display:grid;width:100%;height:100%}.folder-content--grid-1[data-v-95e00322]{grid-template-columns:1fr;grid-template-rows:1fr}.folder-content--grid-2[data-v-95e00322]{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3[data-v-95e00322]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content--grid-3 img[data-v-95e00322]:first-child{grid-column:span 2}.folder-content--grid-4[data-v-95e00322]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.folder-content img[data-v-95e00322]{width:100%;height:100%;object-fit:cover}.folder-name[data-v-95e00322]{position:absolute;z-index:3;display:flex;overflow:hidden;flex-direction:column;width:100%;height:100%;transition:opacity var(--animation-quick) ease-in-out;opacity:1}.folder-name__icon[data-v-95e00322]{height:40%;margin-top:calc(30% - 1rem / 2);background-size:40%}.folder-name__name[data-v-95e00322]{overflow:hidden;height:1rem;padding:0 10px;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:var(--color-main-background);text-shadow:0 0 8px var(--color-main-text);font-size:1rem;line-height:1rem}.folder--clear .folder-name__icon[data-v-95e00322]{opacity:.3}.folder--clear .folder-name__name[data-v-95e00322]{color:var(--color-main-text);text-shadow:0 0 8px var(--color-main-background)}.folder:not(.folder--clear) .cover[data-v-95e00322]{opacity:.3}.folder:not(.folder--clear).active .folder-name[data-v-95e00322],.folder:not(.folder--clear).active .cover[data-v-95e00322],.folder:not(.folder--clear):active .folder-name[data-v-95e00322],.folder:not(.folder--clear):active .cover[data-v-95e00322],.folder:not(.folder--clear):hover .folder-name[data-v-95e00322],.folder:not(.folder--clear):hover .cover[data-v-95e00322],.folder:not(.folder--clear):focus .folder-name[data-v-95e00322],.folder:not(.folder--clear):focus .cover[data-v-95e00322]{opacity:0}\n","",{version:3,sources:["webpack://src/mixins/FileFolder.scss","webpack://src/components/Folder.vue"],names:[],mappings:"AAsBA,gDAEC,iBAAkB,CAClB,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,wBAAiB,CAAjB,qBAAiB,CAAjB,oBAAiB,CAAjB,gBAAiB,CACjB,kCAAmC,CACnC,eAAgB,CARjB,8DAWE,SAAU,CAMV,UAAW,CACX,mBAAoB,CACpB,qDAAsD,CACtD,SAAU,CACV,uCAAwC,CArB1C,4SA6BG,UAAW,CACX,oWAQA,UAAW,CACX,wEAKF,qDAAsD,CACtD,6DAGA,SAAU,CCuEX,iCACC,iBAAkB,CAClB,YAAa,CACb,UAAW,CACX,WAAY,CAEZ,yCACC,yBAA0B,CAC1B,sBAAuB,CACvB,yCAEA,yBAA0B,CAC1B,0BAA2B,CAC3B,yCAEA,6BAA8B,CAC9B,0BAA2B,CAF3B,yDAIC,kBAAmB,CACnB,yCAGD,6BAA8B,CAC9B,0BAA2B,CAvB7B,qCA0BE,UAAW,CACX,WAAY,CAEZ,gBAAiB,CACjB,8BAMD,iBAAkB,CAClB,SAAU,CACV,YAAa,CACb,eAAgB,CAChB,qBAAsB,CACtB,UAAW,CACX,WAAY,CACZ,qDAAsD,CACtD,SAAU,CACV,oCACC,UAAW,CACX,+BAA2C,CAC3C,mBAAoB,CACpB,oCAEA,eAAgB,CAChB,WAnBgB,CAoBhB,cAAe,CACf,iBAAkB,CAClB,kBAAmB,CACnB,sBAAuB,CACvB,kCAAmC,CACnC,0CAA2C,CAC3C,cA1BgB,CA2BhB,gBA3BgB,CA4BhB,mDAQC,UAAW,CAFZ,mDAKC,4BAA6B,CAC7B,gDAAiD,CARpD,oDAiBG,UAAW,CAjBd,4eA4BI,SAAU",sourcesContent:["/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n.file,\n.folder {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tuser-select: none;\n\tborder-radius: var(--border-radius);\n\toverflow: hidden;\n\n\t.cover {\n\t\tz-index: 2;\n\t\t// We want nice squares despite anything that is in it.\n\t\t// The .cover is what makes the exact square size of the grid.\n\t\t// We use padding-bottom because padding with percentage\n\t\t// always refers to the width. And we only want to fit\n\t\t// the css grid's width.\n\t\twidth: 100%;\n\t\tpadding-bottom: 100%;\n\t\ttransition: opacity var(--animation-quick) ease-in-out;\n\t\topacity: 0;\n\t\tbackground-color: var(--color-main-text);\n\t}\n\n\t&.active,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\t}\n\n\t&--clear.active,\n\t&--clear:active,\n\t&--clear:hover,\n\t&--clear:focus {\n\t\t.cover {\n\t\t\topacity: .1;\n\t\t}\n\t}\n}\n\n.fade-enter-active, .fade-leave-active {\n\ttransition: opacity var(--animation-quick) ease-in-out;\n}\n\n.fade-enter, .fade-leave-to {\n\topacity: 0;\n}\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../mixins/FileFolder.scss';\n\n.folder-content {\n\tposition: absolute;\n\tdisplay: grid;\n\twidth: 100%;\n\theight: 100%;\n\t// folder layout if less than 4 pictures\n\t&--grid-1 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr;\n\t}\n\t&--grid-2 {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\t&--grid-3 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\timg:first-child {\n\t\t\tgrid-column: span 2;\n\t\t}\n\t}\n\t&--grid-4 {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\n\t\tobject-fit: cover;\n\t}\n}\n\n$name-height: 1rem;\n\n.folder-name {\n\tposition: absolute;\n\tz-index: 3;\n\tdisplay: flex;\n\toverflow: hidden;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: 100%;\n\ttransition: opacity var(--animation-quick) ease-in-out;\n\topacity: 1;\n\t&__icon {\n\t\theight: 40%;\n\t\tmargin-top: calc(30% - #{$name-height} / 2); // center name+icon\n\t\tbackground-size: 40%;\n\t}\n\t&__name {\n\t\toverflow: hidden;\n\t\theight: $name-height;\n\t\tpadding: 0 10px;\n\t\ttext-align: center;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-main-background);\n\t\ttext-shadow: 0 0 8px var(--color-main-text);\n\t\tfont-size: $name-height;\n\t\tline-height: $name-height;\n\t}\n}\n\n// Cover management empty/full\n.folder {\n\t// if no img, let's display the folder icon as default black\n\t&--clear {\n\t\t.folder-name__icon {\n\t\t\topacity: .3;\n\t\t}\n\t\t.folder-name__name {\n\t\t\tcolor: var(--color-main-text);\n\t\t\ttext-shadow: 0 0 8px var(--color-main-background);\n\t\t}\n\t}\n\n\t// show the cover as background\n\t// if  there are pictures in it\n\t// so we can sho the folder+name above it\n\t&:not(.folder--clear) {\n\t\t.cover {\n\t\t\topacity: .3;\n\t\t}\n\n\t\t// hide everything but pictures\n\t\t// on hover/active/focus\n\t\t&.active,\n\t\t&:active,\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t.folder-name,\n\t\t\t.cover {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]),e.a=a},670:function(n,e,t){"use strict";var i=t(99),a=t.n(i)()(!0);a.push([n.i,"@media (min-width: 0px) and (max-width: 400px){.grid-container[data-v-1dcce9f0]{padding:66px 8px 256px 8px}}@media (min-width: 400px) and (max-width: 700px){.grid-container[data-v-1dcce9f0]{padding:66px 8px 256px 8px}}@media (min-width: 700px) and (max-width: 1024px){.grid-container[data-v-1dcce9f0]{padding:66px 44px 256px 44px}}@media (min-width: 1024px) and (max-width: 1280px){.grid-container[data-v-1dcce9f0]{padding:66px 44px 256px 44px}}@media (min-width: 1280px) and (max-width: 1440px){.grid-container[data-v-1dcce9f0]{padding:88px 66px 256px 66px}}@media (min-width: 1440px) and (max-width: 1600px){.grid-container[data-v-1dcce9f0]{padding:88px 66px 256px 66px}}@media (min-width: 1600px) and (max-width: 2048px){.grid-container[data-v-1dcce9f0]{padding:88px 66px 256px 66px}}@media (min-width: 2048px) and (max-width: 2560px){.grid-container[data-v-1dcce9f0]{padding:88px 88px 256px 88px}}@media (min-width: 2560px) and (max-width: 3440px){.grid-container[data-v-1dcce9f0]{padding:88px 88px 256px 88px}}@media (min-width: 3440px){.grid-container[data-v-1dcce9f0]{padding:88px 88px 256px 88px}}\n","",{version:3,sources:["webpack://src/views/Albums.vue"],names:[],mappings:"AAsQC,+CACC,iCACC,0BAAgE,CAChE,CAHF,iDACC,iCACC,0BAAgE,CAChE,CAHF,kDACC,iCACC,4BAAgE,CAChE,CAHF,mDACC,iCACC,4BAAgE,CAChE,CAHF,mDACC,iCACC,4BAAgE,CAChE,CAHF,mDACC,iCACC,4BAAgE,CAChE,CAHF,mDACC,iCACC,4BAAgE,CAChE,CAHF,mDACC,iCACC,4BAAgE,CAChE,CAHF,mDACC,iCACC,4BAAgE,CAChE,CAHF,2BACC,iCACC,4BAAgE,CAChE",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$previous: 0;\n@each $size, $config in get('sizes') {\n\t$marginTop: map-get($config, 'marginTop');\n\t$marginW: map-get($config, 'marginW');\n\t// if this is the last entry, only use min-width\n\t$rule: '(min-width: #{$previous}px) and (max-width: #{$size}px)';\n\t@if $size == 'max' {\n\t\t$rule: '(min-width: #{$previous}px)';\n\t}\n\t@media #{$rule} {\n\t\t.grid-container {\n\t\t\tpadding: #{$marginTop}px #{$marginW}px 256px #{$marginW}px;\n\t\t}\n\t}\n\t$previous: $size;\n}\n"],sourceRoot:""}]),e.a=a},816:function(n,e,t){"use strict";t.r(e);var i=t(165),a=t(164),r=t.n(a),o=t(20),d=t(102),s=t(284),l=async function(n="/",e={}){const t=Object(o.generateUrl)("/apps/photos/api/v1/".concat(e.shared?"shared":"albums")),i=(await r.a.get(t+Object(d.a)(n),e)).data.map(n=>Object(d.b)(n));let a={};const l=[],c=[];for(const e of i)e.filename===n?a=e:"file"!==e.type?l.push(e):s.b.indexOf(e.mime)>-1&&c.push(e);return{folder:a,folders:l,files:c}},c=t(411),A=t.n(c),f=t(441),h=t(396),p={name:"Folder",components:{FolderTagPreview:t(440).a},inheritAttrs:!1,props:{item:{type:Object,required:!0}},data(){return{cancelRequest:null,previewFolder:this.item.injected.fileid}},computed:{...Object(i.c)(["files","folders"]),folderContent(){return this.folders[this.item.injected.fileid]},previewFiles(){const n=this.folders[this.previewFolder],e=n?n.map(n=>this.files[n]).slice(0,4):[];if(0===e.length&&this.files[this.previewFolder].folders&&this.previewFolder===this.item.injected.fileid){const n=this.files[this.previewFolder].folders[0];this.updatePreviewFolder(n),this.folders[this.previewFolder]||this.getFolderData(this.files[this.previewFolder].filename)}return e}},async created(){this.folderContent||await this.getFolderData(this.item.injected.filename)},beforeDestroy(){this.cancelRequest&&this.cancelRequest("Navigated away")},methods:{async getFolderData(n){const{request:e,cancel:t}=Object(h.a)(l);this.cancelRequest=t;try{const{folder:t,folders:i,files:a}=await e(n,{shared:this.item.injected.showShared});this.$store.dispatch("updateFolders",{fileid:t.fileid,files:a,folders:i}),this.$store.dispatch("updateFiles",{folder:t,files:a,folders:i})}catch(e){e.response&&e.response.status&&console.error("Failed to get folder content",n,e.response)}finally{this.cancelRequest=null}},updatePreviewFolder(n){this.previewFolder=n}}},C=t(98),v=t.n(C),m=t(666),u={insert:"head",singleton:!1},g=(v()(m.a,u),m.a.locals,t(66)),B=Object(g.a)(p,(function(){var n=this.$createElement;return(this._self._c||n)("FolderTagPreview",{attrs:{id:this.item.injected.fileid,name:this.item.injected.basename,path:this.item.injected.filename,"file-list":this.previewFiles}})}),[],!1,null,"95e00322",null).exports,w=t(442),b=t(443),x=t(444),y={name:"Albums",components:{VirtualGrid:A.a,EmptyContent:f.a,Navigation:b.a},mixins:[x.a],props:{rootTitle:{type:String,required:!0},path:{type:String,default:"/"},loading:{type:Boolean,required:!0},showShared:{type:Boolean,default:!1}},data:()=>({error:null,cancelRequest:()=>{}}),computed:{...Object(i.c)(["files","folders"]),folderId(){return this.$store.getters.folderId(this.path)},folder(){return this.files[this.folderId]},folderContent(){return this.folders[this.folderId]},fileList(){return this.folderContent&&this.folderContent.map(n=>this.files[n]).filter(n=>!!n)},subFolders(){return this.folderId&&this.files[this.folderId]&&this.files[this.folderId].folders},folderList(){return this.subFolders&&this.subFolders.map(n=>this.files[n]).filter(n=>!!n)},contentList(){var n,e;return[...(null===(n=this.folderList)||void 0===n?void 0:n.map(n=>({id:"folder-".concat(n.fileid),injected:{...n,showShared:this.showShared},width:256,height:256,columnSpan:1,renderComponent:B})))||[],...(null===(e=this.fileList)||void 0===e?void 0:e.map(n=>({id:"file-".concat(n.fileid),injected:{...n,list:this.fileList},width:256,height:256,columnSpan:1,renderComponent:w.a})))||[]]},isEmpty(){return!this.haveFiles&&!this.haveFolders},haveFiles(){return!!this.fileList&&0!==this.fileList.length},haveFolders(){return!!this.folderList&&0!==this.folderList.length}},watch:{path(){this.fetchFolderContent()},showShared(){this.fetchFolderContent()}},async beforeMount(){this.fetchFolderContent()},beforeDestroy(){this.cancelRequest("Changed view")},methods:{async fetchFolderContent(){this.cancelRequest("Changed folder"),OCA.Viewer&&OCA.Viewer.close&&OCA.Viewer.close(),OCA.Files&&OCA.Files.Sidebar.close&&OCA.Files.Sidebar.close(),this.files[this.folderId]&&this.folders[this.folderId]||this.$emit("update:loading",!0),this.error=null;const{request:n,cancel:e}=Object(h.a)(l);this.cancelRequest=e;try{const{folder:e,folders:t,files:i}=await n(this.path,{shared:this.showShared});this.$store.dispatch("addPath",{path:this.path,fileid:e.fileid}),this.$store.dispatch("updateFolders",{fileid:e.fileid,files:i,folders:t}),this.$store.dispatch("updateFiles",{folder:e,files:i,folders:t})}catch(n){n.response&&n.response.status&&(404===n.response.status?(this.error=404,setTimeout(()=>{this.$router.push({name:this.$route.name})},3e3)):this.error=n),console.error("Error fetching album data",n)}finally{this.$emit("update:loading",!1)}}}},k=t(670),F={insert:"head",singleton:!1},E=(v()(k.a,F),k.a.locals,Object(g.a)(y,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return 404===n.error?t("EmptyContent",{attrs:{"illustration-name":"folder"}},[n._v("\n\t"+n._s(n.t("photos","This folder does not exists"))+"\n")]):n.error?t("EmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):n.loading?n._e():t("div",[n.folder?t("Navigation",n._b({key:"navigation",attrs:{"root-title":n.rootTitle,"show-actions":!0}},"Navigation",n.folder,!1)):n._e(),n._v(" "),n.isEmpty?t("EmptyContent",{key:"emptycontent",attrs:{"illustration-name":"empty"}},[n._v("\n\t\t"+n._s(n.t("photos","No photos in here"))+"\n\t")]):t("div",{staticClass:"grid-container"},[t("VirtualGrid",{ref:"virtualgrid",attrs:{items:n.contentList,"get-column-count":function(){return n.gridConfig.count},"get-grid-gap":function(){return n.gridConfig.gap}}})],1)],1)}),[],!1,null,"1dcce9f0",null));e.default=E.exports}}]);
//# sourceMappingURL=photos-8.js.map?v=3570a1320bfa5196f571