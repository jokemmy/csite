
const suffix = 'AnimationFrame';
const vendors = [ '', 'moz', 'webkit' ];
const getAFFunc = ( name ) => {
  let func = null;
  return ( ...args ) => {

    if ( func ) {
      return func( ...args );
    }

    const win = window;
    for ( let i = 0, l = vendors.length; i < l; i++ ) {
      const prefix = vendors[i];
      let funcName = name + suffix;
      if ( prefix ) {
        funcName = prefix + funcName.charAt( 0 ).toUpperCase() + funcName.slice( 1 );
      }
      func = win[funcName];
      if ( func ) {
        break;
      }
    }
    return func ? func( ...args ) : func;
  };
};

export const requestAnimationFrame = getAFFunc( 'request' );
const cancelFunc = getAFFunc( 'cancel' );
const cancelRequestFunc = getAFFunc( 'cancelRequest' );
export const cancelAnimationFrame = ( ...args ) => {
  return cancelFunc( ...args ) || cancelRequestFunc( ...args );
};
