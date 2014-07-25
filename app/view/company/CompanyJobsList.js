Ext.define("AJ.view.company.CompanyJobsList", {
    extend: "Ext.grid.Panel",
    alias: "widget.company-jobslist",
    id: "company-jobslist",
    
    store: "StoreCompanyJobs",
    emptyText: lang("msg_grid_empty_text"),
    
    initComponent: function(){
        
        this.columns = [
            {xtype: "rownumberer", width: 30},
            {text: lang("title"),       width: 250, dataIndex: "title"},
            {text: lang("noa"),         width: 100, dataIndex: "noa",           align: "right"},
            {text: lang("status"),      width: 100, dataIndex: "status",
                renderer: function(v){
                    return lang(v);
                }
            },
            {text: lang("date_create"), width: 130, dataIndex: "date_create",   xtype: "datecolumn", format: "d-m-Y"},
            {text: lang("date_close"),  width: 130, dataIndex: "date_close",    xtype: "datecolumn", format: "d-m-Y"},
            {text: lang("location"),    width: 130, dataIndex: "location"},
            {text: lang("category"),    width: 130, dataIndex: "category"},
            {text: lang("job_type"),    width: 120, dataIndex: "job_type",
                renderer: function(v){
                    return lang(v);
                }
            },
            {text: lang("noj"),         width:  90, dataIndex: "noj",           align: "right"}
        ];
        
        this.dockedItems = [
            {
                xtype: "pagingtoolbar",
                store: "StoreCompanyJobs",
                dock: "bottom",
                displayInfo: true
            }
        ];
        
        this.callParent(arguments);
    }
});