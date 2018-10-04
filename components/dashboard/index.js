import React from 'react';

import Appbar from 'components/common/appbar';
import { Section, Container, Columns, Column } from 'bloomer';

import './index.sass';

import RequestForm from './RequestForm';

class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <Appbar />
        <Section>
          <Container id="main">
            <Columns>
              <Column>
                <RequestForm />
              </Column>
              <Column isSize={8} className="content">
                {/* <h2>Welcome to hackOverflow!</h2> */}
              </Column>
            </Columns>
          </Container>
        </Section>
      </div>
    );
  }
}

export default Dashboard;
