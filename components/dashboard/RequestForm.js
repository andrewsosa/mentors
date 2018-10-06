import React from 'react';
import { connect } from 'redux-zero/react';

// import Select from '@atlaskit/select';
import Button from '@atlaskit/button';
import { FieldTextStateless } from '@atlaskit/field-text';

import Form, {
  Field, FormHeader, FormSection, FormFooter,
} from '@atlaskit/form';

import { Box } from 'bloomer';

import './RequestForm.sass';

class RequestForm extends React.Component {
  state = {
    name: '',
    topics: [],
    location: '',
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleLocationChange = (e) => {
    this.setState({ location: e.target.value });
  }

  handleFormSubmit = (e) => {
    console.log(e);
  }

  render() {
    const { name, topics, location } = this.state;

    console.log(name);
    return (
      <Box id="requestForm">
        <Form
          name="create-ticket"
          onSubmit={this.handleFormSubmit}
          // onReset={this.onResetHandler}
          ref={(form) => {
            this.formRef = form;
          }}
          // action="//httpbin.org/get"
          // method="GET"
          // target="submitFrame"
        >
          <FormHeader title="Request a mentor?" />

          <FormSection styles={{ marginTop: 0 }}>

            <FieldTextStateless
              label="My name is ..."
              name="requesteeName"
              onChange={this.handleNameChange}
              placeholder="What should we call you?"
              value={name}
              isRequired
              shouldFitContainer
            />


            <FieldTextStateless
              label="I need help with ..."
              name="problemStatement"
              onChange={this.handleLocationChange}
              placeholder="What do you need help with?"
              value={location}
              isRequired
              shouldFitContainer
            />

            <Field label="You can find me at ...">
              <FieldTextStateless
                name="location"
                placeholder="Where are you?"
                isRequired
                shouldFitContainer
              />
            </Field>

            {/* <Field label="Some related topics:">
              <Select
                isSearchable
                defaultValue={{ label: 'Atlassian', value: 'atlassian' }}
                options={[
                  { label: 'Atlassian', value: 'atlassian' },
                  { label: 'Sean Curtis', value: 'scurtis' },
                  { label: 'Mike Gardiner', value: 'mg' },
                  { label: 'Charles Lee', value: 'clee' },
                ]}
                name="owner"
              />
            </Field> */}

          </FormSection>

          <FormFooter
            actionsContent={[
              {
                id: 'submit-button',
              },
              {},
            ]}
          >
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
