(function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".c1 .chart"),'dark');
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {
                let tar;
                if (params[1].value !== '-') {
                    tar = params[1];
                } else {
                    tar = params[0];
                }
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            // type: 'value'

        },
        yAxis: {
            type: 'category',
            data: ["杜鹃", "樱花", "郁金香", "桃花", "玉兰花", "梅花"],
        },
        series: [
            {
                name: 'Placeholder',
                type: 'bar',
                stack: 'Total',
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                },
                emphasis: {
                    itemStyle: {
                        borderColor: 'transparent',
                        color: 'transparent'
                    }
                },
                data: [3, 3, 3, 3, 1, 1]
            },
            {
                name: 'month',
                type: 'bar',
                stack: 'Total',
                label: {
                    // show: true,
                    position: 'top'
                },
                data: [2, 1, 1, 1, 4, 2]
            },
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})();
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".c2 .chart"), 'dark');
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {
                let tar;
                if (params[1].value !== '-') {
                    tar = params[1];
                } else {
                    tar = params[0];
                }
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            // type: 'value'

        },
        yAxis: {
            type: 'category',
            data: ["菊花", "桂花", "向日葵", "绣球花", "月季花", "玫瑰花"],
        },
        series: [
            {
                name: 'Placeholder',
                type: 'bar',
                stack: 'Total',
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                },
                emphasis: {
                    itemStyle: {
                        borderColor: 'transparent',
                        color: 'transparent'
                    }
                },
                data: [9, 9, 9, 6, 4, 4]
            },
            {
                name: 'month',
                type: 'bar',
                stack: 'Total',
                label: {
                    // show: true,
                    position: 'top'
                },
                data: [2, 1, 1, 2, 3, 2]
            },
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})();

(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".c3 .chart"), 'dark');
    option = {
        title: {
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: '植物种类数',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                data: [
                    { value: 70, name: '樱花园' }, //樱花园
                    { value: 88, name: '杜鹃园' }, //杜鹃园
                    { value: 82, name: '木兰园' }, //木兰园
                    { value: 150, name: '竹园' }, //竹园
                    { value: 42, name: '世界名花园' }, //世界名花园
                    { value: 680, name: '荫生植物园' }, //荫生植物园
                    { value: 82, name: '山茶园' }, //山茶园
                    { value: 18, name: '桂花紫荆园' }, //桂花紫荆园
                    { value: 150, name: '珍稀濒危植物园' }, //珍稀濒危植物园
                    { value: 100, name: '国外观赏植物园' }, //国外观赏植物园
                    { value: 200, name: '环保植物园' }, //环保植物园
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})();

(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".c4 .chart"), 'dark');
    option = {
        title: {
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: '园区面积',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                data: [
                    { value: 6.14, name: '樱花园' }, //樱花园
                    { value: 2.56, name: '杜鹃园' }, //杜鹃园
                    { value: 3.56, name: '木兰园' }, //木兰园
                    { value: 1.86, name: '竹园' }, //竹园
                    { value: 5, name: '世界名花园' }, //世界名花园
                    { value: 0.5, name: '荫生植物园' }, //荫生植物园
                    { value: 2.05, name: '山茶园' }, //山茶园
                    { value: 2.05, name: '桂花紫荆园' }, //桂花紫荆园
                    { value: 12.58, name: '珍稀濒危植物园' }, //珍稀濒危植物园
                    { value: 4.05, name: '国外观赏植物园' }, //国外观赏植物园
                    { value: 6.15, name: '环保植物园' }, //环保植物园
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})();