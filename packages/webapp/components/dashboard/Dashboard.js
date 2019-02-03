import React from 'react';

import Appbar from 'components/common/Appbar';
import {
  Section, Container, Columns, Column,
} from 'bloomer';

import './Dashboard.sass';

import QueueTable from 'components/queue/QueueTable';
import RequestForm from './RequestForm';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Appbar />
        <Section>
          <Container id="main">
            <Columns isDesktop>
              <Column>
                <RequestForm />
              </Column>
              <Column isSize={{default: 12, desktop: 8}} className="is-hidden-mobile">
                <QueueTable />
              </Column>
            </Columns>
          </Container>
        </Section>
      </div>
    );
  }
}

export default Dashboard;
