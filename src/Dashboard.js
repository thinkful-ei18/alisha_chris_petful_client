import React, { Component } from 'react'
import {connect} from 'react-redux';
import Pet from './components/Pet'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

    }
  }

  render() {
    console.log(this.props);
    const onAdoptPet = () => {
      console.log('hello')
    }

    return(
      <div>
        <Pet animalData={this.props.catToAdopt.data}
          onAdopt={event => onAdoptPet()}
        />
        <Pet animalData={this.props.dogToAdopt.data}
          onAdopt={event => onAdoptPet()}
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