
export default {
  menu1: {
    text: '首页',
    url: '/'
  },
  menu2: {
    text: '关于我们',
    url: '/store'
  },
  menu3: {
    text: '智能硬件',
    menu: {
      menu31: {
        text: '终端设备类'
      },
      menu32: {
        text: '接口转换类',
        url: '/projects?type=1'
      },
      menu33: {
        text: '智能网关类',
        url: '/projects?type=2'
      },
      menu34: {
        text: '智能网由类',
        url: '/projects?type=3'
      },
      menu35: {
        text: '前置服务类',
        url: '/projects?type=3'
      },
      menu36: {
        text: '集成机柜类',
        url: '/projects?type=3'
      }
    }
  },
  menu4: {
    text: '解决方案',
    menu: {
      menu31: {
        text: '智慧园区'
      },
      menu32: {
        text: '智慧校园',
        url: '/projects?type=1'
      },
      menu33: {
        text: '智慧建筑',
        url: '/projects?type=2'
      },
      menu34: {
        text: '其他场景',
        url: '/projects?type=3'
      }
    }
  },
  menu5: {
    text: '应用商店',
    menu: {
      menu21: {
        text: '能源管理'
      },
      menu22: {
        text: '能源回收'
      },
      menu23: {
        text: '节能控制'
      },
      menu24: {
        text: '安全保障'
      },
      menu25: {
        text: '运行管理'
      }
    }
  }
};
