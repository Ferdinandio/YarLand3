function OnGoMenuFormLink(a){var b=a.options[a.selectedIndex].value,c=a.options[a.selectedIndex].className;a.selectedIndex=0;a.blur();b&&(NewWin=window.open(b,c),window.NewWin.focus())}function popupwnd(a,b,c,d,e,g,h,k,l,f,m){-1==k&&(k=screen.width/2-f/2);-1==l&&(l=screen.height/2-m/2);this.open(a,"","toolbar="+b+",menubar="+c+",location="+d+",scrollbars="+g+",resizable="+e+",status="+h+",left="+k+",top="+l+",width="+f+",height="+m)}
function ShowObject(a,b){var c=document.getElementById(a);c&&(c.style.visibility=b?"visible":"hidden")}function MoveObject(a,b,c){if(a=document.getElementById(a))a.style.left=b+"px",a.style.top=c+"px"}function Rotate(a,b){$("#"+a).wwbrotate(b)}function SetImage(a,b){var c=document.getElementById(a);c&&(c.src=b)}function SetStyle(a,b){var c=document.getElementById(a);c&&(c.className=b)}
function Animate(a,b,c,d,e,g,h,k){var l="#"+a,f={};""!=b&&(f.left=b);""!=c&&(f.top=c);""!=d&&(f.width=d);""!=e&&(f.height=e);""!=g&&(f.opacity=g/100);0==a.indexOf("wb_")&&(a="#"+a.substring(3),$(a).stop().animate(f,h));""!=k&&(f.rotate=k);$(l).stop().animate(f,h)}function LoadValue(a,b,c){var d=document.getElementById(a);if(d&&(b=window[b+"Storage"])&&null!=b.getItem(a))switch(c){case 1:d.checked="true"==b.getItem(a);break;case 2:d.selectedIndex=b.getItem(a);break;default:d.value=b.getItem(a)}}
function StoreValue(a,b,c){var d=document.getElementById(a);if(d&&(b=window[b+"Storage"]))switch(c){case 1:b.setItem(a,d.checked);break;case 2:b.setItem(a,d.selectedIndex);break;default:b.setItem(a,d.value)}}function PlayAudio(a){(a=document.getElementById(a))&&a.play()}function PauseAudio(a){(a=document.getElementById(a))&&a.pause()}function StopAudio(a){if(a=document.getElementById(a))a.pause(),a.currentTime=0}
function ToggleHelper(a,b,c,d,e,g){b="#"+b;var h={},k,l="horizontal vertical left right up down".split(" ");for(i=0;6>i;i++)k=d.indexOf(l[i]),-1!=k&&(h={direction:l[i]},d=d.substring(0,k));"hidden"==$(b).css("visibility")&&$(b).css("display","none").css("visibility","visible");"undefined"!=typeof g&&(h.easing=g);1==a?0==e?$(b).toggle():$(b).toggle(d,h,e):""==d?c?$(b).css("display",""):$(b).css("display","none"):1==c?$(b).show(d,h,e):$(b).hide(d,h,e)}
function ShowObjectWithEffect(a,b,c,d,e){ToggleHelper(0,a,b,c,d,e)}function Toggle(a,b,c,d){ToggleHelper(1,a,1,b,c,d)}function ToggleStyle(a,b,c,d){a="#"+a;0==c?$(a).toggleClass(b):$(a).toggleClass(b,c,d)}function AnimationResume(a){$("#"+a).css({"-webkit-animation-play-state":"running","-moz-animation-play-state":"running","-ms-animation-play-state":"running","animation-play-state":"running"})}
function AnimationPause(a){$("#"+a).css({"-webkit-animation-play-state":"paused","-moz-animation-play-state":"paused","-ms-animation-play-state":"paused","animation-play-state":"paused"})}
function AnimateCss(a,b,c,d){a="#"+a;$(a).css({"-webkit-animation-name":"","-moz-animation-name":"","-ms-animation-name":"","animation-name":""});$(a).width();$(a).css({"-webkit-animation-delay":c+"ms","-moz-animation-delay":c+"ms","animation-delay":c+"ms","-webkit-animation-duration":d+"ms","-moz-animation-duration":d+"ms","animation-duration":d+"ms","-webkit-animation-fill-mode":"both","-moz-animation-fill-mode":"both","animation-fill-mode":"both","-webkit-animation-name":b,"-moz-animation-name":b,
"-ms-animation-name":b,"animation-name":b}).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){})}function TransformRotate(a,b,c){$(a).css({"-webkit-transform":"rotate"+b+"("+c+"deg)","-moz-transform":"rotate"+b+"("+c+"deg)","-ms-transform":"rotate"+b+"("+c+"deg)","-o-transform":"rotate"+b+"("+c+"deg)",transform:"rotate"+b+"("+c+"deg)"})}function ShowPanel(a,b){b&&(b.preventDefault(),b.stopPropagation());var c=$("#"+a+"_panel");$.panel.show(c)}
function HidePanel(a,b){b&&(b.preventDefault(),b.stopPropagation());var c=$("#"+a+"_panel");$.panel.hide(c)}function ShowObjectMobile(a,b,c){var d="#"+a;c=c?$(d).parent():$(d);a=$("label[for='"+a+"']");0<a.length&&(c=c.add(a));b?c.show():c.hide()}function ResponsiveVideo(a){var b="#"+a,c=16/9;a=$(b).width();var d=$(b).height(),b=$(b+" iframe");a/c<d?(c=Math.ceil(d*c),b.width(c).height(d).css({left:(a-c)/2,top:0})):(c=Math.ceil(a/c),b.width(a).height(c).css({left:0,top:(d-c)/2}))}
(function(a){a.fn.inViewPort=function(b){var c=a(window).scrollTop(),d=c+a(window).height(),e=a(this).offset().top,g=e+a(this).height();return(!0===b?e:g)<=d&&(!0===b?g:e)>=c}})(jQuery);