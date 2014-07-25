Ext.define("AJ.view.seeker.SeekerDetailQualification", {
    extend: "Ext.grid.Panel",
    alias: "widget.seekerqualification",
    id: "seekerqualification",
    
    title: lang("qualification"),
    store: "StoreSeekerQualification",
    emptyText: lang("msg_grid_empty_text"),
    
    initComponent: function(){
        Ext.apply(this, {
            columns: [
                {xtype: "rownumberer", width: 35},
                {text: lang("qualification"),   dataIndex: "qualification",  width: 150},
                {text: lang("gpa"),             dataIndex: "gpa",            width: 130},
                {text: lang("department"),      dataIndex: "department",     width: 170},
                {text: lang("major"),           dataIndex: "major",          width: 150},
                {text: lang("univ_name"),       dataIndex: "univ_name",      width: 150},
                {text: lang("date_graduated"),  dataIndex: "date_graduated", xtype: "datecolumn",    format: "d-m-Y",     width: 130},
                {text: lang("date_create"),     dataIndex: "date_create",    xtype: "datecolumn",    format: "d-m-Y H:i", hidden: true},
                {text: lang("date_modified"),   dataIndex: "date_modified",  xtype: "datecolumn",    format: "d-m-Y H:i", hidden: true}
            ],
            
            dockedItems: [
                {
                    xtype: "pagingtoolbar",
                    store: "StoreSeekerQualification",
                    dock: "bottom"
                }
            ]
        });
        
        this.callParent(arguments);
    }    
});