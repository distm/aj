Ext.define("AJ.view.seeker.SeekerDetailLanguageSkill", {
    extend: "Ext.grid.Panel",
    alias: "widget.seekerlanguageskill",
    id: "seekerlanguageskill",
    
    title: lang("language_skill"),
    store: "StoreSeekerLanguageSkill",
    
    initComponent: function(){
        Ext.apply(this, {
            columns: [
                {xtype: "rownumberer", width: 35},
                {text: lang("language"),        dataIndex: "language",      width: 180},
                {text: lang("spoken"),          dataIndex: "spoken",        width: 120, align: "right"},
                {text: lang("written"),         dataIndex: "written",       width: 120, align: "right"},
                {text: lang("date_create"),     dataIndex: "date_create",   xtype: "datecolumn", format: "d-m-Y H:i", hidden: true},
                {text: lang("date_modified"),   dataIndex: "date_modified", xtype: "datecolumn", format: "d-m-Y H:i", hidden: true}
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