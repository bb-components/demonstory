Do("dui:overlay",function(){var a=window.Ark||{};window.Ark=a;a.alert=function(c){if(a.confirm){a.confirm.clearTimeout()}var b=new $.Deferred(),d=dui.overlay();c.width=c.width||400;d.setConfig(c).render();d.panel.addClass("dialog-alert");d.panel.removeClass("dialog-confirm");d.show();if(c.timeout){d.panel.find(".lnk-close").one("click",function(f){a.alert.clearTimeout()});a.alert.timeoutHandler=setTimeout(function(){a.alert.clearTimeout();b.resolve();d.close()},c.timeout||1500)}return d};a.alert.clearTimeout=function(){var b=a.alert;clearTimeout(b.timeoutHandler);b.timeoutHandler=null}});