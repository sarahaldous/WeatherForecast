import React, {Component} from 'react'
import {withLocation} from '../../context/LocationProvider.js'



class SavedLocations extends Component {
    
       componentDidMount(){
           this.props.getSavedLocations()
       }
    render (){

    
    let mappedSavedLocations = this.props.mySavedLocations.map((location, i) => {
        return (
            <div>
            <p>{location.city},  {location.state}</p>
            <button onClick={this.props.handleDelete}>Edit</button>
            <button>Delete</button>
            </div>
        )
        })
        console.log(this.props)
    return (
        <div>
            {mappedSavedLocations}
        </div>
    )
}
}

export default withLocation(SavedLocations)

//map over saved locations from location provider and save it.