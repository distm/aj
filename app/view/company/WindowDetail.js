Ext.define("AJ.view.company.WindowDetail", {
    extend: "Ext.window.Window",
    alias: "widget.company-detail",
    id: "company-detail",
    
    height: 350,
    width: 750,
    layout: "fit",
    
    
    initComponent: function(){
        
        this.items = [
            {
                xtype: "tabpanel",
                border: 0,
                id: "tab-company-detail"
                
                // uncomment for classic theme
                /**,listeners: {
                    afterrender: function(c){
                        //c.getTabBar().setMargin(1);
                    }
                }/**/
            }
        ];
        
        this.callParent(arguments);
    }
});