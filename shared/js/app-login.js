Ext.onReady(function(){
    var win = Ext.create("Ext.window.Window", {
        title: "Login Administrator",
        width: 350,
        layout: "fit",
        autoShow: true,
        closable: false,
        draggable: false,
        items: [
            {
                xtype: "form",
                bodyStyle: "padding:15px",
                border: 0,
                defaults: {
                    anchor: "100%"
                },
                items: [
                    {
                        xtype: "textfield",
                        name: "username",
                        fieldLabel: "Username",
                        allowBlank: false
                    },
                    {
                        xtype: "textfield",
                        name: "password",
                        inputType: "password",
                        fieldLabel: "Password",
                        allowBlank: false
                    }
                ]
            }
        ],
        buttons: [
            {
                text: "Login",
                handler: function(btn){
                    var win = btn.up("window"),
                        form = win.down("form");
                    
                    form.setLoading("Logging in...");
                    form.getForm().submit({
                        clientValidation: true,
                        url: API_URL +"main/login",
                        success: function(f, action) {
                            form.setLoading(false);
                            Ext.Msg.alert('Success', action.result.message, function(){
                                location.href = BASE_URL +"?token="+ action.result.token;
                            });
                        },
                        failure: function(f, action) {
                            form.setLoading(false);
                            switch (action.failureType) {
                                case Ext.form.action.Action.CLIENT_INVALID:
                                    Ext.Msg.alert(lang("failure"), lang('msg_client_invalid'));
                                    break;
                                case Ext.form.action.Action.CONNECT_FAILURE:
                                    Ext.Msg.alert(lang("failure"), lang('msg_connect_failure'));
                                    break;
                                case Ext.form.action.Action.SERVER_INVALID:
                                   Ext.Msg.alert(lang("failure"), action.result.message);
                            }
                        }
                    });
                }
            },
            {
                text: lang("btn_cancel"),
                handler: function(btn){
                    btn.up("window").down("form").setLoading(false);
                }
            }
        ]
    });
});