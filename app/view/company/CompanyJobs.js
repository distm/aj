Ext.define("AJ.view.company.CompanyJobs", {
    extend: "Ext.panel.Panel",
    alias: "widget.company-jobs",    
    id: "company-jobs",    
    
    title: lang("job_list"),
    layout: "border",
    border: 1,
    margin: "-1 -1 0",
    
    initComponent: function(){
        
        this.items = [
            {
                xtype: "company-jobslist",
                margin: "1 0 -1 -1",
                region: "center"
            },
            {
                xtype: "applicantlist",
                collapsible: true,
                collapsed: true,
                split: true,
                height: "50%",
                margin: "0 -1 -1",
                region: "south"
            }
        ];
        
        this.buttons = [
            {
                text: lang("btn_close"),
                handler: function(btn){
                    btn.up("window").close();
                }
            }
        ];
        
        this.callParent(arguments);
    }
    
});