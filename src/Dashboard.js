import React, { Component } from 'react'
import Pet from './components/Pet'

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props);

    return(
      <div>
        <Pet animalData={this.props.catToAdopt}/>
        <Pet animalData={this.props.dogToAdopt}/>
      </div>
    );
  }

}


export default Dashboard;