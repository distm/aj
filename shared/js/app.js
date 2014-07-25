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
        // check token
        this.checkToken();
        
        // create viewport
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
                            html: "<h2 style='padding:0;margin:0'>Admin, <span style='font-size:14px'>"+ lang("country_"+LOC_ID.toUpperCase()) +"</span></h2>",
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
        }); // end of viewport
    }, // end of launch
    
    checkToken: function(){
        setInterval(function(){
            Ext.Ajax.request({
                url: API_URL +"main/check-token",
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if(obj.success === false){
                        location.href = BASE_URL +"?q=Logout";
                    }
                },
                failure: function(response, opts) {
                    location.href = BASE_URL +"?q=Logout";
                }
            });
        
        }, (2*60*1000));
    }
});
