import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  removeHeroesById
} from '../actions/index.js';

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {
            this.props.heroes.map(hero => {
              return (
                <li key={hero.id} className="list-group-item">
                  <div className="list-item">{hero.name}</div>
                  <div 
                    className="list-item right-button" 
                    onClick={
                      () => this.props.removeHeroesById(hero.id)
                    }>
                    X
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes
});

const mapDispatchToProps = {
  removeHeroesById
}
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HeroList);