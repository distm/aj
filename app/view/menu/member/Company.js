Ext.define("AJ.view.menu.member.Company", {
    extend: "Ext.grid.Panel",
    alias: "widget.panel-company",
    id: "panel-company",
    
    title: Langs.company,
    store: "member.StoreCompany",
    initComponent: function(){
        
        // define columns
        this.columns = [
            {xtype: "rownumberer",   width: 30},
            {text: Langs.name,       width: 200, dataIndex: "name"},
            {text: Langs.phone,      width: 120, dataIndex: "phone"},
            {text: Langs.reg_name,   width: 150, dataIndex: "registrant_name"},
            {text: Langs.reg_email,  width: 150, dataIndex: "registrant_email"},
            {text: Langs.status,     width: 100, dataIndex: "status"},
            {text: Langs.date_join,  width: 175, dataIndex: "date_create", xtype: "datecolumn", format: "d-M-Y H:i"}
        ];
        
        // docked items
        this.dockedItems = [
            {
                xtype: "pagingtoolbar",
                store: "member.StoreCompany",
                displayInfo: true,
                dock: "bottom"
            }
        ];
        
        // call parent
        this.callParent(arguments);
        
    }
});