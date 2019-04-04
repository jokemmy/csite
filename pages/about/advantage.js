
import fentikongtiao from '@assets/images/svg/fentikongtiao.svg?sprite';
import gongnuan from '@assets/images/svg/gongnuan.svg?sprite';
import jiaoshizhaoming from '@assets/images/svg/jiaoshizhaoming.svg?sprite';
import jinggai from '@assets/images/svg/jinggai.svg?sprite';
import ludengguanli from '@assets/images/svg/ludengguanli.svg?sprite';
import reshuiyunyingshoufei from '@assets/images/svg/reshuiyunyingshoufei.svg?sprite';
import susheshoufei from '@assets/images/svg/susheshoufei.svg?sprite';
import VRVkongtiao from '@assets/images/svg/VRVkongtiao.svg?sprite';
import yongnengpingheng from '@assets/images/svg/yongnengpingheng.svg?sprite';
import yunhangtiaodu from '@assets/images/svg/yunhangtiaodu.svg?sprite';
import yushuihuishou from '@assets/images/svg/yushuihuishou.svg?sprite';
import zhihuiwulianzuwang from '@assets/images/svg/zhihuiwulianzuwang.svg?sprite';
import zhinengguanjia from '@assets/images/svg/zhinengguanjia.svg?sprite';
import zhongyangkongtiao from '@assets/images/svg/zhongyangkongtiao.svg?sprite';
import zizhuqushuishoufei from '@assets/images/svg/zizhuqushuishoufei.svg?sprite';
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
    </div>
  );
}

export default Advantage;
