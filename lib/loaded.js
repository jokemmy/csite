
import fs from 'flystore';
import React from 'react';


const loaders = {};
const storeLoaded = fs( '@loaded' );

export const pushLoader = ( key, loader ) => {
  if ( loaders[key]) {
    loaders[key] += 1;
  } else {
    loaders[key] = 1;
  }
  if ( loader instanceof Promise ) {
    loader.finally(() => popLoader( key ));
  }
};

export const popLoader = ( key ) => {
  if ( loaders[key] && loaders[key] > 1 ) {
    loaders[key] -= 1;
  } else {
    delete loaders[key];
  }
};

export const isLoaded = () => {
  return Object.keys( loaders ).length === 0;
};

export const loaded = () => {
  const loaded = isLoaded();
  if ( loaded ) {
    storeLoaded.dispense( 'loaded' );
  }
  return loaded;
};

export const whileLoaded = ( func ) => {
  if ( isLoaded()) {
    func();
    return null;
  }
  return storeLoaded.wait( 'loaded', func );
};


export function withLoaded( Comp ) {
  return class WithLoaded extends React.Component {

    state = {
      isLoaded: false
    };

    componentDidMount() {
      this.loadedHandle = whileLoaded(() => {
        this.setState({
          isLoaded: true
        });
      });
    }

    componentWillUnmount() {
      if ( this.loadedHandle ) {
        this.loadedHandle.clear();
        this.loadedHandle = null;
      }
    }

    render() {
      return (
        <Comp
          {...this.props}
          isLoaded={this.state.isLoaded} />
      );
    }
  };
}
