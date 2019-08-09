import React from 'react';
import axios from 'axios';
import './App.css';

import FormikUserForm from '../Forms/UserForm';
import Card from '../Cards/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData()
      .then(res => this.updateData(res.data))
      .catch(err => console.log(err));
  }

  getData = () => {
    return axios.get('http://localhost:5000/api/restricted/data');
  };

  updateData = data => {
    this.setState({ data: data });
  };

  render() {
    return (
      <div className='bg-gray-300 py-20 .w-4/5'>
        <FormikUserForm type='Register' updateMessage={this.updateMessage} />
        <div className='flex flex-wrap justify-around'>
          {this.state.data.map(food => {
            return <Card key={food.name} food={food} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
