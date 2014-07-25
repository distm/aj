Ext.define("AJ.view.seeker.SeekerDetailExperience", {
    extend: "Ext.grid.Panel",
    alias: "widget.seekerexperience",
    id: "seekerexperience",
    
    title: lang("experience"),
    store: "StoreSeekerExperience",
    emptyText: lang("msg_grid_empty_text"),
    
    initComponent: function(){
        Ext.apply(this, {
            columns: [
                {xtype: "rownumberer", width: 35},
                {text: lang("company_name"),     dataIndex: "company_name",     width: 150},
                {text: lang("position"),         dataIndex: "position",         width: 150},
                {text: lang("specialization"),   dataIndex: "specialization",   width: 150},
                {text: lang("role"),             dataIndex: "role",             width: 100},
                {text: lang("industry"),         dataIndex: "industry",         width: 100},
                {text: lang("month_salary"),     dataIndex: "month_salary",     width: 120},
                {text: lang("work_desc"),        dataIndex: "work_desc",        width: 170},
                {text: lang("date_from"),        dataIndex: "date_from",        width: 120},
                {text: lang("date_to"),          dataIndex: "date_to",          width: 120},
                {text: lang("position_level"),   dataIndex: "position_level",   width: 130},
                {text: lang("date_create"),      dataIndex: "date_create",      xtype: "datecolumn", format: "d-m-Y H:i", hidden: true},
                {text: lang("date_modified"),    dataIndex: "date_modified",    xtype: "datecolumn", format: "d-m-Y H:i", hidden: true}
            ],
            
            dockedItems: [
                {
                    xtype: "pagingtoolbar",
                    store: "StoreSeekerExperience",
                    dock: "bottom"
                }
            ]
        });
        
        this.callParent(arguments);
    }    
});