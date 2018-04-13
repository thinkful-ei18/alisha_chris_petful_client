import React, { Component } from 'react'

class Pet extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <section>
          <h1> 
            Name: {this.props.animalData.name}
          </h1>
          <img src={this.props.animalData.imageURL} alt=''/>
          <main>
            <dl>
              <dt>Description: </dt>
              <dd>{this.props.animalData.imageDescription}</dd>
              <dt>Sex: </dt>
              <dd>{this.props.animalData.sex}</dd>
              <dt>Age: </dt>
              <dd>{this.props.animalData.age}</dd>
              <dt>Breed: </dt>
              <dd>{this.props.animalData.breed}</dd>
              <dt>Story: </dt>
              <dd>{this.props.animalData.story}</dd>
            </dl>
            <button>Adopt</button>
          </main>

        </section>
    );
  }
}

export default Pet;