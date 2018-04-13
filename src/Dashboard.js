import React, { Component } from 'react'
import Pet from './components/Pet'

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  onAdoptPet() {
    
  }

  render() {

    const onAdoptPet = () => {
      console.log('hello')
    }

    return(
      <div>
        <Pet animalData={this.props.catToAdopt}
          onAdopt={event => onAdoptPet()}
        />
        <Pet animalData={this.props.dogToAdopt}
          onAdopt={event => onAdoptPet()}
        />
      </div>
    );
  }

}


export default Dashboard;