Ext.define("AJ.view.seeker.SeekerDetailPreference", {
    extend: "Ext.grid.Panel",
    alias: "widget.seekerpreference",
    id: "seekerpreference",
    
    title: lang("preference"),
    store: "StoreSeekerPreference",
    
    initComponent: function(){
        Ext.apply(this, {
            columns: [
                {xtype: "rownumberer", width: 35},
                {text: lang("work_location"),    dataIndex: "work_location",    width: 150},
                {text: lang("work_type"),        dataIndex: "work_type",        width: 150},
                {text: lang("expected_salary"),  dataIndex: "expected_salary",  xtype: "numbercolumn",  format: "0,000",     align: "right", width: 150},
                {text: lang("date_create"),      dataIndex: "date_create",      xtype: "datecolumn",    format: "d-m-Y H:i", hidden: true},
                {text: lang("date_modified"),    dataIndex: "date_modified",    xtype: "datecolumn",    format: "d-m-Y H:i", hidden: true}
            ],
            
            listeners: {
                afterrender: function(grid){
                    grid.getStore().load({
                        params: {seeker_id: 2}
                    });
                }
            }
        });
        
        this.callParent(arguments);
    }    
});