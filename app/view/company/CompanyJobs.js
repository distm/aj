Ext.define("AJ.view.company.CompanyJobs", {
    extend: "Ext.panel.Panel",
    alias: "widget.company-jobs",    
    id: "company-jobs",    
    
    title: "Jobs",
    layout: "border",
    
    initComponent: function(){
        
        this.items = [
            {
                xtype: "panel",
                title: "Center Panel",
                region: "center"
            },
            {
                xtype: "panel",
                title: "East Panel",
                width: "40%",
                region: "east"
            }
        ];
        
        this.callParent(arguments);
    }
    
});