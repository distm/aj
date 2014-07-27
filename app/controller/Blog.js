Ext.define("AJ.controller.Blog", {
    extend: "Ext.app.Controller",
    views: [
        "blog.Panel",
        "blog.BlogList",
        "blog.BlogListContext",
        "blog.BlogDetail",
        "blog.BlogForm"
    ],
    init: function() {

        this.control({
            "bloglist": {
                afterrender: function(grid){
                    grid.getStore().load();
                },
                itemcontextmenu: this.showContext,
                selectionchange: function(sm, record) {
                    if(record[0]){
                        Ext.getCmp("blogdetail").update(record[0].getData());
                    }
                }
            },
            "bloglist button[action='create_new_blog']": {
                click: this.createNewBlog
            },
            
            "blogform button[action='save_blog']": {
                click: this.saveBlog
            },
            
            "contextmenu-blog [action='edit_blog']": {
                click: this.editBlog
            },
            "contextmenu-blog [action='delete_blog']": {
                click: this.deleteBlog
            }

        });

    },
    showContext: function(view, record, item, index, e) {
        e.stopEvent();
        this.selectedRecord = record;
        this.selectedIndex = index;
        
        var menu = Ext.getCmp("contextmenu-blog");
        if (!menu) {
            menu = Ext.widget("contextmenu-blog");
        }
        menu.showAt(e.getXY());
    },
    createNewBlog: function(btn) {
        var win = Ext.getCmp("blogform");
        if (!win) {
            win = Ext.widget("blogform", {
                title: btn.getText()
            });
        }
        win.show(null, function(){
            var form = win.down("form"),
                mode = Ext.getCmp("blog-saving-mode");
            form.getForm().reset();
            if(mode){
                mode.setValue("insert");
            }
        });
    },
    deleteBlog: function(){
        var rec = this.selectedRecord,
            last_index = this.selectedIndex;
        
        Ext.Msg.confirm(lang("confirm"), lang("msg_sure_for_deletion"), function(btn){
            if(btn == "yes"){
                Ext.Ajax.request({
                    url: API_URL + "blog/delete",
                    params: {id: rec.get("id")},
                    success: function(response, opts) {
                        var obj = Ext.decode(response.responseText);
                        if(obj.success){
                            Ext.Msg.alert(lang("success"), obj.message, function(){
                                var grid = Ext.getCmp("bloglist"),
                                    store = grid.getStore();
                                
                                store.reload({
                                    callback: function(){
                                        var next_record = store.getAt(last_index),
                                            set_select = next_record ? next_record : 0;
                                        grid.getSelectionModel().select(set_select);
                                    }
                                });
                            });
                        } else {
                            Ext.Msg.alert(lang("failure"), obj.message);
                        }
                    },
                    failure: function(response, opts) {
                        Ext.Msg.alert(lang("failure"), lang("msg_server_error") +" #"+ response.status);
                    }
                });
            }
        });
    },
    editBlog: function(btn){        
        var rec = this.selectedRecord;
        var win = Ext.getCmp("blogform");
        if (!win) {
            win = Ext.widget("blogform", {
                title: btn.text
            });
        }
        win.show(null, function(){
            var form = win.down("form"),
                mode_el = Ext.getCmp("blog-saving-mode");
                
            if(mode_el){
                mode_el.setValue("update");
                Ext.getCmp("blog-id").setValue(rec.get("id"));
            } else {
                form.add([{
                    xtype: "textfield",
                    name: "mode",
                    id: "blog-saving-mode",
                    value: "update",
                    hidden: true
                }, {
                    xtype: "textfield",
                    name: "id",
                    id: "blog-id",
                    value: "update",
                    hidden: true
                }]);
            }
            form.loadRecord(rec);
        });
    },
    saveBlog: function(btn) {
        var win = btn.up("window"),
                form = win.down("form"),
                mode = "insert";

        if(form.down("[name='mode']")){
            mode = form.down("[name='mode']").getValue();
        }
        
        form.setLoading("Menyimpan...");
        form.submit({
            clientValidation: true,
            url: API_URL + "blog/save",
            params: {
                mode: mode
            },
            success: function(frm, action) {
            	form.setLoading(false);
                Ext.Msg.alert('Success', action.result.message, function() {
                    win.hide();
                    Ext.getCmp("bloglist").getStore().reload();
                    if(mode == "update"){
                        Ext.getCmp("blogdetail").update(form.getValues());
                    }
                });
            },
            failure: function(frm, action) {
            	form.setLoading(false);
                switch (action.failureType) {
                    case Ext.form.action.Action.CLIENT_INVALID:
                        Ext.Msg.alert(lang("failure"), lang("msg_client_invalid"));
                        break;
                    case Ext.form.action.Action.CONNECT_FAILURE:
                        Ext.Msg.alert(lang("failure"), lang("msg_connect_failure"));
                        break;
                    case Ext.form.action.Action.SERVER_INVALID:
                        Ext.Msg.alert(lang("failure"), action.result.message);
                        break;
                }
            }
        });
    }

});