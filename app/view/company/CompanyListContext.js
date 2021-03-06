Ext.define("AJ.view.company.CompanyListContext", {
    extend: "Ext.menu.Menu",
    alias: "widget.contextmenu-company",
    id: "contextmenu-company",
    
    initComponent: function(){
        
        this.items = [
            {
                text: lang("update_status"),
                menu: [
                    {
                        text: lang("active"),
                        id: "company-status-active",
                        action: "update-company-status"
                    },
                    {
                        text: lang("pending"),
                        id: "company-status-pending",
                        action: "update-company-status"
                    }
                ]
            },
            '-',
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