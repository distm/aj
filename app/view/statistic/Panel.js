Ext.define("AJ.view.statistic.Panel", {
    extend: "Ext.panel.Panel",
    alias: "widget.panel-statistic",
    id: "panel-statistic",
    
    initComponent: function(){
        Ext.apply(this, {
            title: lang("statistic"),
            layout: "fit",
            bodyStyle: {
                padding: 30
            },
            items: {
                xtype: "statisticchart"
            },
            dockedItems: [
                {
                    xtype: "toolbar",
                    items: [
                        {
                            xtype: "tbtext",
                            text: lang("by_month")
                        },
                        {
                            xtype: "monthfield",
                            format: "m-Y",
                            id: "chart-month",
                            value: new Date()
                        },
                        {
                            text: "Go",
                            action: "showchartbymonth"
                        },
                        "-",
                        {
                            xtype: "tbtext",
                            text: lang("by_year")
                        },
                        {
                            xtype: "comboyear",
                            width: 70,
                            id: "chart-year",
                            value: (new Date()).getFullYear()
                        },
                        {
                            text: "Go",
                            action: "showchartbyyear"
                        },
                        "->",
                        {
                            text: lang("reload"),
                            action: "reloadchart"
                        }
                    ]
                }
            ]
        });
        
        this.callParent(arguments);
    }
});