Ext.define("AJ.controller.Desktop", {
    extend: "Ext.app.Controller",
    
    stores: [
        "StoreMainMenu",
        "StoreCompany",
        "StoreSeeker",
        "StoreBlog"
    ],
    views: [
        "desktop.MainMenu",
        "desktop.MainTab",
        "desktop.ComboYear",
        "company.CompanyList",
        "seeker.SeekerList",
        "blog.Panel",
        "blog.BlogList",
        "blog.BlogDetail"
    ],
    
    init: function(){
        
        this.control({
            mainmenu: {
                itemclick: this.mainMenuClick,
                itemcontextmenu: function(view, record, item, index, e){
                    e.stopEvent();
                }
            },
            
            "panel": {
                containercontextmenu: function(view, e){
                    e.stopEvent();
                }
            }
        });
        
    },
    
    mainMenuClick: function(view, record){
        if(record.get("leaf")){
            var panel_id = record.get("id"),
                maintab = Ext.getCmp("maintab"),
                tab = Ext.getCmp(panel_id);
            
            if(! tab){
                tab = Ext.widget(panel_id, {
                    closable: true
                });
                maintab.add(tab);
                
                // apply activate event
                // load store on first activation
                tab.on("activate", function(){
                    if(tab.isXType("grid")){
                        tab.getStore().load();
                    }
                }, this, {single: true});
                
                // set mainmenu active item
                tab.on("activate", function(){
                    var mm = Ext.getCmp("mainmenu"),
                        rn = mm.getRootNode(),
                        rg = new RegExp(record.get("text"));
                        
                    rn.findChildBy(function(child){
                        var text = child.data.text;
                        if(rg.test(text) === true){
                            mm.getSelectionModel().select(child, true);
                        }
                    }, this, true);
                });
            }
            maintab.setActiveTab(tab);
        }
    }
});