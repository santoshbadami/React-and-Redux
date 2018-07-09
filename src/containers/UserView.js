import React,{Component} from 'react'

export default class UserView extends Component{
    constructor(){
        super();
        this.state={isEditable:false}
    }
    cancelEdit(){
        this.setState({isEditable:false})
    }
    edit(){
        this.setState({isEditable:true})
    }
    updateUser(event){
        this.props.onupdateUser(this.inputid.value,this.inputname.value,this.inputage.value,this.inputlocation.value);
        this.cancelEdit();
    }
    render(){
    return(
        <div>
            {this.state.isEditable===true?
                (
                <td>
                    <input defaultValue={this.props.id} ref={inputid=>this.inputid=inputid}/>
                    <input defaultValue={this.props.name} ref={inputname=>this.inputname=inputname}/>
                    <input defaultValue={this.props.age} ref={inputage=>this.inputage=inputage}/>
                    <input defaultValue={this.props.location} ref={inputlocation=>this.inputlocation=inputlocation} />
                    <button onClick={this.cancelEdit.bind(this)}>Cancel</button>
                    <button onClick={this.updateUser.bind(this)}>Update</button>
                </td>
                ):(
            <tr>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.age} </td>
            <td>{this.props.location} </td>
            <td><button onClick={this.edit.bind(this)}>Edit</button></td>
            <td><button onClick={this.props.deleteUser}>delete</button></td>
        </tr>
        )}
        </div>
    );
    }
}