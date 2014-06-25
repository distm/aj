<html>
    <head>
        <title>AJ</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" type="text/css" href="ext4/resources/css/ext-all-neptune.css" />
        <link rel="stylesheet" type="text/css" href="shared/css/styles.css" />
    </head>
    <body>

        <script type="text/javascript" src="ext4/ext-all.js"></script>
        <script type="text/javascript" src="shared/js/lang-id.js"></script>
        <script type="text/javascript">
            var BASE_URL = location.protocol +"//"+ location.host +"/aj/",
                API_URL = BASE_URL +"api-server/";
            
            Ext.Loader.setConfig({
                disableCaching: false,
                enabled: true,
                paths: {
                    "Ext.ux": "app/ux"
                }
            });
            Ext.application({
                requires: [
                    "Ext.container.Viewport"
                ],
                name: "AJ",
                appFolder: "app",
                
                controllers: [
                    'Desktop',
                    'Company'
                ],
                
                launch: function() {
                    
                    Ext.create("Ext.container.Viewport", {
                        layout: "border",
                        items: [
                            {
                                region: "north",
                                xtype: "box",
                                id: "app-header",
                                html: "Admin"
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
        </script>
    </body>
</html>
