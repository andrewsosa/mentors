import createStore from 'redux-zero';

const dummyTicket = {
  requesteeName: 'Andrew Sosa',
  problemStatement: 'React',
  location: '2nd Floor',
  created: new Date(),
  topics: [],
};

export const store = createStore({
  tickets: [dummyTicket],
});

export const actions = _store => ({
  addTicket: (state, ticket) => ({ tickets: state.tickets.push(ticket) }),
  // popTicket: (state, ticket) => {}
});
