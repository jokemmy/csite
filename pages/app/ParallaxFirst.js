
import React from 'react';
import Parallax from '@components/Parallax';
import Paper from '@components/Parallax/Paper';


class WallPaper extends React.Component {
  render() {
    return (
      <Parallax>
        <Paper depth={0.2}>
        11111
        </Paper>
        <Paper depth={0.4}>
        22222
        </Paper>
        <Paper depth={0.6}>
        33333
        </Paper>
      </Parallax>
    );
  }
}


export default WallPaper;
