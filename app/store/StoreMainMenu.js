Ext.define("AJ.store.StoreMainMenu", {
    extend: "Ext.data.TreeStore",
    root: {
        expanded: true,
        children: [
            {text: "Member", id: "member", expanded: true, 
                children: [
                    {text: lang("company"), id: "companylist", leaf: true},
                    {text: lang("seeker"), id: "seekerlist", leaf: true}
                ]
            },
            {text: lang("statistic"), id: "panel-statistic", leaf: true},
            {text: lang("blog"), id: "panel-blog", leaf: true}
        ]
    }
});