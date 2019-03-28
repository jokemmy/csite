
import React from 'react';
import Page from '@layouts/Page';


class Store extends React.Component {
  componentWillUnmount() {
    console.log("4:", 4)
  }
  render() {
    return (
      <Page>
      </Page>
    );
  }
}
// function Store() {
//   return (
//     <Page>
//     </Page>
//   );
// }

export default Store;
