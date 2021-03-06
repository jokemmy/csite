
import fentikongtiao from '@assets/images/about/fentikongtiao.svg?sprite';
import gongnuan from '@assets/images/about/gongnuan.svg?sprite';
import jiaoshizhaoming from '@assets/images/about/jiaoshizhaoming.svg?sprite';
import jinggai from '@assets/images/about/jinggai.svg?sprite';
import ludengguanli from '@assets/images/about/ludengguanli.svg?sprite';
import reshuiyunyingshoufei from '@assets/images/about/reshuiyunyingshoufei.svg?sprite';
import susheshoufei from '@assets/images/about/susheshoufei.svg?sprite';
import VRVkongtiao from '@assets/images/about/VRVkongtiao.svg?sprite';
import yongnengpingheng from '@assets/images/about/yongnengpingheng.svg?sprite';
import yunhangtiaodu from '@assets/images/about/yunhangtiaodu.svg?sprite';
import yushuihuishou from '@assets/images/about/yushuihuishou.svg?sprite';
import zhihuiwulianzuwang from '@assets/images/about/zhihuiwulianzuwang.svg?sprite';
import zhinengguanjia from '@assets/images/about/zhinengguanjia.svg?sprite';
import zhongyangkongtiao from '@assets/images/about/zhongyangkongtiao.svg?sprite';
import zizhuqushuishoufei from '@assets/images/about/zizhuqushuishoufei.svg?sprite';
import styles from './advantage.less';


function Point({ x, y, delay }) {
  return (
    <div className={styles.point} style={{ left: x, top: y }}>
      <div className={styles.pointScale} style={{ animationDelay: `${delay}ms` }} />
    </div>
  );
}

function Label({ x, y, text }) {
  return (
    <div className={styles.label} style={{ left: x, top: y }}>
      <div className={styles.arrow} />
      {text}
    </div>
  );
}

function Icon({ x, y, icon }) {
  return (
    <div className={styles.icon} style={{ left: x, top: y }}>
      <svg aria-hidden="true" className={styles.svgIcon}>
        <use xlinkHref={`#${icon.id}`} />
      </svg>
    </div>
  );
}

function Advantage() {
  return (
    <div className={styles.advantage}>
      <Label x="10%" y="70%" text="更安全" />
      <Point x="10%" y="70%" delay={200} />
      <Label x="30%" y="30%" text="更可靠" />
      <Point x="30%" y="30%" delay={1200} />
      <Label x="50%" y="80%" text="更高效" />
      <Point x="50%" y="80%" delay={3000} />
      <Label x="70%" y="70%" text="更互联互通" />
      <Point x="70%" y="70%" delay={1000} />
      <Label x="80%" y="30%" text="更可持续" />
      <Point x="80%" y="30%" delay={4000} />
      <Icon x="4%" y="3%" icon={fentikongtiao} />
      <Icon x="22%" y="6%" icon={gongnuan} />
      <Icon x="10%" y="30%" icon={jiaoshizhaoming} />
      <Icon x="1%" y="50%" icon={jinggai} />
      <Icon x="72%" y="30%" icon={ludengguanli} />
      <Icon x="20%" y="72%" icon={reshuiyunyingshoufei} />
      <Icon x="37%" y="5%" icon={susheshoufei} />
      <Icon x="27%" y="45%" icon={yongnengpingheng} />
      <Icon x="46%" y="35%" icon={yunhangtiaodu} />
      <Icon x="60%" y="8%" icon={yushuihuishou} />
      <Icon x="62%" y="45%" icon={VRVkongtiao} />
      <Icon x="88%" y="40%" icon={zhihuiwulianzuwang} />
      <Icon x="82%" y="75%" icon={zhinengguanjia} />
      <Icon x="86%" y="5%" icon={zhongyangkongtiao} />
      <Icon x="37%" y="60%" icon={zizhuqushuishoufei} />
      <div className={styles.lines}>
        <div>
          应用支持平台
        </div>
        <div>
          数据中心平台
        </div>
        <div>
          物联感知平台
        </div>
      </div>
    </div>
  );
}

export default Advantage;
