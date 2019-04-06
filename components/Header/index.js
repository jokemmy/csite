
import { Menu, Popover } from 'antd';
import Link from 'next/link';
import classnames from 'classnames';
import React, { Component } from 'react';
import { ThemeContext } from '@components/Themes';
import logo from '@assets/images/logo.png';
import logoColor from '@assets/images/logo-color.png';
import menuData from './menu';
import styles from './header.less';


const Item = Menu.Item;
const SubMenu = Menu.SubMenu;

class Header extends Component {

  static contextType = ThemeContext;

  constructor( props ) {
    super( props );
    this.state = {
      phoneOpen: false,
      menuHeight: 0,
      animEnd: true
    };
    this.mobildMenuRef = React.createRef();
    this.headerRef = React.createRef();
  }

  handlePhoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    if ( phoneOpen ) {
      this.setState(() => ({
        phoneOpen,
        animEnd: true,
        menuHeight: this.mobildMenuRef.current.scrollHeight
      }));
    } else {
      this.setState(() => ({
        animEnd: true,
        menuHeight: this.mobildMenuRef.current.scrollHeight
      }), () => {
        setTimeout(() => {
          this.setState(() => ({
            phoneOpen,
            animEnd: true,
            menuHeight: 0
          }));
        });
      });
    }
  };

  handlePhoneMenuTransitionEnd = () => {
    this.setState(( state ) => ({
      animEnd: state.menuHeight === 0 || false
    }));
  };

  handlePhoneMenuSelect = () => {
    this.setState(() => ({
      animEnd: true,
      menuHeight: this.mobildMenuRef.current.scrollHeight
    }), () => {
      setTimeout(() => {
        this.setState(() => ({
          phoneOpen: false,
          animEnd: true,
          menuHeight: 0
        }));
      });
    });
  };

  getPCMenu = ( data ) => Object.entries( data ).map(([ key, { align, text, menu, url, className, as, col }]) => {
    const getContainer = () => { return this.headerRef.current; };
    const content = menu ? Object.entries( menu ).map(([ key, { text, url, as }]) => {
      return (
        <Link key={key} as={as} href={url || '/'}>
          <a className={styles.linkItem}>
            <div>{text}</div>
          </a>
        </Link>
      );
    }) : null;

    return menu ? (
      <Popover
        key={key}
        content={content}
        arrowPointAtCenter
        mouseEnterDelay={0.5}
        placement={align || 'bottom'}
        overlayClassName={classnames( styles.subMenu, { [styles[`subMenuCol${col}`]]: !!col })}
        getPopupContainer={getContainer}>
        <a className={classnames( styles.link, className )}>{text}</a>
      </Popover>
    ): (
      <Link key={key} as={as} href={url || '/'}>
        <a className={classnames( styles.link, className )}>{text}</a>
      </Link>
    );
  });

  getMobileMenu = ( data ) => Object.entries( data ).map(([ key, { text, menu, url, as, className }]) => {
    return menu ? (
      <SubMenu key={`${key}_sub`} title={text}>
        {this.getMobileMenu( menu )}
      </SubMenu>
    ) : (
      <Item key={key}>
        <Link as={as} href={url || '/'}>
          <a className={className}>{text}</a>
        </Link>
      </Item>
    );
  });

  render() {

    const { isMobile } = this.context;
    const { phoneOpen, menuHeight, animEnd } = this.state;
    const { className, transparent, mode, ...props } = this.props;
    this.PCMenu = this.PCMenu || this.getPCMenu( menuData );
    this.mobileMenu = this.mobileMenu || this.getMobileMenu( menuData );

    return (
      <header {...props} ref={this.headerRef} className={classnames( 'header', className, {
        [styles.dark]: mode === 'dark',
        [styles.light]: mode === 'light'
      })}>
        <div className="header-container">
          <div className="header-logo">
            <img alt="logo" src={logo} />
          </div>
          {isMobile ? (
            <span className={classnames( styles.phoneMenu, { [styles.open]: phoneOpen })}>
              <div
                onClick={this.handlePhoneClick}
                className={styles.mobileMenu}>
                <em />
                <em />
                <em />
              </div>
              <div
                ref={this.mobildMenuRef}
                className={styles.phoneMenuContainer}
                onTransitionEnd={this.handlePhoneMenuTransitionEnd}
                style={isMobile && animEnd ? { height: transparent ? menuHeight : Math.max( 48, menuHeight ) } : null}>
                <Menu selectedKeys={['']} mode="inline" theme="dark" onSelect={this.handlePhoneMenuSelect}>
                  {this.mobileMenu}
                </Menu>
              </div>
            </span>
          ) : (
            <div className={styles.menu} style={transparent ? { height: 0 } : null}>
              {this.PCMenu}
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
