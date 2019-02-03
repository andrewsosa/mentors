import React from 'react';
import { connect } from 'redux-zero/react';
import axios from 'axios';

// import Select from '@atlaskit/select';
import Button from '@atlaskit/button';
import { FieldTextStateless } from '@atlaskit/field-text';
import { CreatableSelect } from '@atlaskit/select';

import Form, {
  Field, FormHeader, FormSection, FormFooter,
} from '@atlaskit/form';

import { Box } from 'bloomer';

import './RequestForm.sass';

class RequestForm extends React.Component {
  state = {
    name: '',
    topics: [],
    topicOptions: [],
    location: '',
  }

  componentWillMount() {
    axios.get('/api/topics')
      .then(res => res.data)
      .then(topics => this.setState({ topicOptions: topics }));
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleLocationChange = (e) => {
    this.setState({ location: e.target.value });
  }

  handleTopicChange = (e) => {
    this.setState({ topics: e.map(t => t.value) });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, topics, location } = this.state;
    axios.post('/api/tickets', { name, topics, location })
      .then((res) => {
        console.log(res);
        this.formRef.reset();
      });
  }

  render() {
    const {
      name, topics, topicOptions, location,
    } = this.state;

    return (
      <Box id="requestForm">
        <Form
          name="create-ticket"
          // onReset={this.onResetHandler}
          onSubmit={this.handleFormSubmit}
          ref={(form) => {
            this.formRef = form;
          }}
          // target="submitFrame"
        >
          <FormHeader title="Request a mentor?" />

          <FormSection styles={{ marginTop: 0 }}>

            <Field label="My name is...">
              <FieldTextStateless
                name="requesteeName"
                onChange={this.handleNameChange}
                placeholder="What should we call you?"
                value={name}
                isRequired
                shouldFitContainer
              />
            </Field>


            <Field label="You can find me...">
              <FieldTextStateless
                isRequired
                shouldFitContainer
                name="location"
                placeholder="Where are you?"
                onChange={this.handleLocationChange}
                value={location}
              />
            </Field>

            <Field label="I need help with...">
              <CreatableSelect
                isSearchable
                isClearable
                isMulti
                isRequired
                placeholder="Type to search topics"
                onChange={this.handleTopicChange}
                options={topicOptions.map(o => ({ label: o, value: o }))}
                name="owner"
              />
            </Field>

          </FormSection>

          <FormFooter actionsContent={[{ id: 'submit-button' }]}>
            <Button appearance="primary" type="submit">
              Get help!
            </Button>
          </FormFooter>
        </Form>
      </Box>
    );
  }
}


export default RequestForm;
