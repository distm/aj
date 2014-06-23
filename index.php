<html>
    <head>
        <title>Admin.New</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" type="text/css" href="ext4/resources/css/ext-all.css" />
        <link rel="stylesheet" type="text/css" href="shared/css/styles.css" />
    </head>
    <body>

        <script type="text/javascript" src="ext4/ext-all.js"></script>
        <script type="text/javascript">
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
                launch: function() {
                    
                    Ext.create("Ext.container.Viewport", {
                        layout: "border",
                        items: [
                            {
                                region: "north",
                                html: "north"
                            },
                            {
                                region: "west",
                                html: "west",
                                width: 200
                            },
                            {
                                region: "center",
                                border: 0,
                                id: "main-container"
                            }
                        ]
                    });
                    
                }
            });
        </script>
    </body>
</html>
