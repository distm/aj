Ext.define("AJ.store.MainMenu", {
    extend: "Ext.data.TreeStore",
    root: {
        expanded: true,
        children: [
            {text: "detention", leaf: true},
            {text: "homework", expanded: true, 
                children: [
                    {text: "book report", leaf: true},
                    {text: "algebra", leaf: true}
                ]
            },
            {text: "buy lottery tickets", leaf: true}
        ]
    }
});