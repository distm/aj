Ext.define("AJ.view.blog.BlogForm", {
    extend: "Ext.window.Window",
    alias: "widget.blogform",
    id: "blogform",
    
    maximizable: true,
    layout: "fit",
    width: 600,
    height: 300,
    
    initComponent: function(){
        
        this.items = [
            {
                xtype: "form",
                autoScroll: true,
                bodyStyle: {
                    padding: "10px"
                },
                defaults: {
                    anchor: "100%",
                    labelWidth: 120
                },
                items: [
                    {
                        xtype: "textfield",
                        allowBlank: false,
                        name: "title",
                        fieldLabel: lang("title")
                    },
                    {
                        xtype: "textfield",
                        name: "tag",
                        fieldLabel: lang("tags")
                    },
                    {
                        xtype: "textarea",
                        name: "summary",
                        fieldLabel: lang("summary"),
                        labelAlign: "top"
                    },
                    {
                        xtype: "htmleditor",
                        allowBlank: false,
                        name: "content",
                        fieldLabel: lang("content"),
                        labelAlign: "top",
                        plugins: [
                            new Ext.create("Ext.ux.form.HtmlEditor.imageUpload", {
                                enableContextMenu: true
                            })
                        ],
                        listeners: {
                            afterrender: function(me){
                                me.getToolbar().setMargin("-1 -1 0");
                            }
                        }
                    }
                ]
            }
        ];
        
        this.buttons = [
            {
                text: lang("btn_ok"),
                handler: function(btn){
                    var win = btn.up("window"),
                        form = win.down("form");
                
                    console.log(form.getValues());
                }
            },
            {
                text: lang("btn_cancel"),
                handler: function(btn){
                    btn.up("window").hide();
                }
            }
        ];
        
        this.callParent(arguments);
    }
});