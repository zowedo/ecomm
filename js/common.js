function getURLVar(t){var e=[],o=String(document.location).split("?");if(o[1]){var a=o[1].split("&");for(i=0;i<a.length;i++){var n=a[i].split("=");n[0]&&n[1]&&(e[n[0]]=n[1])}return e[t]?e[t]:""}}$(window).load(function(){setOrientation(!1),setTimeout(function(){var t=$(".details .upper-detail > h4").text();$(".customerpartner-profile .product-thumb h4.c_vendor_name").text(t)},3e3);var t=$(".custom-review-form .cireview-wrap .cireviews").length;console.log(t),$(".for-view-all .ViewTxt").click(function(){console.log("click"),$(this).html(function(t,e){return'View Less <i class="fa fa-angle-right rigt-anch"></i>'==e?'View All <i class="fa fa-angle-right rigt-anch"></i>':'View Less <i class="fa fa-angle-right rigt-anch"></i>'}),$(".custom-review-form .cireview-wrap .cireviews:gt(2)").toggle()});var e=$("#tab-product-reviews .review-container").length;console.log(e),$(".ProfilVTit a.ViewTxt").click(function(){console.log("click"),$(this).html(function(t,e){return'View Less <i class="fa fa-angle-right rigt-anch"></i>'==e?'View All <i class="fa fa-angle-right rigt-anch"></i>':'View Less <i class="fa fa-angle-right rigt-anch"></i>'}),$("#tab-product-reviews .review-container:gt(2)").toggle()})}),$(document).ready(function(){$(".text-danger").each(function(){var t=$(this).parent().parent();t.hasClass("form-group")&&t.addClass("has-error")}),$("#form-currency .currency-select").on("click",function(t){t.preventDefault(),$("#form-currency input[name='code']").val($(this).attr("name")),$("#form-currency").submit()}),$("#form-language .language-select").on("click",function(t){t.preventDefault(),$("#form-language input[name='code']").val($(this).attr("name")),$("#form-language").submit()}),$("#search input[name='search']").parent().find("button").on("click",function(){var t=$("base").attr("href")+"search",e=$("header #search input[name='search']").val();e&&(t+="/"+encodeURIComponent(e)),location=t}),$("#search input[name='search']").on("keydown",function(t){13==t.keyCode&&$("header #search input[name='search']").parent().find("button").trigger("click")}),$("#menu .dropdown-menu").each(function(){var t=$("#menu").offset(),e=$(this).parent().offset().left+$(this).outerWidth()-(t.left+$("#menu").outerWidth());e>0&&$(this).css("margin-left","-"+(e+10)+"px")}),$("#list-view").click(function(){$("#content .product-grid > .clearfix").remove(),$("#content .row > .product-grid").attr("class","product-layout product-list col-xs-12"),$("#grid-view").removeClass("active"),$("#list-view").addClass("active"),localStorage.setItem("display","list")}),$("#grid-view").click(function(){var t=$("#column-right, #column-left").length;2==t?$("#content .product-list").attr("class","product-layout product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12"):1==t?$("#content .product-list").attr("class","product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12"):$("#content .product-list").attr("class","product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12"),$("#list-view").removeClass("active"),$("#grid-view").addClass("active"),localStorage.setItem("display","grid")}),"list"==localStorage.getItem("display")?($("#list-view").trigger("click"),$("#list-view").addClass("active")):($("#grid-view").trigger("click"),$("#grid-view").addClass("active")),$(document).on("keydown","#collapse-checkout-option input[name='email'], #collapse-checkout-option input[name='password']",function(t){13==t.keyCode&&$("#collapse-checkout-option #button-login").trigger("click")}),$("[data-toggle='tooltip']").tooltip({container:"body"}),$(document).ajaxStop(function(){$("[data-toggle='tooltip']").tooltip({container:"body"})})});var cart={add:function(t,e){$.ajax({url:"index.php?route=checkout/cart/add",type:"post",data:"product_id="+t+"&quantity="+(void 0!==e?e:1),dataType:"json",beforeSend:function(){$("#cart > button").button("loading")},complete:function(){$("#cart > button").button("reset")},success:function(t){$(".alert, .text-danger").remove(),t.redirect&&(location=t.redirect),t.success&&($("#content").parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> '+t.success+' <button type="button" class="close" data-dismiss="alert">&times;</button></div>'),setTimeout(function(){$("#cart > button").html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> '+t.total+"</span>")},100),$("html, body").animate({scrollTop:0},"slow"),$("#cart > ul").load("index.php?route=common/cart/info ul li"))},error:function(t,e,o){alert(o+"\r\n"+t.statusText+"\r\n"+t.responseText)}})},update:function(t,e){$.ajax({url:"index.php?route=checkout/cart/edit",type:"post",data:"key="+t+"&quantity="+(void 0!==e?e:1),dataType:"json",beforeSend:function(){$("#cart > button").button("loading")},complete:function(){$("#cart > button").button("reset")},success:function(t){setTimeout(function(){$("#cart > button").html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> '+t.total+"</span>")},100),"checkout/cart"==getURLVar("route")||"checkout/checkout"==getURLVar("route")?location="index.php?route=checkout/cart":$("#cart > ul").load("index.php?route=common/cart/info ul li")},error:function(t,e,o){alert(o+"\r\n"+t.statusText+"\r\n"+t.responseText)}})},remove:function(t){$.ajax({url:"index.php?route=checkout/cart/remove",type:"post",data:"key="+t,dataType:"json",beforeSend:function(){$("#cart > button").button("loading")},complete:function(){$("#cart > button").button("reset")},success:function(t){setTimeout(function(){$("#cart > button").html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> '+t.total+"</span>")},100),"checkout/cart"==getURLVar("route")||"checkout/checkout"==getURLVar("route")?location="index.php?route=checkout/cart":$("#cart > ul").load("index.php?route=common/cart/info ul li")},error:function(t,e,o){alert(o+"\r\n"+t.statusText+"\r\n"+t.responseText)}})}},voucher={add:function(){},remove:function(t){$.ajax({url:"index.php?route=checkout/cart/remove",type:"post",data:"key="+t,dataType:"json",beforeSend:function(){$("#cart > button").button("loading")},complete:function(){$("#cart > button").button("reset")},success:function(t){setTimeout(function(){$("#cart > button").html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> '+t.total+"</span>")},100),"checkout/cart"==getURLVar("route")||"checkout/checkout"==getURLVar("route")?location="index.php?route=checkout/cart":$("#cart > ul").load("index.php?route=common/cart/info ul li")},error:function(t,e,o){alert(o+"\r\n"+t.statusText+"\r\n"+t.responseText)}})}},wishlist={add:function(t){$.ajax({url:"index.php?route=account/wishlist/add",type:"post",data:"product_id="+t,dataType:"json",success:function(t){$(".alert").remove(),t.redirect&&(location=t.redirect),t.success&&$("#content").parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> '+t.success+' <button type="button" class="close" data-dismiss="alert">&times;</button></div>'),$("#wishlist-total span").html(t.total),$("#wishlist-total").attr("title",t.total)},error:function(t,e,o){alert(o+"\r\n"+t.statusText+"\r\n"+t.responseText)}})},remove:function(){}},compare={add:function(t){$.ajax({url:"index.php?route=product/compare/add",type:"post",data:"product_id="+t,dataType:"json",success:function(t){$(".alert").remove(),t.success&&($("#content").parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> '+t.success+' <button type="button" class="close" data-dismiss="alert">&times;</button></div>'),$("#compare-total").html(t.total),$("html, body").animate({scrollTop:0},"slow"))},error:function(t,e,o){alert(o+"\r\n"+t.statusText+"\r\n"+t.responseText)}})},remove:function(){}};function addMychoiseAfterLogin(){$("#ozxmod_login_modal").modal("show"),$(".form-group").each(function(){$(this).removeClass("has-error")}),$("#become_vendor").remove()}$(document).delegate(".agree","click",function(t){t.preventDefault(),$("#modal-agree").remove();var e=this;$.ajax({url:$(e).attr("href"),type:"get",dataType:"html",success:function(t){html='<div id="modal-agree" class="modal">',html+='  <div class="modal-dialog">',html+='    <div class="modal-content">',html+='      <div class="modal-header">',html+='        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',html+='        <h4 class="modal-title">'+$(e).text()+"</h4>",html+="      </div>",html+='      <div class="modal-body">'+t+"</div>",html+="    </div",html+="  </div>",html+="</div>",$("body").append(html),$("#modal-agree").modal("show")}})}),function(t){t.fn.autocomplete=function(e){return this.each(function(){this.timer=null,this.items=new Array,t.extend(this,e),t(this).attr("autocomplete","off"),t(this).on("focus",function(){this.request()}),t(this).on("blur",function(){setTimeout(function(t){t.hide()},200,this)}),t(this).on("keydown",function(t){switch(t.keyCode){case 27:this.hide();break;default:this.request()}}),this.click=function(e){e.preventDefault(),value=t(e.target).parent().attr("data-value"),value&&this.items[value]&&this.select(this.items[value])},this.show=function(){var e=t(this).position();t(this).siblings("ul.dropdown-menu").css({top:e.top+t(this).outerHeight(),left:e.left}),t(this).siblings("ul.dropdown-menu").show()},this.hide=function(){t(this).siblings("ul.dropdown-menu").hide()},this.request=function(){clearTimeout(this.timer),this.timer=setTimeout(function(e){e.source(t(e).val(),t.proxy(e.response,e))},200,this)},this.response=function(e){if(html="",e.length){for(i=0;i<e.length;i++)this.items[e[i].value]=e[i];for(i=0;i<e.length;i++)e[i].category||(html+='<li data-value="'+e[i].value+'"><a href="#">'+e[i].label+"</a></li>");var o=new Array;for(i=0;i<e.length;i++)e[i].category&&(o[e[i].category]||(o[e[i].category]=new Array,o[e[i].category].name=e[i].category,o[e[i].category].item=new Array),o[e[i].category].item.push(e[i]));for(i in o)for(html+='<li class="dropdown-header">'+o[i].name+"</li>",j=0;j<o[i].item.length;j++)html+='<li data-value="'+o[i].item[j].value+'"><a href="#">&nbsp;&nbsp;&nbsp;'+o[i].item[j].label+"</a></li>"}html?this.show():this.hide(),t(this).siblings("ul.dropdown-menu").html(html)},t(this).after('<ul class="dropdown-menu"></ul>'),t(this).siblings("ul.dropdown-menu").delegate("a","click",t.proxy(this.click,this))})}}(window.jQuery);var addLikes={add:function(t,e,o){$.ajax({url:"index.php?route=account/wishlist/manageLike",type:"post",data:"product_id="+t,dataType:"json",success:function(a){if(a.success){var i=$(".totalLikes_"+t).html("");i=parseInt($(".totalLikesIntput_"+t).val()),"whiteHeartImage"==e||"redOutlineHertImage"==e?(i+=1,$("."+o).attr("src","catalog/view/theme/default/image/red_heart.png"),$("."+o).attr("onclick","addMyChoice('redHeartImage', '"+t+"', '"+o+"')")):"redHeartImage"==e&&((i-=1)>0?($("."+o).attr("src","catalog/view/theme/default/image/heart_read_outline.png"),$("."+o).attr("onclick","addMyChoice('redOutlineHertImage', '"+t+"', '"+o+"')")):($("."+o).attr("src","catalog/view/theme/default/image/heart_outline.png"),$("."+o).attr("onclick","addMyChoice('whiteHeartImage', '"+t+"', '"+o+"')"))),$(".totalLikesIntput_"+t).val(i),0!=(i=formatLikes(i))&&"0"!=i||(i=""),$(".totalLikes_"+t).html(i)}else a.error&&("login error"==a.error?($("#content").parent().before('<div class="alert alert-warning"><i class="fa fa-check-circle"></i> Your session has been expired. Please login to use the services. <button type="button" class="close" data-dismiss="alert">&times;</button></div>'),$("html, body").animate({scrollTop:0},"slow"),setTimeout(function(){$("#ozxmod_signup_modal").modal("show"),$(".form-group").each(function(){$(this).removeClass("has-error")}),$("#become_vendor").remove()},2e3)):($("#content").parent().before('<div class="alert alert-warning"><i class="fa fa-check-circle"></i> '+a.error+' <button type="button" class="close" data-dismiss="alert">&times;</button></div>'),$("html, body").animate({scrollTop:0},"slow")))},error:function(t,e,o){$("#content").parent().before('<div class="alert alert-warning"><i class="fa fa-check-circle"></i> Sorry! we are unable to process your request. Please contact our support team.<button type="button" class="close" data-dismiss="alert">&times;</button></div>'),$("html, body").animate({scrollTop:0},"slow")}})},remove:function(){}};function addMyChoice(t,e,o){"undefined"!=t&&"undefined"!=e&&(!1===isLoggedIn?addMychoiseAfterLogin():addLikes.add(e,t,o))}function formatLikes(t){return t<1e3?t:t>=1e3&&t<1e4?String(t).charAt(0)+"K":t>=1e4&&t<1e5?String(t).charAt(0)+String(t).charAt(1)+"K":t>=1e5&&t<1e6?String(t).charAt(0)+String(t).charAt(1)+String(t).charAt(2)+"K":t>=1e6&&t<1e7?String(t).charAt(0)+"M":t>=1e7&&t<1e8?String(t).charAt(0)+String(t).charAt(1)+"M":t>=1e8&&t<1e9?String(t).charAt(0)+String(t).charAt(1)+String(t).charAt(2)+"M":t>=1e9&&t<1e10?String(t).charAt(0)+"B":t}function setOrientation(t){console.log("@RELOAD = "+t);var e="portrait";switch(window.orientation){case-90:case 90:e="landscape",$("#logo a img").attr("src","https://devmain.zowedo.com/zo-images/catalog/logo/new_horizontal_zowedocom_logo_findbookpaydone.png"),$("#smartbanner").css("cssText","display:none !important"),$("html, body").animate({scrollTop:0},"slow");break;default:e="portrait",$("html, body").animate({scrollTop:0})}var o="index.php?route=common/header/setDeviceOrientation&orientation="+e;request=$.ajax({url:o,type:"GET"}),request.done(function(o,a,i){(""==getCookie("orientation")&&"landscape"==e||t)&&location.reload()})}function getCookie(t){for(var e=t+"=",o=decodeURIComponent(document.cookie).split(";"),a=0;a<o.length;a++){for(var i=o[a];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(e))return i.substring(e.length,i.length)}return""}