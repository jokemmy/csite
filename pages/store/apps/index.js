
import omit from 'omit.js';
import estatis from '@assets/images/store/icons/estatis.svg?sprite';
import edept from '@assets/images/store/icons/edept.svg?sprite';
import efacility from '@assets/images/store/icons/efacility.svg?sprite';
import eaccount from '@assets/images/store/icons/eaccount.svg?sprite';
import ebalance from '@assets/images/store/icons/ebalance.svg?sprite';
import eupdatas from '@assets/images/store/icons/eupdatas.svg?sprite';
import echargedmt from '@assets/images/store/icons/echargedmt.svg?sprite';
import echargebus from '@assets/images/store/icons/echargebus.svg?sprite';
import echargechp from '@assets/images/store/icons/echargechp.svg?sprite';
import echargehotw from '@assets/images/store/icons/echargehotw.svg?sprite';
import echargepws from '@assets/images/store/icons/echargepws.svg?sprite';
import esmartkongtiao from '@assets/images/store/icons/esmartkongtiao.svg?sprite';
import esmartlight from '@assets/images/store/icons/esmartlight.svg?sprite';
import waterreuse from '@assets/images/store/icons/waterreuse.svg?sprite';
import heating from '@assets/images/store/icons/heating.svg?sprite';
import electfire from '@assets/images/store/icons/electfire.svg?sprite';
import pumphouse from '@assets/images/store/icons/pumphouse.svg?sprite';
import watermonitor from '@assets/images/store/icons/watermonitor.svg?sprite';
import elevator from '@assets/images/store/icons/elevator.svg?sprite';
import substation from '@assets/images/store/icons/substation.svg?sprite';
import firehydrant from '@assets/images/store/icons/firehydrant.svg?sprite';
import manholecover from '@assets/images/store/icons/manholecover.svg?sprite';
import emonitor from '@assets/images/store/icons/emonitor.svg?sprite';
import esmart from '@assets/images/store/icons/esmart.svg?sprite';
import eworkspace from '@assets/images/store/icons/eworkspace.svg?sprite';
import runcenter from '@assets/images/store/icons/runcenter.svg?sprite';


const categorys = [{
  code: 'Manage',
  name: '能源管理',
  color: 'rgba(0,204,253,0.3)',
  desc: '通过先进的物联网技术对水、电、气、热等能源数据进行实时采集和全方位远程监控，实时掌握不同区域、不同类别能源的消耗情况与设备运行状态，实现节能降耗、安全运行、精细化管理。'
}, {
  code: 'Recycle',
  name: '能源回收',
  color: 'rgba(255,153,102,0.3)',
  desc: '解决能源运营回收问题，整合多种类型、多种品牌能源计量设备，支持预付费和后付费两种收费模式，借助信息化和物联网技术堵住用能漏洞，实现用能的统一管理。'
}, {
  code: 'SaveAndControl',
  name: '节能控制',
  color: 'rgba(102,204,255,0.3)',
  desc: '由节能控制管理软件、总线传输系统、节能控制设备三部分组成，实现各种用能能耗的自动采集、监测、统计分析展示、以及定额管理，远程通断，故障告警等功能。'
}, {
  code: 'SafeAndSafety',
  name: '安全保障',
  color: 'rgba(153,153,255,0.3)',
  desc: '对引发安全问题的主要因素进行不间断的数据跟踪与统计分析，并将发现的各种隐患信息及时推送给企业管理人员，实现安全状态监控。达到消除潜在安全隐患，实现“防患于未然”的目的。'
}, {
  code: 'OperationManage',
  name: '运行管理',
  color: 'rgba(153,204,102,0.3)',
  desc: '统一协调各种角色，统筹管理设施设备的运行，提供技术手段和支撑服务，实现职能与资源的整合，管理有执行，服务有指挥的良好运营模式。'
}];

