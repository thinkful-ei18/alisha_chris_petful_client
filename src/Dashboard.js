import React, { Component } from 'react'
import {connect} from 'react-redux';
import Pet from './components/Pet'
import { fetchCat, fetchDog, adoptDog, adoptCat } from './actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

    }
  }
  
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  render() {
    const onAdoptPet = (animal) => {
      if (animal === 'cat') {
        this.props.dispatch(adoptCat());
      } else if (animal === 'dog') {
        this.props.dispatch(adoptDog());
      }
    }

    return(
      <div>
        <Pet
          animalData={this.props.catToAdopt.data}
          onAdopt={event => onAdoptPet('cat')}
        />
        <Pet 
          animalData={this.props.dogToAdopt.data}
          onAdopt={event => onAdoptPet('dog')}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat,
  dogToAdopt: state.dog
});

export default connect(mapStateToProps)(Dashboard);