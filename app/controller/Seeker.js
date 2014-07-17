Ext.define("AJ.controller.Seeker", {
    extend: "Ext.app.Controller",

    stores: [
        "StoreSeeker",
        "StoreSeekerBiodata",
        "StoreSeekerExperience",
        "StoreSeekerLanguageSkill",
        "StoreSeekerPreference"
    ],

    views: [
        "seeker.SeekerList",
        "seeker.SeekerListContext",
        "seeker.SeekerDetail",
        "seeker.SeekerDetailBiodata",
        "seeker.SeekerDetailExperience",
        "seeker.SeekerDetailLanguageSkill",
        "seeker.SeekerDetailPreference"
    ],

    init: function () {
        
        Ext.widget("seeker-detail", {title: "Nurhadi Jogja"}).show();
    
        this.control({
            // grid event
            "seekerlist": {
                itemcontextmenu: this.showContext
            },
            
            // contextmenu event
            "contextmenu-seeker [action='detail']": {
                click: this.detailSeeker
            },
            "contextmenu-seeker [action='update-seeker-status']": {
                click: this.updateSeekerStatus
            },
            
            // seeker biodata
            "seekerbiodata": {
                edit: function(editor, e){
                    if(e.record.dirty){
                        var params = {
                            record_id: e.record.get("record_id"),
                            field_name: e.record.get("field_name"),
                            field_value: e.value
                        };
                        console.log(params);
                    }
                }
            }
        
        });
    },
    
    detailSeeker: function(){
        var rec = this.selectedRecord,
            win = Ext.getCmp("seeker-detail");
            
        if (!win) {
            win = Ext.widget("seeker-detail");
        }

        var name = Ext.String.trim(rec.get("first_name") +" "+ rec.get("last_name"));
        win.setTitle(name);
        win.show();
    },
    
    showContext: function (view, record, item, index, e) {
        e.stopEvent();
        var menu = Ext.getCmp("contextmenu-seeker");
        if (!menu) {
            menu = Ext.widget("contextmenu-seeker");
        }

        this.selectedRecord = record;
        menu.on("beforeshow", function(){
            // set iconCls active status
            var status = record.get("status"),
                btns = menu.query("[action='update-seeker-status']");
            Ext.Array.each(btns, function(btn){
                btn.setDisabled(btn.id == "seeker-status-"+status ? true : false);
                btn.setIconCls(btn.id == "seeker-status-"+status ? "sm-tick" : "");
            });
        });
        menu.showAt(e.getXY());
    },
    
    updateSeekerStatus: function(btn){
        var status = btn.id.replace("seeker-status-", ""),
            rec = this.selectedRecord;
            
        Ext.Ajax.request({
            url: API_URL +"seeker/update-status",
            params: {seeker_id: rec.get("seeker_id"), status: status},
            success: function(r){
                var o = Ext.decode(r.responseText);
                if(o.success) {
                    Ext.Msg.alert(lang("success"), o.message, function(){
                        Ext.getCmp("seekerlist").getStore().load();
                    });
                } else {
                    Ext.Msg.alert(lang("failure"), o.message);
                }
            },
            failure: function(r){
                Ext.Msg.alert(lang("failure"), lang("error_"+ r.status));
            }
        });
    }
});