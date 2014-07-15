Ext.define("AJ.view.seeker.SeekerListContext", {
    extend: "Ext.menu.Menu",
    alias: "widget.contextmenu-seeker",
    id: "contextmenu-seeker",
    
    initComponent: function(){
        
        this.items = [
            {
                text: lang("update_status"),
                menu: [
                    {
                        text: lang("active"),
                        id: "seeker-status-active",
                        action: "update-seeker-status"
                    },
                    {
                        text: lang("pending"),
                        id: "seeker-status-pending",
                        action: "update-seeker-status"
                    }
                ]
            },
            '-',
            {
                text: lang("detail"),
                action: "detail"
            },
            {
                text: lang("applied_job"),
                action: "applied_job"
            }
        ];
        
        this.callParent(arguments);
    }
});