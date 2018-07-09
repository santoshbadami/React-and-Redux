import React,{Component} from 'react'

import UserView from '../containers/UserView'
import {connect} from 'react-redux'
import {saveUser,updateUser,deleteUser} from '../actions/userActions'
import UserAdd from '../containers/UserAdd';

class App extends Component{
    constructor(){
        super();
        debugger;
    }
    componentDidMount() {
        debugger;
    }
    componentWillUpdate() {
        debugger;
        // L.geoJson(nextProps.data).addTo(this.map);
    }
    componentDidUpdate(){
    debugger;
    }
    onupdateUser(id,name,age,location){
        this.props.onupdateUser(id,name,age,location)
    }
    OnSaveData(id,name,age,location){
        this.props.onSaveData(id,name,age,location)
    }
    
    render(){
        return(
            <div>
                <UserAdd OnSaveData={this.OnSaveData.bind(this)}/>   <br/>
                {
                 this.props.users.map(user=>{
                     return(
                     <div key={user.id}>
                     <table border="1">
                     <UserView {...user} deleteUser={()=>this.props.deleteUser(user.id)} onupdateUser={this.onupdateUser.bind(this)}/>
                     </table>
                     </div>
                     );
                 })
                    
                }
            </div>
        );
    }
}

const mapStateToProps=state=>{
return{
    users:state.userReducer
    }
}
const mapDispatchToProps=({
    onupdateUser:updateUser,
    deleteUser:deleteUser,
    onSaveData:saveUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App);