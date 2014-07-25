Ext.define("AJ.view.job.ApplicantList", {
    extend: "Ext.grid.Panel",
    alias: "widget.applicantlist",
    id: "applicantlist",
    
    title: lang("applicant_list"),
    store: "StoreApplicant",
    emptyText: lang("msg_grid_empty_text"),
    
    initComponent: function(){
        
        this.columns = [
            {xtype: "rownumberer", width: 30},
            {text: lang("title"),      width: 200, dataIndex: "job_title"},
            {text: lang("name"),       width: 150, dataIndex: "first_name"},
            {text: lang("email"),      width: 200, dataIndex: "email"},
            {text: lang("date_apply"), width: 120, dataIndex: "date_create",   xtype: "datecolumn",   format: "d-m-Y"}
        ];
        this.dockedItems = [
            {
                xtype: "pagingtoolbar",
                store: "StoreApplicant",
                displayInfo: true,
                dock: "bottom"
            }
        ];
        this.callParent(arguments);
    }
});