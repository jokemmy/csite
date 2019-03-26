
export default {
  menu1: {
    text: '首页',
    url: '/'
  },
  menu2: {
    text: '关于我们',
    menu: {
      menu21: {
        text: '公司简介'
      },
      menu22: {
        text: '公司资质'
      },
      menu23: {
        text: '设计团队'
      }
    }
  },
  menu3: {
    text: '营业方向',
    menu: {
      menu31: {
        text: '合作客户'
      },
      menu32: {
        text: '住宅公寓',
        url: '/projects?type=1'
      },
      menu33: {
        text: '商业办公',
        url: '/projects?type=2'
      },
      menu34: {
        text: '酒店度假',
        url: '/projects?type=3'
      },
      menu35: {
        text: '文化医疗',
        url: '/projects?type=4'
      },
      menu36: {
        text: '艺术软装',
        url: '/projects?type=5'
      }
    }
  },
  menu4: {
    text: '联系我们',
    menu: {
      menu21: {
        text: '地址电话'
      },
      menu22: {
        text: '地图'
      }
    }
  },
  menu5: {
    text: '招贤纳士',
    menu: {
      menu51: {
        text: '企业文化'
      },
      menu52: {
        text: '员工活动'
      },
      menu53: {
        text: '校园招聘'
      },
      menu54: {
        text: '社会招聘'
      }
    }
  }
};
