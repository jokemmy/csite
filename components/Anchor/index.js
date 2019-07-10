
import is from 'whatitis';
import React from 'react';
import omit from 'omit.js';
import uuid from 'uuid/v1';
import { getOffset, getClientSize } from 'rc-util/lib/Dom/css';
import addEventListener from 'rc-util/lib/Dom/addEventListener';


const AnchorContext = React.createContext({
  current: null,
  anchors: []
});

export class Anchor extends React.Component {

  static defaultProps = {
    top: 0
  };

  state = {
    clienSize: {},
    current: null,
    anchors: []
  };

  componentDidMount() {
    this.resizeEvent = addEventListener( window, 'resize', this.handleClientSize );
    this.scrollEvent = addEventListener( document, 'scroll', this.handleScroll );
    requestAnimationFrame(() => {
      // const scroll = document.createEvent( 'Events' );
      // scroll.initEvent( 'scroll', true, true );
      // window.dispatchEvent( scroll );
      this.handleClientSize();
    });
  }

  componentWillUnmount() {
    if ( this.scrollEvent ) {
      this.scrollEvent.remove();
      this.scrollEvent = null;
    }
    if ( this.resizeEvent ) {
      this.resizeEvent.remove();
      this.resizeEvent = null;
    }
  }

  handleClientSize = () => {
    // eslint-disable-next-line
    this.state.clienSize = getClientSize();
    this.handleScroll();
  };

  handleScroll = () => {
    const { top } = this.props;
    const { current, clienSize } = this.state;
    const anchor = this.state.anchors.find(({ anchor }) => {
      const offset = anchor.dom.getBoundingClientRect();
      return clienSize.height > offset.top && offset.top > top;
    });
    if ( anchor && ( !current || current.uid !== anchor.anchor.uid )) {
      // eslint-disable-next-line
      this.state.current = anchor.anchor ;
      this.handleChange( anchor.anchor );
    }
  };

  handleChange = ( anchor ) => {
    if ( is.Function( this.props.onChange )) {
      this.props.onChange( anchor, this.state.anchors );
    }
  };

  setAnchor = ( anchor ) => {
    const exist = this.state.anchors.find(({ uid }) => uid === anchor.uid );
    if ( !exist ) {
      this.state.anchors.push({
        offset: getOffset( anchor.dom ),
        anchor
      });
      this.state.anchors.sort(( a, b ) => a.offset.top - b.offset.top );
    }
  };

  setAnchorValue = ( uid, value ) => {
    const exist = this.state.anchors.find(( anchor ) => uid === anchor.uid );
    if ( exist ) {
      exist.value = value;
    }
  };

  deleteAnchor = ( uid ) => {
    // eslint-disable-next-line
    this.state.anchors = this.state.anchors.filter(( anchor ) => uid !== anchor.uid );
  };

  render() {
    const { children, ...props } = this.props;
    return (
      <AnchorContext.Provider value={{
        setAnchor: this.setAnchor,
        setAnchorValue: this.setAnchorValue,
        deleteAnchor: this.deleteAnchor
      }}>
        <div {...props}>
          {children}
        </div>
      </AnchorContext.Provider>
    );
  }
}

export class Link extends React.Component {

  static contextType = AnchorContext;

  constructor( props ) {
    super( props );
    this.uid = props.id || uuid();
    this.domHref = React.createRef();
  }

  componentDidMount() {
    const { setAnchor } = this.context;
    setAnchor({
      uid: this.uid,
      value: this.props.value,
      dom: this.domHref.current
    });
  }

  componentDidUpdate() {
    const { setAnchorValue } = this.context;
    setAnchorValue( this.uid, this.props.value );
  }

  componentWillUnmount() {
    const { deleteAnchor } = this.context;
    deleteAnchor( this.uid );
  }

  render() {
    const { component, children, ...props } = this.props;
    return React.createElement(
      component || 'span',
      { ...omit( props, ['value']), ref: this.domHref },
      children
    );
  }
}
