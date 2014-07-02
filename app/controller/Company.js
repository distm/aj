Ext.define("AJ.controller.Company", {
    extend: "Ext.app.Controller",
    
    views: [
        "company.CompanyListContext",
        "company.CompanyDetail",
        "company.CompanyForm"
    ],
    
    init: function(){
        
        this.control({
            
            // grid company contextmenu
            "companylist": {
                itemcontextmenu: this.showContext
            },
            
            // context item click
            "contextmenu-company [action='detail']": {
                click: this.detailCompany
            },
            "contextmenu-company [action='show_jobs']": {
                click: this.showJobs
            },
            
            // form detail
            "company-formdetail button[action='save_company']": {
                click: this.saveCompany
            }
        });
        
    },
    
    showContext: function(view, record, item, index, e){
        e.stopEvent();
        var menu = Ext.getCmp("contextmenu-company");
        if(! menu){
            menu = Ext.widget("contextmenu-company");
        }
        
        this.selectedRecord = record;
        menu.showAt(e.getXY());
    },
    
    detailCompany: function(){
        var rec = this.selectedRecord,
            win = Ext.getCmp("company-detail");
        
        if(! win){
            win = Ext.widget("company-detail");
        }
        
        win.setTitle(rec.get("name"));
        win.show();
        
        var tab = Ext.getCmp("tab-company-detail"),
            form = tab.down("company-formdetail");

        if(! form){
            form = Ext.widget("company-formdetail", {
                margin: "-1 -1 0"
            });
            tab.add(form);
        }

        tab.setActiveTab(form);
        form.loadRecord(rec);
    },
    
    saveCompany: function(btn){
        var rec = this.selectedRecord,
            win = btn.up("window"),
            form = win.down("form");
        
        form.submit({
            clientValidation: true,
            url: API_URL + "company/save",
            params: {
                mode: "update",
                company_id: rec.get("company_id")
            },
            success: function(frm, action) {
                Ext.Msg.alert('Success', action.result.message, function() {
                    win.hide();
                    Ext.getCmp("companylist").getStore().reload();
                });
            },
            failure: function(frm, action) {
                switch (action.failureType) {
                    case Ext.form.action.Action.CLIENT_INVALID:
                        Ext.Msg.alert(lang("failure"), lang("msg_client_invalid"));
                        break;
                    case Ext.form.action.Action.CONNECT_FAILURE:
                        Ext.Msg.alert(lang("failure"), lang("msg_connect_failure"));
                        break;
                    case Ext.form.action.Action.SERVER_INVALID:
                        Ext.Msg.alert(lang("failure"), action.result.message);
                        break;
                }
            }
        });
    },
    
    showJobs: function(){
        var rec = this.selectedRecord,
            win = Ext.getCmp("company-detail");
        
        if(! win){
            win = Ext.widget("company-detail");
        }
        
        win.setTitle(rec.get("name"));
        win.show();
        
        var tab = Ext.getCmp("tab-company-detail"),
            form = Ext.getCmp("company-jobs");

        if(! form){
            form = Ext.create("Ext.panel.Panel", {
                title: "Jobs",
                id: "company-jobs",
                margin: "-1 -1 0",
                html: rec.get("description")
            });
            tab.add(form);
        }

        tab.setActiveTab(form);
    }
    
});