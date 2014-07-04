Ext.define("AJ.view.company.CompanyJobsListContext", {
    extend: "Ext.menu.Menu",
    alias: "widget.contextmenu-company-jobslist",
    id: "contextmenu-company-jobslist",
    
    initComponent: function(){
        this.items = [
            {
                text: lang("detail"),
                action: "detail"
            },
            {
                text: lang("show_applicant"),
                action: "show_applicant"
            }
        ];
        this.callParent(arguments);
    }
});