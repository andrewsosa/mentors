# Routes

## Frontend

### `/at/:event`

Shows the event landing page.

### `/at/:event/queue`

Shows a FIFO queue of tickets. Should have filter options to remove topics.

### `/u/:user`

Shows a user's profile containing:

- Tickets submitted
- Tickets answered
- Some sort of computed reputation score

### `/events`

## Backend

All routes prefixed with `/api`.

### `/events`

Returns a list of all the events

### `/:event/tickets`

All the tickets at `event`. Should have filter option for ticket status.

The queue is basically `/:event/tickets?status=open`.

### `/:event/topics`

All topics associated with tickets at `event`. This should be ordered by the popularity (# times in tickets).

### `/:user/submitted{/:event}`

All tickets submitted by the user. Additonal URI component `/:event` will
restrict response tickets to the corresponding event.

Client side, this will probably be a query string (e.g. `?at=hackfsu`).
