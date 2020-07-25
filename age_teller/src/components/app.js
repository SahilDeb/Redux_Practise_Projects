import React, {Component} from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Form inline>
          <FormControl type="date">
          </FormControl>
          {' '}
          <Button>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;