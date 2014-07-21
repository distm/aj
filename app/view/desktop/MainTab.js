Ext.define("AJ.view.desktop.MainTab", {
    extend: "Ext.tab.Panel",
    alias: "widget.maintab",
    id: "maintab",
    
    initComponent: function(){
        Ext.apply(this, {
            activeTab: 0,
            items: [
                {
                    xtype: "panel",
                    title: "Dashbord",
                    bodyStyle: {
                        padding: 20
                    },
                    listeners: {
                        activate: function(){
                            Ext.getCmp("mainmenu").getSelectionModel().deselectAll();
                        },
                        afterrender: function(panel){
                            Ext.Ajax.request({
                                url: API_URL +"main/admin-dashboard",
                                success: function(response, opts) {
                                    var obj = Ext.decode(response.responseText);
                                    panel.update(obj.message);
                                },
                                failure: function(response, opts) {
                                    Ext.Msg.alert("Error", "Server-side failure with status code "+ response.status);
                                }
                            });
                        }
                    }
                }/**,
                {
                    xtype: "seekerlist"
                }/**/
            ]
        });
        
        this.callParent(arguments);
    }
});