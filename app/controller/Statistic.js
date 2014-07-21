Ext.define("AJ.controller.Statistic", {
    extend: "Ext.app.Controller",
    
    stores: [
        "StoreStatisticChart"
    ],
    
    views: [
        "statistic.Panel",
        "statistic.Chart"
    ],
    
    init: function() {
        var me = this;
        
        this.control({
            
            "panel-statistic": {
                activate: function(panel){
                    if(! panel.activated){
                        var chart = panel.down("chart");
                        chart.getStore().load();
                        panel.activated = true;
                    }
                }
            },
            
            "[action='showchartbymonth']": {
                click: function(){
                    var c = Ext.getCmp("statisticchart"),
                        m = Ext.getCmp("chart-month").getValue();
                    m = Ext.Date.format(m, "m-Y");
                    if(m){
                        me.showChartByMonth(c, m);
                    }
                }
            },
            
            "[action='showchartbyyear']": {
                click: function(){
                    var c = Ext.getCmp("statisticchart"),
                        y = Ext.getCmp("chart-year").getValue();
                    
                    if(y){
                        me.showChartByYear(c, "all-"+ y);
                    }
                }
            },
            
            "[action='reloadchart']": {
                click: this.reloadChart
            }
            
        });
    },
    
    showChartByMonth: function(chart, month){
        var store = chart.getStore();
        store.on('beforeload', function(s){
            s.proxy.extraParams.period = month;
        });
        store.load();
    },
    
    showChartByYear: function(chart, year){
        var store = chart.getStore();
        store.on('beforeload', function(s){
            s.proxy.extraParams.period = year;
        });
        store.load();
    },
    
    reloadChart: function(btn){
        var panel = btn.up("panel"),
                chart = panel.down("chart");
        
        chart.getStore().load();
    }
});