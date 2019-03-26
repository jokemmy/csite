
import React from 'react';
import Media from 'react-media';
import { ThemeContext } from '@components/Themes';


class Base extends React.Component {

  static contextType = ThemeContext;

  render() {
    const { children, isMobile } = this.props;
    return (
      <ThemeContext.Provider value={{ isMobile }}>
        {children}
      </ThemeContext.Provider>
    );
  }
}


const Wrapped = props => (
  <Media query="(max-width: 767px)" defaultMatches={false}>
    {isMobile => <Base {...props} isMobile={isMobile} />}
  </Media>
);

export default Wrapped;
