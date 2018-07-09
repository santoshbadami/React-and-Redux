const userdb=[{id:'1',name:'Chetan',age:'27',location:'Bengaluru'},
            {id:'2',name:'Imran',age:'30',location:'Bengaluru'},
            {id:'3',name:'Pramod',age:'28',location:'Bengaluru'},
            {id:'4',name:'Santosh',age:'28',location:'Mysuru'}]


const userReducer=(state=userdb,{type,payload})=>{
    switch(type){
        case "USER_DELETE":
            const Users=state.filter(user=>{return user.id!==payload})
            state=Users;
            return state;
        case "USER_UPDATE":
            var userList = state.map(function(user){
             if(user.id===payload.id)
             {
                user.name=payload.name;
                user.age=payload.age;
                user.location=payload.location;
             }
             return user;
            })
            state=userList;
            return state;
        case "USER_SAVE":
            let adduser=state;
            adduser.push(payload);
            state=adduser;
            debugger;
            return state;
        default:
            return state;
    }    
}
export default userReducer;