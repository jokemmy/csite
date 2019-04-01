
import is from 'whatitis';
import { getOffset } from 'rc-util/lib/Dom/css';
import { requestAnimationFrame, cancelAnimationFrame } from './requestAnimationFrame';

let scrollingHandle = null;
export default function scrollTo( options ) {

  const { scrollElement, anchor, top } = is.PlainObject( options ) ? options : {};
  const doc = scrollElement || ( document.body.scrollTop ? document.body : document.documentElement );
  const maxScrollTop = doc.scrollHeight - doc.clientHeight;
  let scrollTop = is.Number( options ) ? Math.min( maxScrollTop, Math.max( 0, options )) : null;
  if ( options === -1 ) {
    scrollTop = maxScrollTop;
  }

  const rate = 8;
  let from = doc.scrollTop;
  let to = scrollTop === null ? getOffset( anchor ).top - top : scrollTop;

  if ( from === to || typeof from != 'number' ) {
    return;
  }

  const toBigger = to - from > 0;

  function step() {
    scrollingHandle = null;
    let delta = ( to - from ) / rate;
    from = from + ( toBigger ? Math.max( 1, Math.min( 20, delta )) : Math.min( -1, Math.max( -20, delta )));

    if ( toBigger ? to - from < 1 : from - to < 1 ) {
      doc.scrollTop = to;
      return;
    }
    doc.scrollTop = from;
    if ( from >= maxScrollTop || from <= 0 ) {
      return;
    }
    scrollingHandle = requestAnimationFrame( step );
  }

  if ( scrollingHandle ) {
    cancelAnimationFrame( scrollingHandle );
  }

  step();
}
