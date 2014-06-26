Ext.define("AJ.controller.Company", {
    extend: "Ext.app.Controller",
    
    views: [
        "company.GridContext",
        "company.WindowDetail",
        "company.FormDetail"
    ],
    
    init: function(){
        
        this.control({
            
            // grid company contextmenu
            "panel-company": {
                itemcontextmenu: this.showContext
            },
            
            // context item click
            "contextmenu-company [action='detail']": {
                click: this.detailCompany
            },
            "contextmenu-company [action='show_jobs']": {
                click: this.showJobs
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