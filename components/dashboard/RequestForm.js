import React from 'react';
// import Select from '@atlaskit/select';
import Button from '@atlaskit/button';
import FieldText from '@atlaskit/field-text';

import Form, {
  Field, FormHeader, FormSection, FormFooter,
} from '@atlaskit/form';

import { Box } from 'bloomer';

import './RequestForm.sass';

const RequestForm = () => (
  <Box id="requestForm">
    <Form
      name="create-ticket"
      // onSubmit={this.onSubmitHandler}
      // onReset={this.onResetHandler}
      // ref={(form) => {
      //   this.formRef = form;
      // }}
      // action="//httpbin.org/get"
      // method="GET"
      target="submitFrame"
    >
      <FormHeader title="Request a mentor?" />

      <FormSection styles={{ marginTop: 0 }}>

        <Field label="My name is ...">
          <FieldText
            name="requestee_name"
            placeholder="What should we call you?"
            isRequired
            shouldFitContainer
          />
        </Field>

        <Field label="I need help with ...">
          <FieldText
            name="problem_statement"
            placeholder="What do you need help with?"
            isRequired
            shouldFitContainer
          />
        </Field>

        <Field label="You can find me at ...">
          <FieldText
            name="problem_statement"
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
        {/* <Button appearance="subtle">Cancel</Button> */}
      </FormFooter>
    </Form>
  </Box>
);

export default RequestForm;
