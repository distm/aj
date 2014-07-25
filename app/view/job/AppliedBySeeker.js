Ext.define("AJ.view.job.AppliedBySeeker", {
    extend: "Ext.window.Window",
    alias: "widget.jobappliedbyseeker",
    id: "jobappliedbyseeker",
    
    initComponent: function(){
        Ext.apply(this, {
            width: 800,
            height: 350,
            constrainHeader: true,
            title: lang("applied_job"),
            layout: "fit",
            
            items: [
                {
                    xtype: "gridpanel",
                    border: 0,
                    store: "StoreJobAppliedBySeeker",
                    emptyText: lang("msg_grid_empty_text"),
                    columns: [
                        {xtype: "rownumberer", width: 45},
                        {text: lang("job_apply_id"), dataIndex: "job_apply_id", hidden: true},
                        {text: lang("job_id"),       dataIndex: "job_id",       hidden: true},
                        {text: lang("job_title"),    dataIndex: "job_title",    width: 200},
                        {text: lang("location"),     dataIndex: "location",     width: 160},
                        {text: lang("company_name"), dataIndex: "company_name", width: 150},
                        {text: lang("phone"),        dataIndex: "phone",        width: 100},
                        {text: lang("date_apply"),   dataIndex: "date_create",  width: 120,     xtype: "datecolumn", format: "d-M-Y"}
                    ],
                    dockedItems: [
                        {
                            xtype: "pagingtoolbar",
                            store: "StoreJobAppliedBySeeker",
                            dock: "bottom"
                        }
                    ]
                }
            ],
            
            buttons: [
                {
                    text: lang("btn_close"),
                    handler: function(btn){
                        btn.up("window").close();
                    }
                }
            ]
        });        
        
        this.callParent(arguments);
    }
});