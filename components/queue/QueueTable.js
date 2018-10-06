import React from 'react';
import moment from 'moment';
import openSocket from 'socket.io-client';
import { connect } from 'redux-zero/react';
import { Table } from 'bloomer';
import { actions } from 'store/tickets';

import './QueueTable.sass';

class QueueTable extends React.Component {
  constructor(props) {
    super(props);

    const { addTicket } = this.props;
    const socket = openSocket('http://localhost:3000');
    socket.on('ticket', ticket => addTicket(ticket));
  }

  render() {
    const { tickets } = this.props;
    return (
      <div id="queueTable">
        <Table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Name</th>
              <th>Topics</th>
              <th>Submitted</th>
            </tr>
          </thead>
          <tbody>
            {
              tickets.map(t => (
                <tr key="dummy">
                  <td>[ status ]</td>
                  <td>{t.requesteeName}</td>
                  <td>{t.problemStatement}</td>
                  <td>{moment(t.created).fromNow()}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
};

const props = ({ tickets }) => ({ tickets });

export default connect(props, actions)(QueueTable);
