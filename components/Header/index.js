
import { Menu } from 'antd';
import Link from 'next/link';
import classnames from 'classnames';
import React, { Component } from 'react';
import { ThemeContext } from '@components/Themes';
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
    this.menu = React.createRef();
  }

  handlePhoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    if ( phoneOpen ) {
      this.setState(() => ({
        phoneOpen,
        animEnd: true,
        menuHeight: this.menu.current.scrollHeight
      }));
    } else {
      this.setState(() => ({
        animEnd: true,
        menuHeight: this.menu.current.scrollHeight
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
      menuHeight: this.menu.current.scrollHeight
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
    const { phoneOpen, menuHeight, animEnd } = this.state;
    const { className, tranparent, ...props } = this.props;
    this.navChildren = this.navChildren || this.getMenu( menuData );

    return (
      <header {...props} className={classnames( 'header', className )}>
        <div className={'header-container'}>
          <div className={'header-logo'}>
            {/*<img alt="" src={headerLogo} />*/}
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
                ref={this.menu}
                className={styles.phoneMenuContainer}
                onTransitionEnd={this.handlePhoneMenuTransitionEnd}
                style={isMobile && animEnd ? { height: tranparent ? menuHeight : Math.max( 48, menuHeight ) } : null}>
                <Menu selectedKeys={['']} mode="inline" theme="dark" onSelect={this.handlePhoneMenuSelect}>
                  {this.navChildren}
                </Menu>
              </div>
            </span>
          ) : (
            <div className={styles.menu} style={tranparent ? { height: 0 } : null}>
              <Menu mode="horizontal" selectedKeys={['']} theme="dark">
                {this.navChildren}
              </Menu>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
