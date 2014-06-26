Ext.define("AJ.view.company.FormDetail", {
    extend: "Ext.form.Panel",
    alias: "widget.company-formdetail",
    id: "company-formdetail",
    
    title: lang("detail"),
    autoScroll: true,
    bodyStyle: {
        padding: "10px"
    },
    
    initComponent: function() {
        this.items = [
            {
                xtype: "fieldset",
                defaults: {
                    anchor: "100%",
                    labelWidth: 150
                },
                title: lang("info"),
                items: [
                    {
                        xtype: "textfield",
                        name: "name",
                        fieldLabel: lang("name")
                    },
                    {
                        xtype: "textfield",
                        name: "address",
                        fieldLabel: lang("address")
                    },
                    {
                        xtype: "textfield",
                        name: "city",
                        fieldLabel: lang("city")
                    },
                    {
                        xtype: "textfield",
                        name: "country",
                        fieldLabel: lang("country")
                    },
                    {
                        xtype: "textfield",
                        name: "phone",
                        fieldLabel: lang("phone")
                    },
                    {
                        xtype: "textfield",
                        name: "industry",
                        fieldLabel: lang("industry")
                    },
                    {
                        xtype: "textarea",
                        height: 200,
                        name: "decription",
                        labelAlign: "top",
                        fieldLabel: lang("description")
                    }
                ]
            }, // fieldset info
            {
                xtype: "fieldset",
                title: lang("registrant"),
                defaults: {
                    anchor: "100%",
                    labelWidth: 150
                },
                items: [
                    {
                        xtype: "textfield",
                        name: "registrant_name",
                        fieldLabel: lang("name")
                    },
                    {
                        xtype: "textfield",
                        name: "registrant_email",
                        fieldLabel: lang("email")
                    }
                ]
            } // fieldset registran            
        ];

        this.buttons = [
            {
                text: "Submit",
                handler: function(btn){
                    var val = btn.up("form").getValues();
                    console.log(val);
                }
            },
            {
                text: "Cancel",
                handler: function(btn){
                    btn.up("window").hide();
                }
            }
        ];
        
        this.callParent(arguments);
    }
});