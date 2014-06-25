Ext.define("AJ.controller.Company", {
    extend: "Ext.app.Controller",
    
    views: [
        'menu.member.CompanyContext'
    ],
    
    init: function(){
        
        this.control({
            
            // grid company contextmenu
            "panel-company": {
                /**
                containercontextmenu: function(view, e){
                    e.stopEvent();
                },/**/
                itemcontextmenu: this.showContext
            },
            
            // context item click
            "contextmenu-company [action='detail']": {
                click: this.detailCompany
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
        var rec = this.selectedRecord;
        console.log(rec);
    }
    
});