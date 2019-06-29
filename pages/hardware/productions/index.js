
export const categorys = [{
  as: '/hardware/1',
  url: '/hardware?category=1',
  name: '智能网关类',
  products: 'TG121系列/TG120系列/TG100系列',
  description: '欣动智能网关是将客户通用需求与行业个性化需求有机融合的革命性产品，具有现场/远程可配置、可编程功能，提供可靠的物联网软硬件平台和统一开放的MQTT IoT通讯协议，简化物联网网关的定制和部署，协助加速物联网应用的开发和创新。'
}, {
  as: '/hardware/2',
  url: '/hardware?category=2',
  name: '智能网由类',
  products: 'TR1000系列/TR1000-DatUP',
  description: '欣动TR1000系列智能网由是将不同行业标准网络接口协议，转换为MQTT物联网接口协议的创新型产品。支持BACnet/IP、OPC和Modbus/TCP等协议，并能在持续更新与系列化发展中，支持更多传统产业如智能楼宇、工业自控等，向智能化物联网方向升级。'
}, {
  as: '/hardware/3',
  url: '/hardware?category=3',
  name: '前置服务类',
  products: 'TFS1000-BEMS/TFS1000-GBMS',
  description: '欣动TFS1000系列前置服务器是集数据采集、应用扩展和服务发布为一体的专用设备，提供特定功能的现场轻量级服务，如智能设备监测服务、单体建筑能源管理服务和单体绿色建筑运营管理服务等。'
}, {
  as: '/hardware/4',
  url: '/hardware?category=4',
  name: '终端设备类',
  products: 'TC100-R8/TDV100-WN',
  description: '欣动终端设备类是将客户通用需求与客户个性化需求、行业性需求有机融合的革命性产品。其中智能控制器使用微处理器和专用控制算法，实现智能控制；信息发布终端提供综合、全面的信息发布解决方案。'
}, {
  as: '/hardware/5',
  url: '/hardware?category=5',
  name: '接口转换类',
  products: 'TCONV-MR4',
  description: '欣动接口转换类产品可以将不同接口设备组网，实现设备间的互操作。基于多种通信口和各种协议，形成不同种类的接口转换器。'
}, {
  as: '/hardware/6',
  url: '/hardware?category=6',
  name: '集成机柜类',
  products: 'GR10-TG网关柜/GR10-TR网由柜',
  description: '欣动GR10系列集成机柜类，作为支持能源管理解决方案的重要组件，所有部件工厂预制、预装、预调试，打包运输，现场仅需简单安装，实现业务快速上线。所有设备一体化集成在一个机柜，相对于传统建设模式至少节省50%安装空间。'
}];

export const productions = [
  // 智能网关
  [{
    name: 'TG121-N-485',
    image: require( './img/TG121-N-485.png' ),
    html: require( 'text-loader!./TG121-N-485.tpl' )
  }, {
    name: 'TG120-N-485',
    image: require( './img/TG120-N-485.png' ),
    html: require( 'text-loader!./TG120-N-485.tpl' )
  }, {
    soldOut: true,
    name: 'TG100-N-485',
    image: require( './img/TG100-N-485.png' ),
    html: require( 'text-loader!./TG100-N-485.tpl' )
  }],
  // 只能网由类
  [{
    name: 'TR1000-Base',
    image: require( './img/TR1000-Base.png' ),
    html: require( 'text-loader!./TR1000-Base.tpl' )
  }, {
    name: 'TR1000-DatUP',
    image: require( './img/TR1000-DatUP.png' ),
    html: require( 'text-loader!./TR1000-DatUP.tpl' )
  }],
  // 前置服务
  [{
    name: 'TFS1000-BEMS',
    image: require( './img/TFS1000-BEMS.png' ),
    html: require( 'text-loader!./TFS1000-BEMS.tpl' )
  }, {
    name: 'TFS1000-GBMS',
    image: require( './img/TFS1000-GBMS.png' ),
    html: require( 'text-loader!./TFS1000-GBMS.tpl' )
  }],
  // 中断设备
  [{
    name: 'TC100-R8',
    image: require( './img/TC100-R8.png' ),
    html: require( 'text-loader!./TC100-R8.tpl' )
  }, {
    name: 'TDV1000-WN',
    image: require( './img/TDV100-WN.png' ),
    html: require( 'text-loader!./TDV100-WN.tpl' )
  }],
  // 接口转换
  [{
    name: 'TCONV-MR4',
    image: require( './img/TCONV-MR4.png' ),
    html: require( 'text-loader!./TCONV-MR4.tpl' )
  }],
  // 集成机柜
  [{
    name: 'GR10-TG',
    image: require( './img/GR10-TG.png' ),
    html: require( 'text-loader!./GR10-TG.tpl' )
  }, {
    name: 'GR10-TR',
    image: require( './img/GR10-TR.png' ),
    html: require( 'text-loader!./GR10-TR.tpl' )
  }]
];
