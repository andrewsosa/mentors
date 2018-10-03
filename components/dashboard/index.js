import React from 'react';

import Appbar from 'components/common/appbar';

import './index.sass';


class Dashboard extends React.Component {
  state = {
    loggedIn: false,
  };

  render() {
    return (
      <div className="dashboard">
        <Appbar />
      </div>
    );
  }
}

export default Dashboard;
