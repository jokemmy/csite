
export default {
  menu1: {
    text: '首页',
    url: '/'
  },
  menu2: {
    text: '关于我们',
    url: '/about'
  },
  menu3: {
    text: '智能硬件',
    col: 3,
    align: 'bottom',
    menu: {
      menu31: {
        text: '终端设备类',
        as: '/hardware/1',
        url: '/hardware?type=1'
      },
      menu32: {
        text: '接口转换类',
        as: '/hardware/2',
        url: '/hardware?type=12'
      },
      menu33: {
        text: '智能网关类',
        as: '/hardware/3',
        url: '/hardware?type=3'
      },
      menu34: {
        text: '智能网由类',
        as: '/hardware/4',
        url: '/hardware?type=4'
      },
      menu35: {
        text: '前置服务类',
        as: '/hardware/5',
        url: '/hardware?type=5'
      },
      menu36: {
        text: '集成机柜类',
        as: '/hardware/6',
        url: '/hardware?type=6'
      }
    }
  },
  menu4: {
    text: '解决方案',
    col: 2,
    align: 'bottom',
    menu: {
      menu31: {
        text: '智慧园区',
        as: '/scene/1',
        url: '/scene?type=1'
      },
      menu32: {
        text: '智慧校园',
        as: '/scene/2',
        url: '/scene?type=2'
      },
      menu33: {
        text: '智慧建筑',
        as: '/scene/3',
        url: '/scene?type=3'
      },
      menu34: {
        text: '其他场景',
        as: '/scene/4',
        url: '/scene?type=4'
      }
    }
  },
  menu5: {
    text: '应用商店',
    col: 3,
    align: 'bottomLeft',
    menu: {
      menu21: {
        text: '能源管理',
        as: '/store/1',
        url: '/store?type=1'
      },
      menu22: {
        text: '能源回收',
        as: '/store/2',
        url: '/store?type=2'
      },
      menu23: {
        text: '节能控制',
        as: '/store/3',
        url: '/store?type=3'
      },
      menu24: {
        text: '安全保障',
        as: '/store/4',
        url: '/store?type=4'
      },
      menu25: {
        text: '运行管理',
        as: '/store/5',
        url: '/store?type=5'
      }
    }
  }
};
