"use strict";angular.module("anblogApp",["postServices"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/post/:postid",{templateUrl:"views/post.html",controller:"PostCtrl"}).when("/category/:category",{templateUrl:"views/category.html",controller:"CategoryCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("anblogApp").controller("MainCtrl",["$scope","Posts","$rootScope","Categories",function(a,b,c,d){c.pageTitle="TopPage",b.query(function(b){a.list=b},function(b){a.list=[{title:"err",err:b}]}),d.query(function(b){a.categories=b},function(b){a.categories=[["ERR",b]]})}]),angular.module("anblogApp").controller("PostCtrl",["$scope","$rootScope","$route","$routeParams","PostMeta","$location",function(a,b,c,d,e,f){a.postid=d.postid,a.myurl=f.absUrl(),e.get({postid:a.postid},function(c){b.pageTitle=c.title,a.url=c.url,a.meta=c},function(a){console.log(a)})}]),angular.module("anblogApp").controller("CategoryCtrl",["$scope","Posts","$filter","$routeParams",function(a,b,c,d){a.categoryName=d.category,b.query(function(b){a.list=c("filter")(b,{category:a.categoryName})})}]),angular.module("anblogApp").directive("facebookPlugin",function(){return{restrict:"C",link:function(a,b,c){c.$set("data-href",a.myurl);var d="undefined"!=typeof FB&&null!==FB;return d?FB.XFBML.parse(b.parent()[0]):void 0}}}),angular.module("anblogApp").directive("hatenaPlugin",["$rootScope",function(a){return{restrict:"C",link:function(b,c,d){d.$set("href","http://b.hatena.ne.jp/entry/"+window.escape(b.myurl)),d.$set("data-hatena-bookmark-title",a.pageTitle),Hatena.Bookmark.BookmarkButton.setup()}}}]),angular.module("anblogApp").directive("insertScript",function(){return{restrict:"C",link:function(a,b,c){var d=document.createElement("script");d.type="text/javascript",d.src=c.src,b[0].appendChild(d)}}});