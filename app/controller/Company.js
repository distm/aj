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

    init: function () {

        this.control({

            // grid company contextmenu
            "companylist": {
                itemcontextmenu: this.showContext
            },
            "company-jobslist": {
                itemcontextmenu: this.showContextJobsList,
                selectionchange: this.updateApaplicantProxyStore
            },

            // companylist context
            "contextmenu-company [action='detail']": {
                click: this.detailCompany
            },
            "contextmenu-company [action='show_jobs']": {
                click: this.showJobs
            },
            "contextmenu-company [action='update-company-status']": {
                click: this.updateCompanyStatus
            },

            // company jobs list context
            "contextmenu-company-jobslist [action='detail']": {
                click: function () {
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

    detailCompany: function () {
        var rec = this.selectedRecord,
            win = Ext.getCmp("company-detail");

        if (!win) {
            win = Ext.widget("company-detail");
        }

        win.setTitle(rec.get("name"));
        win.show();

        var tab = Ext.getCmp("tab-company-detail"),
            form = tab.down("company-formdetail");

        if (!form) {
            form = Ext.widget("company-formdetail", {
                margin: "-1 -1 0"
            });
            tab.add(form);
        }

        tab.setActiveTab(form);
        form.loadRecord(rec);
    },

    saveCompany: function (btn) {
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
            success: function (frm, action) {
                Ext.Msg.alert('Success', action.result.message, function () {
                    win.hide();
                    Ext.getCmp("companylist").getStore().reload();
                });
            },
            failure: function (frm, action) {
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

    showContext: function (view, record, item, index, e) {
        e.stopEvent();
        var menu = Ext.getCmp("contextmenu-company");
        if (!menu) {
            menu = Ext.widget("contextmenu-company");
        }

        this.selectedRecord = record;
        menu.on("beforeshow", function(){
            // set iconCls active status
            var status = record.get("status"),
                btns = menu.query("[action='update-company-status']");
            Ext.Array.each(btns, function(btn){
                btn.setDisabled(btn.id == "company-status-"+status ? true : false);
                btn.setIconCls(btn.id == "company-status-"+status ? "sm-tick" : "");
            });
        });
        menu.showAt(e.getXY());
    },

    showContextJobsList: function (view, record, item, index, e) {
        e.stopEvent();
        var menu = Ext.getCmp("contextmenu-company-jobslist");
        if (!menu) {
            menu = Ext.widget("contextmenu-company-jobslist");
        }

        this.selectedRecordJob = record;
        menu.showAt(e.getXY());
    },

    showJobs: function () {
        var rec = this.selectedRecord,
            win = Ext.getCmp("company-detail");

        if (!win) {
            win = Ext.widget("company-detail");
        }

        win.setTitle(rec.get("name"));
        win.show();

        var tab = Ext.getCmp("tab-company-detail"),
            jobs_list = Ext.getCmp("company-jobs");

        if (!jobs_list) {
            jobs_list = Ext.widget("company-jobs", {
                margin: "-1 -1 0"
            });
            tab.add(jobs_list);
        }
        
        // load store
        var store = jobs_list.down("grid").getStore();
        
        store.on("beforeload", function(s){
            s.getProxy().extraParams.company_id = rec.get("company_id");
        });
        store.load();
        
        tab.setActiveTab(jobs_list);
    },

    showJobsApplicant: function () {
        var rec = this.selectedRecordJob,
            grid = Ext.getCmp("applicantlist"),
            store = grid.getStore();

        if (grid.getCollapsed()) {
            var title = grid.title.split("&rsaquo;");
            grid.setTitle(title[0].trim() + " &rsaquo; " + rec.get("title"));
            grid.expand();
        }

        store.on("beforeload", function (store) {
            store.getProxy().extraParams = {};
            store.getProxy().extraParams.job_id = rec.get("job_id");
        });
        store.load();
    },

    updateApaplicantProxyStore: function (sm, record) {
        var grid = Ext.getCmp("applicantlist");
        if (!grid.getCollapsed()) {
            if(record.length > 0){
                var title = grid.title.split("&rsaquo;");
                grid.setTitle(title[0].trim() + " &rsaquo; " + record[0].get("title"));
                grid.getStore().on("beforeload", function (store) {
                    store.getProxy().extraParams = {};
                    store.getProxy().extraParams.job_id = record[0].get("job_id");
                });
            } else {
                grid.setTitle(lang("applicant_list"));
                grid.collapse();
            }
        }
    },
    
    updateCompanyStatus: function(btn){
        var status = btn.id.replace("company-status-", ""),
            rec = this.selectedRecord;
            
        Ext.Ajax.request({
            url: API_URL +"company/update-status",
            params: {company_id: rec.get("company_id"), status: status},
            success: function(r){
                var o = Ext.decode(r.responseText);
                if(o.success) {
                    Ext.Msg.alert(lang("success"), o.message, function(){
                        Ext.getCmp("companylist").getStore().load();
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