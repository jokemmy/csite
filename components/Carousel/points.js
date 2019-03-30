
import React from 'react';
import styles from './points.less';


class Points extends React.Component {

  handleClick = ( i ) => () => {
    const { onChange, index } = this.props;
    if ( index !== i ) {
      onChange( i );
    }
  };

  render() {
    const { points, index, size } = this.props;
    const sizeStyle = { height: size };
    const blockProps = ( i ) => ({
      className: styles.block,
      onClick: this.handleClick( i ),
      style: sizeStyle
    });
    return (
      <div className={styles.track} style={{ height: points.length * size }}>
        {points.map(( point, i ) => {
          return i === index ? (
            <div key={`point-${i}`} {...blockProps( i )}></div>
          ) : (
            <div key={`active-point-${i}`} {...blockProps( i )}></div>
          );
        })}
        <div className={styles.thumb} style={{ top: index * size, ...sizeStyle }} />
      </div>
    );
  }
}

export default Points;
