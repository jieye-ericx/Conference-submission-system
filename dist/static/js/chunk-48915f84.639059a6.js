(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48915f84"],{d95a:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{ref:"filterTable",attrs:{data:e.tableData,stripe:"","highlight-current-row":""},on:{"row-click":e.rowClick}},[n("el-table-column",{attrs:{align:"center",prop:"type",label:"类别",width:"140"}}),n("el-table-column",{attrs:{align:"center",prop:"status",label:"状态",width:"100",filters:e.paperStatus,"filter-method":e.filterPaperStatus,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:e.paperStatus[t.row.status].color}},[e._v(e._s(e.paperStatus[t.row.status].text))])]}}])}),n("el-table-column",{attrs:{align:"center",prop:"createTime",label:"提交日期",sortable:"",width:"180","column-key":"date",formatter:e.formatterPaperDate}}),n("el-table-column",{attrs:{"show-overflow-tooltip":"",align:"center",prop:"title",label:"标题",width:"280"}}),e._t("column"),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("option",(function(){return[e._v(" slot ")]}),{scope:t})]}}],null,!0)})],2),n("el-col",{staticStyle:{"text-align":"center","margin-top":"20px"}},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next,-> , sizes,total",total:e.pagination.totalCount,"page-size":e.pagination.pageSize,"current-page":e.pagination.currPage},on:{"current-change":e.handlePageChange,"size-change":e.handlePageSizeChange}})],1)],1)},r=[],i=n("5530"),o=n("1da1"),u=(n("99af"),n("96cf"),n("2f62")),c={name:"PaperList",data:function(){return{tableData:[],pagination:{totalCount:1,pageSize:10,totalPage:1,curPage:1}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData({curPage:e.pagination.curPage,limit:e.pagination.pageSize});case 2:case"end":return t.stop()}}),t)})))()},computed:Object(i["a"])({},Object(u["b"])(["paperStatus"])),methods:{getData:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r,i,o,u,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.curPage,r=void 0===a?1:a,i=e.limit,o=void 0===i?10:i,u=e.status,n.next=3,t.$parent.getData({curPage:r,limit:o,status:u});case 3:for(s in c=n.sent.data,t.tableData=c.list,t.pagination)t.pagination[s]=c[s];case 6:case"end":return n.stop()}}),n)})))()},formatterPaperDate:function(e,t,n,a){var r=new Date(n);return"".concat(r.getFullYear(),"年").concat(r.getMonth()+1,"月").concat(r.getDate(),"日")},filterPaperStatus:function(e,t){return t.status===e},filterHandler:function(e,t,n){var a=n["property"];return t[a]===e},handlePageChange:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getData({curPage:e,limit:t.pagination.pageSize});case 2:case"end":return n.stop()}}),n)})))()},handlePageSizeChange:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getData({curPage:t.pagination.curPage,limit:e});case 2:case"end":return n.stop()}}),n)})))()},rowClick:function(e,t,n){var a=e.reviewerInviteId?e.reviewerInviteId:-1;this.$emit("open-paper-detail",e.submitId,a)}}},s=c,l=n("2877"),p=Object(l["a"])(s,a,r,!1,null,null,null);t["a"]=p.exports},ee40:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PaperTable",{scopedSlots:e._u([{key:"column",fn:function(){return[n("el-table-column",{attrs:{align:"center",prop:"firstAuthor",label:"第一作者",width:"100"}})]},proxy:!0},{key:"option",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(n){return n.stopPropagation(),e.handleShowSuggestion(t.scope.$index,t.scope.row)}}},[e._v("查看意见 ")])]}}])}),n("el-dialog",{attrs:{title:"反馈意见",visible:e.dialogSuggestionVisible,width:"30%",center:"","append-to-body":""},on:{"update:visible":function(t){e.dialogSuggestionVisible=t}}},[n("div",[e._v(e._s(e.succ))]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})])],1)},r=[],i=n("1da1"),o=n("5530"),u=(n("96cf"),n("2f62")),c=n("d95a"),s={name:"AdminFinished",components:{PaperTable:c["a"]},data:function(){return{succ:"",dialogSuggestionVisible:!1}},computed:Object(o["a"])({},Object(u["b"])([])),created:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{getData:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r,i,o,u,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.curPage,r=void 0===a?1:a,i=e.limit,o=void 0===i?10:i,u=e.status,c=void 0===u?12:u,n.next=3,t.$API.adminPaperList({curPage:r,limit:o,status:c});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},handleShowSuggestion:function(e,t){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$API.getPaperSuggestion({submitId:t.submitId});case 2:a=e.sent,200===a.code?(n.dialogSuggestionVisible=!0,n.succ=a.data.suggestion):n.$message.error("获取意见失败");case 4:case"end":return e.stop()}}),e)})))()}}},l=s,p=n("2877"),g=Object(p["a"])(l,a,r,!1,null,null,null);t["default"]=g.exports}}]);