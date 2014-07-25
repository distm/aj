Ext.define("AJ.view.seeker.SeekerDetailReference", {
    extend: "Ext.grid.Panel",
    alias: "widget.seekerreference",
    id: "seekerreference",
    
    title: lang("reference"),
    store: "StoreSeekerReference",
    emptyText: lang("msg_grid_empty_text"),
    
    initComponent: function(){
        Ext.apply(this, {
            columns: [
                {xtype: "rownumberer", width: 35},
                {text: lang("name"),            dataIndex: "name",          width: 150},
                {text: lang("phone"),           dataIndex: "phone",         width: 150},
                {text: lang("email"),           dataIndex: "email",         width: 150},
                {text: lang("company"),         dataIndex: "company",       width: 150},
                {text: lang("position"),        dataIndex: "position",      width: 150},
                {text: lang("relationship"),    dataIndex: "relationship",  width: 150},
                {text: lang("date_create"),     dataIndex: "date_create",   xtype: "datecolumn",    format: "d-m-Y H:i", hidden: true},
                {text: lang("date_modified"),   dataIndex: "date_modified", xtype: "datecolumn",    format: "d-m-Y H:i", hidden: true}
            ],
            
            dockedItems: [
                {
                    xtype: "pagingtoolbar",
                    store: "StoreSeekerReference",
                    dock: "bottom"
                }
            ]
        });
        
        this.callParent(arguments);
    }    
});