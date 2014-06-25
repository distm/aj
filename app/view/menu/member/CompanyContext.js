Ext.define("AJ.view.menu.member.CompanyContext", {
    extend: "Ext.menu.Menu",
    alias: "widget.contextmenu-company",
    id: "contextmenu-company",
    
    initComponent: function(){
        
        this.items = [
            {
                text: lang("detail"),
                action: "detail"
            },
            {
                text: lang("show_jobs"),
                action: "show_jobs"
            }
        ];
        
        this.callParent(arguments);
    }
});