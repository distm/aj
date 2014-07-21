Ext.define("AJ.view.statistic.Chart", {
    extend: "Ext.chart.Chart",
    alias: "widget.statisticchart",
    id: "statisticchart",
    
    initComponent: function() {
        Ext.apply(this, {
            animate: true,
            shadow: false,
            store: "StoreStatisticChart",
            legend: {
                position: "bottom"
            },            
            axes: [
                {
                    type: "Numeric",
                    position: "left",
                    fields: ["seeker", "company"],
                    title: false,
                    grid: true,
                    minimum: 0,
                    majorTickSteps: 5
                }, {
                    type: "Category",
                    position: "bottom",
                    fields: ["period"],
                    title: lang("period")
                }
            ],
            series: [
                {
                    gutter: 80,
                    type: "column",
                    axis: "bottom",
                    highlight: true,
                    xField: ["period"],
                    yField: ["seeker", "company"],
                    title: [lang("seeker"), lang("company")],
                    showInLegend: true,
                    label: {
                        display: "outside",
                        field: ["seeker", "company"],
                        renderer: Ext.util.Format.numberRenderer("0")
                    }
                }
            ]
        });

        this.callParent(arguments);
    }
});