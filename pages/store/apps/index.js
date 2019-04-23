
import edept from '@assets/images/store/edept.svg?sprite';


const apps = [{
  code: 'estatis',
  name: '建筑能耗管理',
  href: '/store/goods?code=estatis',
  as: '/store/estatis',
  icon: edept,
  description: '根据国家机关办公建筑和大型公共建筑能耗监测系统、高等学校校园建筑节能监管系统等相关导则和《绿色建筑评价标准》',
  content: require( 'text-loader!./edept.md' ),
  relations: ['edept']
}, {
  code: 'edept',
  name: '部门能耗管理',
  href: '/store/goods?code=edept',
  as: '/store/edept',
  icon: edept,
  description: '根据国家机关办公建筑和大型公共建筑能耗监测系统、高等学校校园建筑节能监管系统等相关导则和《绿色建筑评价标准》',
  content: require( 'text-loader!./edept.md' ),
  relations: ['estatis']
}, {
  name: '设施能耗管理',
  icon: edept,
  description: '根据国家机关办公建筑和大型公共建筑能耗监测系统、高等学校校园建筑节能监管系统等相关导则和《绿色建筑评价标准》'
}, {
  name: '用能账目管理',
  icon: edept
}, {
  name: '用能平衡检测',
  icon: edept
}, {
  name: '能耗数据上报',
  icon: edept
}, {
  name: '宿舍用能收费',
  icon: edept
}, {
  name: '商业用能收费',
  icon: edept
}, {
  name: '充电运营收费',
  icon: edept
}, {
  name: '热水运营收费',
  icon: edept
}, {
  name: '自助取水收费',
  icon: edept
}, {
  name: '智能空调监控',
  icon: edept
}, {
  name: '智能照明监控',
  icon: edept
}, {
  name: '雨水回用监控',
  icon: edept
}, {
  name: '供暖节能监控',
  icon: edept
}, {
  name: '配变电所监管',
  icon: edept
}, {
  name: '电气火灾监管',
  icon: edept
}, {
  name: '二次泵房监管',
  icon: edept
}, {
  name: '给水管网监管',
  icon: edept
}, {
  name: '电梯运行监管',
  icon: edept
}, {
  name: '消防安全监管',
  icon: edept
}, {
  name: '井盖安全监管',
  icon: edept
}, {
  name: '智慧物联组网',
  icon: edept
}, {
  name: '运行调度中心',
  icon: edept
}, {
  name: '能源智慧管家',
  icon: edept
}, {
  name: '聚合定制空间',
  icon: edept
}];

export default apps.map(( app ) => {
  return {
    ...app,
    relations: app.relations ? apps.filter(({ code }) => app.relations.includes( code )) : []
  };
});
