
// Post data to parent thread
// self.postMessage({ foo: 'foo' })

// Respond to message from parent thread
self.addEventListener( 'message', ({ data }) => {
  for ( let i = 0, l = data.length; i < l; i++ ) {
    let xhr = new XMLHttpRequest();
    xhr.open( 'GET', data[i], true );
    xhr.responseType = "blob";
    try {
      xhr.send( null );
    } catch( e ) {}
  }
});
