/**
 * Created by mephisto on 7/10/17.
 */
import React, { Component } from 'react';
//react and redux need to be glued together b/c this component needs to know state.
//this can be done via the connect method of the react-redux module. So...

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
}

export default Home;