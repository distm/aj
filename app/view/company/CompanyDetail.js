Ext.define("AJ.view.company.CompanyDetail", {
    extend: "Ext.window.Window",
    alias: "widget.company-detail",
    id: "company-detail",
    
    initComponent: function(){
        Ext.apply(this, {
            height: 550,
            width: 750,
            layout: "fit",
            maximizable: true,
            maximized: false,
            modal: true,
            
            items: [
                {
                    xtype: "tabpanel",
                    border: 0,
                    id: "tab-company-detail",
                    items: []
                    
                    // uncomment for classic theme
                    /**,listeners: {
                        afterrender: function(c){
                            //c.getTabBar().setMargin(1);
                        }
                    }/**/
                }
            ]
        });
        
        this.callParent(arguments);
    }
});