
export const categorys = [{
  as: '/hardware/1',
  url: '/hardware?category=1',
  name: '智能网关类',
  description: '将客户通用需求与行业个性化需求有机融合，具有现场/远程可配置、可编程功能，提供可靠的物联网软硬件平台和统一开放的MQTT IoT通讯协议，简化物联网网关的定制和部署，协助加速物联网应用的开发和创新'
}, {
  as: '/hardware/2',
  url: '/hardware?category=2',
  name: '终端设备类',
  description: '将客户通用需求与行业个性化需求有机融合，具有现场/远程可配置、可编程功能，提供可靠的物联网软硬件平台和统一开放的MQTT IoT通讯协议，简化物联网网关的定制和部署，协助加速物联网应用的开发和创新'
}, {
  as: '/hardware/3',
  url: '/hardware?category=3',
  name: '接口转换类',
  description: '将客户通用需求与行业个性化需求有机融合，具有现场/远程可配置、可编程功能，提供可靠的物联网软硬件平台和统一开放的MQTT IoT通讯协议，简化物联网网关的定制和部署，协助加速物联网应用的开发和创新'
}, {
  as: '/hardware/4',
  url: '/hardware?category=4',
  name: '智能网由类',
  description: '将客户通用需求与行业个性化需求有机融合，具有现场/远程可配置、可编程功能，提供可靠的物联网软硬件平台和统一开放的MQTT IoT通讯协议，简化物联网网关的定制和部署，协助加速物联网应用的开发和创新'
}, {
  as: '/hardware/5',
  url: '/hardware?category=5',
  name: '前置服务类',
  description: '将客户通用需求与行业个性化需求有机融合，具有现场/远程可配置、可编程功能，提供可靠的物联网软硬件平台和统一开放的MQTT IoT通讯协议，简化物联网网关的定制和部署，协助加速物联网应用的开发和创新'
}, {
  as: '/hardware/6',
  url: '/hardware?category=6',
  name: '集成机柜类',
  description: '将客户通用需求与行业个性化需求有机融合，具有现场/远程可配置、可编程功能，提供可靠的物联网软硬件平台和统一开放的MQTT IoT通讯协议，简化物联网网关的定制和部署，协助加速物联网应用的开发和创新'
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
  []
];