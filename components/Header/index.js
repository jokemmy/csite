
// import fs from 'flystore';
import { Menu } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
// import TweenOne from 'rc-tween-one';
import React, { Component } from 'react';
import { isServer } from '@lib/utils';
import menuData from './menu';
// import headerLogo from '../../assets/logo-header.png';
import styles from './header.less';


const Item = Menu.Item;
const SubMenu = Menu.SubMenu;

class Header extends Component {

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

    const { phoneOpen } = this.state;
    const { className } = this.props;
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const navChildren = this.getMenu( menuData );
    const nav = !isServer() ? isMobile ? (
      <div className={`${className}-phone-nav${phoneOpen ? ' open' : ''}`}>
        <div
          onClick={this.handlePhoneClick}
          className={`${className}-phone-nav-bar`}>
          <em />
          <em />
          <em />
        </div>
        <div className={`${className}-phone-nav-text`}>
          <Menu selectedKeys={['']} mode="inline" theme="dark">
            {navChildren}
          </Menu>
        </div>
      </div>
    ) : (
      <span className={`${className}-nav`}>
        <Menu mode="horizontal" selectedKeys={['']} theme="dark">
          {navChildren}
        </Menu>
      </span>
    ) : null;

    return (
      <header {...props}>
        <div className={`${className}-container`}>
          <div className={`${className}-logo`}>
            {/*<img alt="" src={headerLogo} />*/}
          </div>
          {nav}
        </div>
      </header>
    );
  }
}

export default Header;
