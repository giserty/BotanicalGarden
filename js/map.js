let map = new BMapGL.Map("container"); //创建地图实例 
let point = new BMapGL.Point(113.04, 28.11); //创建点坐标 
map.centerAndZoom(point, 15); //初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);
let scaleCtrl = new BMapGL.ScaleControl(); //添加比例尺控件
map.addControl(scaleCtrl);
let zoomCtrl = new BMapGL.ZoomControl();   //添加缩放控件
map.addControl(zoomCtrl);
map.addControl(new BMapGL.MapTypeControl({ //添加切换底图控件
    mapType: [
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
    ]
}));