Ext.define("AJ.view.seeker.SeekerList", {
    extend: "Ext.grid.Panel",
    alias: "widget.seekerlist",
    id: "seekerlist",
    
    title: lang("seeker"),
    store: "StoreSeeker",
    
    initComponent: function(){
        this.columns = [
            {xtype: "rownumberer", width: 40},
            {text: lang("ID"),              dataIndex:"seeker_id",       hidden: true},
            {text: lang("first_name"),      dataIndex:"first_name",      hidden: false,     width: 150},
            {text: lang("last_name"),       dataIndex:"last_name",       hidden: false,     width: 150},
            {text: lang("email"),           dataIndex:"email",           hidden: false,     width: 150},
            {text: lang("password"),        dataIndex:"password",        hidden: true},
            {text: lang("pics"),            dataIndex:"pics",            hidden: true},
            {text: lang("address"),         dataIndex:"address",         hidden: true},
            {text: lang("phone"),           dataIndex:"phone",           hidden: false,     width: 150},
            {text: lang("mobile"),          dataIndex:"mobile",          hidden: false,     width: 150},
            {text: lang("address_idcard"),  dataIndex:"address_idcard",  hidden: true},
            {text: lang("dob"),             dataIndex:"dob",             hidden: true,      width: 120, xtype: "datecolumn", format: "d-m-Y"},
            {text: lang("pob"),             dataIndex:"pob",             hidden: true},
            {text: lang("mf"),              dataIndex:"gender",          hidden: false,     width:  60,
                renderer: function(v){
                    return lang("mf_"+ v.toUpperCase());
                }
            },
            {text: lang("religion"),        dataIndex:"religion",        hidden: true},
            {text: lang("height"),          dataIndex:"height",          hidden: true},
            {text: lang("weight"),          dataIndex:"weight",          hidden: true},
            {text: lang("nationality"),     dataIndex:"nationality",     hidden: true},
            {text: lang("searchable"),      dataIndex:"searchable",      hidden: true},
            {text: lang("status"),          dataIndex:"status",          hidden: false,
                renderer: lang
            },
            {text: lang("reg_code"),        dataIndex:"reg_code",        hidden: true},
            {text: lang("reg_platform"),    dataIndex:"reg_platform",    hidden: true},
            {text: lang("reg_platform_id"), dataIndex:"reg_platform_id", hidden: true},
            {text: lang("date_create"),     dataIndex:"date_create",     hidden: false,     width: 120, xtype: "datecolumn", format: "d-m-Y H:i"},
            {text: lang("date_modified"),   dataIndex:"date_modified",   hidden: true,      width: 120, xtype: "datecolumn", format: "d-m-Y H:i"}
        ];
        
        this.dockedItems = [
            {
                xtype: "pagingtoolbar",
                store: "StoreSeeker",
                displayInfo: true,
                dock: "bottom"
            }
        ];
    
        this.callParent(arguments);
    }
});