Ext.define("AJ.store.StoreMainMenu", {
    extend: "Ext.data.TreeStore",
    root: {
        expanded: true,
        children: [
            {text: "Member", id: "member", expanded: true, 
                children: [
                    {text: lang("company"), id: "company", leaf: true},
                    {text: lang("seeker"), id: "seeker", leaf: true}
                ]
            },
            {text: lang("statistic"), id: "statistic", leaf: true},
            {text: lang("blog"), id: "blog", leaf: true}
        ]
    }
});