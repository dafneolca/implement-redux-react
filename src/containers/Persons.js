import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.prs.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onRemovePerson(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: () => dispatch({ type: 'ADD_PERSON', value: this.newPerson }),
        onRemovePerson: (id) => dispatch({ type: 'REMOVE_PERSON', personId: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);