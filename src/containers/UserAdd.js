import React,{Component} from 'react'

export default class UserAdd extends Component {
    SaveData(event){
        this.props.OnSaveData(this.inputid.value,this.inputname.value,this.inputage.value,this.inputlocation.value);
    }
    render(){
        return(
            <div>
                <input placeholder='ID' ref={inputid=>this.inputid=inputid}/> {` `}
                <input placeholder="Name" ref={inputname=>this.inputname=inputname}/> {` `}
                <input placeholder="Age" ref={inputage=>this.inputage=inputage}/> {` `}
                <input placeholder="Location" ref={inputlocation=>this.inputlocation=inputlocation}/>{` `}
                <button onClick={this.SaveData.bind(this)}>Save</button>
            </div>
        );
    }
}