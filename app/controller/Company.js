Ext.define("AJ.controller.Company", {
    extend: "Ext.app.Controller",
    
    stores: [
        "StoreCompanyJobs",
        "StoreApplicant"
    ],
    
    views: [
        "company.CompanyListContext",
        "company.CompanyDetail",
        "company.CompanyForm",
        "company.CompanyJobs",
        "company.CompanyJobsList",
        "company.CompanyJobsListContext",
        "job.ApplicantList"
    ],
    
    init: function(){
        
        Ext.widget("company-detail").show();
        
        this.control({
            
            // grid company contextmenu
            "companylist": {
                itemcontextmenu: this.showContext
            },
            "company-jobslist": {
                itemcontextmenu: this.showJobsListContext,
                selectionchange: this.updateApaplicantProxyStore
            },
            
            // companylist context
            "contextmenu-company [action='detail']": {
                click: this.detailCompany
            },
            "contextmenu-company [action='show_jobs']": {
                click: this.showJobs
            },
            
            // company jobs list context
            "contextmenu-company-jobslist [action='detail']": {
                click: function(){
                    this.getApplication().getController('Job').showJobDetail(this.selectedRecordJob);
                }
            },
            "contextmenu-company-jobslist [action='show_applicant']": {
                click: this.showJobsApplicant
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
    
    showJobsListContext: function(view, record, item, index, e){
        e.stopEvent();
        var menu = Ext.getCmp("contextmenu-company-jobslist");
        if(! menu){
            menu = Ext.widget("contextmenu-company-jobslist");
        }
        
        this.selectedRecordJob = record;
        menu.showAt(e.getXY());
    },
    
    showJobsApplicant: function(){
        var rec =this.selectedRecordJob,
                grid = Ext.getCmp("applicantlist"),
                store = grid.getStore();
        
        if(grid.getCollapsed()){
            var title = grid.title.split("&rsaquo;");
            grid.setTitle(title[0].trim() +" &rsaquo; "+ rec.get("title"));
            grid.expand();
        }
        
        store.on("beforeload", function(store){
            store.getProxy().extraParams = {};
            store.getProxy().extraParams.job_id = rec.get("job_id");
        });
        store.load();
    },
    
    updateApaplicantProxyStore: function(sm, record){
        var grid = Ext.getCmp("applicantlist");
        if(! grid.getCollapsed()){
            var title = grid.title.split("&rsaquo;");
            grid.setTitle(title[0].trim() +" &rsaquo; "+ record[0].get("title"));
            grid.getStore().on("beforeload", function(store){
                store.getProxy().extraParams = {};
                store.getProxy().extraParams.job_id = record[0].get("job_id");
            });
        }
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
            form = Ext.widget("company-jobs", {
                title: "Jobs",
                margin: "-1 -1 0"
            });
            tab.add(form);
        }

        tab.setActiveTab(form);
    }
    
});