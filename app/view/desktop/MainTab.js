Ext.define("AJ.view.desktop.MainTab", {
    extend: "Ext.tab.Panel",
    alias: "widget.maintab",
    id: "maintab",
    
    activeTab: 1,
    initComponent: function(){
        
        this.items = [
            {
                xtype: "panel",
                title: "Dashbord",
                listeners: {
                    activate: function(){
                        Ext.getCmp("mainmenu").getSelectionModel().deselectAll();
                    }
                }
            }/**/,
            {
                xtype: "panel-blog"
            }/**/
        ];
        
        this.callParent(arguments);
    }
});