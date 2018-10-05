import React from 'react';
import moment from 'moment';
import { connect } from 'redux-zero/react';
import { Table } from 'bloomer';
import { actions } from 'store/tickets';

import './QueueTable.sass';

const QueueTable = ({ tickets }) => {
  return (
    <div id="queueTable">
      <Table>
        <thead>
          <th>Status</th>
          <th>Name</th>
          <th>Topics</th>
          <th>Submitted</th>
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
};

const propMap = ({ tickets }) => ({ tickets });

export default connect(propMap, actions)(QueueTable);
