import React from 'react';

import { Form, FormGroup, Input, Label } from 'reactstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Nhập email của bạn"
          />
        </FormGroup>
      </Form>
    </div>
  );
}

export default App;
