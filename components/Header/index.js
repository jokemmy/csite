
// import fs from 'flystore';
import { Menu } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
// import TweenOne from 'rc-tween-one';
import React, { Component } from 'react';
import { isServer } from '@lib/utils';
import { ThemeContext } from '@components/Themes';
import menuData from './menu';
// import headerLogo from '../../assets/logo-header.png';
import styles from './header.less';


const Item = Menu.Item;
const SubMenu = Menu.SubMenu;

class Header extends Component {

  static contextType = ThemeContext;

  static defaultProps = {
    className: 'header'
  };

  static propTypes = {
    className: PropTypes.string
  };

  state = {
    phoneOpen: false
    // bgColor: ''
  };

  componentDidMount() {
    // setTimeout(() => {
    //   if (( document.scrollingElement || document.body ).scrollTop > 345 ) {
    //     this.setState({ bgColor: 'rgba(0,0,0,0.8)' });
    //   } else {
    //     this.setState({ bgColor: '' });
    //   }
    // }, 300 );
    // fs( 'header' ).watch( 'bgcolor', ( bgColor ) => {
    //   this.setState({ bgColor });
    // });
  }

  handlePhoneClick = () => {
    this.setState(( state ) => ({
      phoneOpen: !state.phoneOpen
    }));
  };

  getMenu = ( data ) => Object.entries( data ).map(([ key, { text, menu, url }]) => {
    return menu ? (
      <SubMenu key={`${key}_sub`} title={text}>
        {this.getMenu( menu )}
      </SubMenu>
    ) : (
      <Item key={key}>
        <Link href={url || '/'}>
          <a>{text}</a>
        </Link>
      </Item>
    );
  });

  render() {

    const { isMobile } = this.context;
    const { phoneOpen } = this.state;
    const props = { ...this.props };
    const navChildren = this.getMenu( menuData );
    const nav = isMobile ? (
      <span className={styles.phoneMenu}>
        <div
          onClick={this.handlePhoneClick}
          className={`phone-nav-bar`}>
          <em />
          <em />
          <em />
        </div>
        <div className={`phone-nav-text`}>
          <Menu selectedKeys={['']} mode="inline" theme="dark">
            {navChildren}
          </Menu>
        </div>
      </span>
    ) : (
      <span className={styles.menu}>
        <Menu mode="horizontal" selectedKeys={['']} theme="dark" className={styles.headerBg}>
          {navChildren}
        </Menu>
      </span>
    );

    return (
      <header {...props}>
        <div className={`container`}>
          <div className={`logo`}>
            {/*<img alt="" src={headerLogo} />*/}
          </div>
          {nav}
        </div>
      </header>
    );
  }
}

export default Header;
