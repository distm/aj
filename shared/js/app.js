Ext.Loader.setConfig({
    disableCaching: false,
    enabled: true,
    paths: {
        "Ext.ux": "app/ux"
    }
});

Ext.application({
    requires: [
        "Ext.container.Viewport",
        "Ext.ux.form.HtmlEditor.imageUpload",
        "Ext.ux.form.field.Month"
    ],
    name: "AJ",
    appFolder: "app",
    
    controllers: [
        "Desktop",
        "Company",
        "Seeker",
        "Blog",
        "Statistic",
        "Job"
    ],
    
    launch: function() {
        
        Ext.create("Ext.container.Viewport", {
            layout: "border",
            items: [
                {
                    region: "north",
                    layout: "column",
                    border: 0,
                    bodyStyle: {
                        backgroundColor: "transparent",
                        color: "#FFF"
                    },
                    id: "app-header",
                    defaults: {
                        border: 0,
                        bodyStyle: {
                            backgroundColor: "transparent",
                            color: "#FFF"
                        }
                    },
                    items: [
                        {
                            html: "<h2 style='padding:0;margin:0'>Left</h2>",
                            columnWidth: 1
                        },
                        {
                            html: "<a href='"+ BASE_URL +"?token="+ TOKEN +"&q=Logout' style='color:yellow;font-weight:bold'>Logout</a>",
                            padding: "4 0 0"
                        }
                    ]
                },
                {
                    region: "west",
                    xtype: "mainmenu",
                    split: true,
                    width: 230,
                    collapsible: true
                },
                {
                    region: "center",
                    xtype: "maintab"
                }
            ]
        });
        
    }
});
