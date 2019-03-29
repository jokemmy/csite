
import React from 'react';
import Page from '@layouts/Page';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Body from '@components/Body';
import bodyStyles from '@components/Body/body.less';


class Layout extends React.Component {
  render() {
    const { children, tranparent, header, footer } = this.props;
    return (
      <Page className={bodyStyles.container}>
        {header !== false ? <Header tranparent={tranparent} /> : null}
        <Body>{children}</Body>
        {footer !== false ? <Footer /> : null}
      </Page>
    );
  }
}

export default Layout;
