Ext.define("AJ.controller.Seeker", {
    extend: "Ext.app.Controller",

    stores: [
        "StoreSeeker",
        "StoreSeekerBiodata",
        "StoreSeekerExperience",
        "StoreSeekerLanguageSkill",
        "StoreSeekerPreference",
        "StoreSeekerQualification",
        "StoreSeekerReference",
        "StoreSeekerSkill",
        "StoreJobAppliedBySeeker"
    ],

    views: [
        "seeker.SeekerList",
        "seeker.SeekerListContext",
        "seeker.SeekerDetail",
        "seeker.SeekerDetailBiodata",
        "seeker.SeekerDetailExperience",
        "seeker.SeekerDetailLanguageSkill",
        "seeker.SeekerDetailPreference",
        "seeker.SeekerDetailQualification",
        "seeker.SeekerDetailReference",
        "seeker.SeekerDetailSkill",
        "job.AppliedBySeeker"
    ],

    init: function () {
        
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
            "contextmenu-seeker [action='applied_job']": {
                click: this.showAppliedJob
            },
            
            // seeker detail, biodata dll
            "seekerdetail panel": {
                activate: this.activateDetailSeekerTabs
            },
            "seekerdetail seekerbiodata": {
                edit: function(editor, e){
                    e.record.reject();
                    return false;
                    if(e.record.dirty){
                        var params = {
                            record_id: e.record.get("record_id"),
                            field_name: e.record.get("field_name"),
                            field_value: e.value
                        };
                    }
                }
            }
        
        }); // end of control
    },
    
    activateDetailSeekerTabs: function(tab){
        var me = this;
        
        if(! tab.isActivated){
            if(/grid/.test(tab.bodyCls)){
                var seeker_id = me.selectedSeeker.get("seeker_id");
                Ext.Function.defer(function(){
                    tab.getStore().load({
                        params: {seeker_id: seeker_id}
                    });
                }, 100);
            }
            tab.isActivated = true;
        }
    },
    
    detailSeeker: function(){
        var rec = this.selectedSeeker,
            win = Ext.getCmp("seekerdetail");
            
        if (!win) {
            win = Ext.widget("seekerdetail", {
                modal: true
            });
        }

        var name = Ext.String.trim(rec.get("first_name") +" "+ rec.get("last_name"));
        win.setTitle(name);
        win.show();
    },
    
    showAppliedJob: function(){
        var rec = this.selectedSeeker,
            win = Ext.getCmp("jobappliedbyseeker");
        
        if(! win){
            win = Ext.widget("jobappliedbyseeker", {
                modal: true
            });
        }
        
        win.show(null, function(){
            var grid = win.down("grid"),
                store = grid.getStore();
            
            store.on("beforeload", function(s){
                s.proxy.extraParams.seeker_id = rec.get("seeker_id");
            });
            store.load();
        });
    },
    
    showContext: function (view, record, item, index, e) {
        e.stopEvent();
        var menu = Ext.getCmp("contextmenu-seeker");
        if (!menu) {
            menu = Ext.widget("contextmenu-seeker");
        }

        this.selectedSeeker = record;
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
            rec = this.selectedSeeker;
            
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