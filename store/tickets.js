import createStore from 'redux-zero';

export const store = createStore({
  tickets: [],
});

export const actions = _store => ({
  addTicket: (state, ticket) => ({ tickets: state.tickets.concat([ticket]) }),
  clearTickets: () => ({ tickets: [] }),
  // popTicket: (state, ticket) => {}
});
