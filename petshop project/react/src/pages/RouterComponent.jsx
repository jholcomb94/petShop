import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import EditPetListComponent from './EditPetListComponent';
import EditShelterListComponent from './EditShelterListComponent';
import ViewPetsComponent from './ViewPetsComponent';
class RouterComponent extends Component {
    render(){
        return(
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={HomeComponent} />
                        <Route path="/editpetList" exact component={EditPetListComponent} />
                        <Route path="/editshelterList" exact component={EditShelterListComponent}/>
                        <Route path="/petList" exact component={ViewPetsComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default RouterComponent