const apps = [{
  code: 'estatis',
  category: 'Manage',
  name: '建筑能耗管理',
  href: '/store/goods?code=estatis',
  as: '/store/estatis',
  icon: estatis,
  description: '以建筑为维度，实时采集与监测能耗数据，提供具有业务价值的可视化数据，协助能源管理部门科学决策、加强管理。',
  content: require( 'text-loader!./estatis.md' )
}, {
  code: 'edept',
  category: 'Manage',
  name: '部门能耗管理',
  href: '/store/goods?code=edept',
  as: '/store/edept',
  icon: edept,
  description: '以部门为维度，对各部门的用能情况进行指标化管理，实现部门能耗的监测以及用能的统计分析。',
  content: require( 'text-loader!./edept.md' )
}, {
  code: 'efacility',
  category: 'Manage',
  name: '设施能耗管理',
  href: '/store/goods?code=efacility',
  as: '/store/efacility',
  icon: efacility,
  description: '以设施设备为维度，实时采集、传输用能数据，随时监测、分析用能情况，直观掌握设备设施的运行状况及节能效益评价。',
  content: require( 'text-loader!./efacility.md' )
}, {
  code: 'eaccount',
  category: 'Manage',
  name: '用能账目管理',
  href: '/store/goods?code=eaccount',
  as: '/store/eaccount',
  icon: eaccount,
  description: '自动对下发的用能指标、用能回收和支出进行统一结算，形成一本准确无遗漏的总账，促进收支平衡。',
  content: require( 'text-loader!./eaccount.md' )
}, {
  code: 'ebalance',
  category: 'Manage',
  name: '用能平衡监测',
  href: '/store/goods?code=ebalance',
  as: '/store/ebalance',
  icon: ebalance,
  description: '建立水或电的用量拓扑关系，在同一时间范畴下计量各节点用量，计算出各节点平衡度，以此分析漏失、损耗以及其他非正常的水电使用等。',
  content: require( 'text-loader!./ebalance.md' )
}, {
  code: 'eupdatas',
  category: 'Manage',
  name: '能耗数据上报',
  href: '/store/goods?code=eupdatas',
  as: '/store/eupdatas',
  icon: eupdatas,
  description: '根据国家大型公共建筑能源数据上报导则，按照分项分类编码规则和数据质量要求，自动将能源数据上报至所属统计部门。',
  content: require( 'text-loader!./eupdatas.md' )
}, {
  code: 'echargedmt',
  category: 'Recycle',
  name: '宿舍用能收费',
  href: '/store/goods?code=echargedmt',
  as: '/store/echargedmt',
  icon: echargedmt,
  description: '设计了通用的宿舍用能模型，计量宿舍不同分项的用能数据，支持水电联动策略、恶性负载识别，确保用电安全。',
  content: require( 'text-loader!./echargedmt.md' )
}, {
  code: 'echargebus',
  category: 'Recycle',
  name: '商业用能收费',
  href: '/store/goods?code=echargebus',
  as: '/store/echargebus',
  icon: echargebus,
  description: '对多种能源进行回收管理，自动统计与核算用能数据，提供准确的用能账目，降低物管人员和财务人员的工作量和错误率。',
  content: require( 'text-loader!./echargebus.md' )
}, {
  code: 'echargechp',
  category: 'Recycle',
  name: '充电运营收费',
  href: '/store/goods?code=echargechp',
  as: '/store/echargechp',
  icon: echargechp,
  description: '充电桩设备管理，手机扫码充电、一卡通刷卡充电等多种支付手段，在线运营、结算和维保管理，实时数据监测，安全事件、故障报警。',
  content: require( 'text-loader!./echargechp.md' )
}, {
  code: 'echargehotw',
  category: 'Recycle',
  name: '热水运营收费',
  href: '/store/goods?code=echargehotw',
  as: '/store/echargehotw',
  icon: echargehotw,
  description: '热水设备管理和计量，实时监测温度、流量、水压、用水量等数据，实现在线运营、用户管理、账目结算、热水设备维保等管理工作。',
  content: require( 'text-loader!./echargehotw.md' )
}, {
  code: 'echargepws',
  category: 'Recycle',
  name: '自助取水收费',
  href: '/store/goods?code=echargepws',
  as: '/store/echargepws',
  icon: echargepws,
  description: '取水设备实时数据监控，故障报警，支持手机在线支付、一卡通刷卡支付，自助取水。',
  content: require( 'text-loader!./echargepws.md' )
}, {
  code: 'esmartkongtiao',
  category: 'SaveAndControl',
  name: '智能空调监控',
  href: '/store/goods?code=esmartkongtiao',
  as: '/store/esmartkongtiao',
  icon: esmartkongtiao,
  description: '『中央空调』『VRV空调』『分体空调』统一集中网络化监控，掌控空调实时运行状态、及时侦测故障并预警，实现空调的策略化运行，提高使用效能，降低能耗。',
  content: require( 'text-loader!./esmartkongtiao.md' )
}, {
  code: 'esmartlight',
  category: 'SaveAndControl',
  name: '智能照明监控',
  href: '/store/goods?code=esmartlight',
  as: '/store/esmartlight',
  icon: esmartlight,
  description: '『路灯照明』『教室照明』实现对远端灯光的遥控、遥信、遥测、遥调，远程控制灯具的开关、调节灯具的亮度、监测灯具的工作状态、计量灯具的用电量。',
  content: require( 'text-loader!./esmartlight.md' )
}, {
  code: 'waterreuse',
  category: 'SaveAndControl',
  name: '雨水回用监控',
  href: '/store/goods?code=waterreuse',
  as: '/store/waterreuse',
  icon: waterreuse,
  description: '对数据采集单元采集的各传感器数据进行综合判定，并根据设置水泵等控制部件进行自动控制，从而可以实现全自动控制、故障诊断。',
  content: require( 'text-loader!./waterreuse.md' )
}, {
  code: 'heating',
  category: 'SaveAndControl',
  name: '供暖节能监控',
  href: '/store/goods?code=heating',
  as: '/store/heating',
  icon: heating,
  description: '对供暖管网的参数进行跟踪监测，全面掌握供热状态，快速、准确地反映故障报警信息，方便维护人员及时查修，减少管道损耗。',
  content: require( 'text-loader!./heating.md' )
}, {
  code: 'substation',
  category: 'SafeAndSafety',
  name: '配变电所监管',
  href: '/store/goods?code=substation',
  as: '/store/substation',
  icon: substation,
  description: '以地图形式展示变电所位置，方便用户快速定位、查看相关设备和环境的运行参数及变化趋势，提高运维效率，降低运维成本。',
  content: require( 'text-loader!./substation.md' )
}, {
  code: 'electfire',
  category: 'SafeAndSafety',
  name: '电气火灾监管',
  href: '/store/goods?code=electfire',
  as: '/store/electfire',
  icon: electfire,
  description: '将电气安全数据传输到云端，实现故障预警掌上运维，电气安全运行评估 ，对用户用电安全实现精确监管，防患于未然。',
  content: require( 'text-loader!./electfire.md' )
}, {
  code: 'pumphouse',
  category: 'SafeAndSafety',
  name: '二次泵房监管',
  href: '/store/goods?code=pumphouse',
  as: '/store/pumphouse',
  icon: pumphouse,
  description: '建立一套远程集中监控系统，针对泵房实际情况，利用网络通讯技术，进行数据监控，实现泵房无人值守管理需要。',
  content: require( 'text-loader!./pumphouse.md' )
}, {
  code: 'watermonitor',
  category: 'SafeAndSafety',
  name: '给水管网监管',
  href: '/store/goods?code=watermonitor',
  as: '/store/watermonitor',
  icon: watermonitor,
  description: '对供水管道运行状况进行实时监测，及时对管道泄漏进行警报并确定漏点位置，提高管道运行安全水平。',
  content: require( 'text-loader!./watermonitor.md' )
}, {
  code: 'elevator',
  category: 'SafeAndSafety',
  name: '电梯运行监管',
  href: '/store/goods?code=elevator',
  as: '/store/elevator',
  icon: elevator,
  description: '实时监测电梯运行数据，包括上下行、楼层、速度、轿门和厅门的开闭状态、电力运行参数等，相关故障代码实时解析上报。',
  content: require( 'text-loader!./elevator.md' )
}, {
  code: 'firehydrant',
  category: 'SafeAndSafety',
  name: '消防安全监管',
  href: '/store/goods?code=firehydrant',
  as: '/store/firehydrant',
  icon: firehydrant,
  description: '监测消防栓的撞击晃动、倾斜倒地、水阀开关、水压、流量等数据，记录相关日志，实现报警数据的实时推送。',
  content: require( 'text-loader!./firehydrant.md' )
}, {
  code: 'manholecover',
  category: 'SafeAndSafety',
  name: '井盖安全监管',
  href: '/store/goods?code=manholecover',
  as: '/store/manholecover',
  icon: manholecover,
  description: '管理窨井盖的位置、编号、负责人等基础信息台账，远程监测窨井盖的打开状态、地下水位高度，实现报警数据的及时上报。',
  content: require( 'text-loader!./manholecover.md' )
}, {
  code: 'emonitor',
  category: 'OperationManage',
  name: '智慧物联组网',
  href: '/store/goods?code=emonitor',
  as: '/store/emonitor',
  icon: emonitor,
  description: '通过图形化建模，直观立体的展现网关、表具等设备的地理位置分布，远程监控各计量点运行状况。',
  content: require( 'text-loader!./emonitor.md' )
}, {
  code: 'runcenter',
  category: 'OperationManage',
  name: '运行调度中心',
  href: '/store/goods?code=runcenter',
  as: '/store/runcenter',
  icon: runcenter,
  description: '以事务调度为主线，制定标准化的运行管理工作流程，形成报警、报修、派工、维修、维护、反馈、评价和考核的完整运维业务体系。',
  content: require( 'text-loader!./runcenter.md' )
}, {
  code: 'esmart',
  category: 'OperationManage',
  name: '能源智慧管家',
  href: '/store/goods?code=esmart',
  as: '/store/esmart',
  icon: esmart,
  description: '通过对应用层业务系统数据的深度分析，为用户提供更具价值的综合用能报告，帮助用户有针对性地开展节能改造，实现节能案例的云端共享。',
  content: require( 'text-loader!./esmart.md' )
}, {
  code: 'eworkspace',
  category: 'OperationManage',
  name: '聚合定制空间',
  href: '/store/goods?code=eworkspace',
  as: '/store/eworkspace',
  icon: eworkspace,
  description: '通过数据聚合实现平台业务数据的“聚合”、能源管理工作资讯的“聚合”。',
  content: require( 'text-loader!./eworkspace.md' )
}];

export default {
  categorys,
  allApps: apps,
  apps: categorys.map(( category ) => {
    const relations = apps.filter(( app ) => {
      return app.category === category.code;
    });
    return {
      ...category,
      apps: relations.map(( app ) => {
        return Object.assign( app, {
          relations: app.relations
            ? apps.filter(({ code }) => app.relations.includes( code )).map(( app ) => omit( app, ['relations']))
            : relations.map(( app ) => omit( app, ['relations']))
        });
      })
    };
  })
};
