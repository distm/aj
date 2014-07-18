Ext.define("AJ.view.seeker.SeekerDetailSkill", {
    extend: "Ext.grid.Panel",
    alias: "widget.seekerskill",
    id: "seekerskill",
    
    title: lang("skill"),
    store: "StoreSeekerSkill",
    emptyText: lang("msg_grid_empty_text"),
    
    initComponent: function(){
        Ext.apply(this, {
            columns: [
                {xtype: "rownumberer", width: 35},
                {text: lang("skill"),           dataIndex: "skill",         width: 150},
                {text: lang("proficiency"),     dataIndex: "proficiency",   width: 150,          renderer: lang},
                {text: lang("date_create"),     dataIndex: "date_create",   xtype: "datecolumn", format: "d-m-Y H:i", hidden: true},
                {text: lang("date_modified"),   dataIndex: "date_modified", xtype: "datecolumn", format: "d-m-Y H:i", hidden: true}
            ]
        });
        
        this.callParent(arguments);
    }    
});