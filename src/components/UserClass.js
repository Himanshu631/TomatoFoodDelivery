import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log(props);

        this.state= {
            userInfo:{
            name: "Dummy",
            location: "Default",
            avatar_url: "myphoto.com",
            }
        }

        {/*this.state = {
            count:0,
            count2:2
        }*/}    
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/himanshu631");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json,
        });
    }


    render() {
        const { name,location,login,avatar_url } = this.state.userInfo;
        //const { count,count2 } = this.state;
        
        return (
            <div className="user-card">
                {/*<h2>Count : {count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>
                    Count Increase
                </button>
                <button onClick={()=>{
                    this.setState({
                        count:0
                    })
                }}>
                    Reset Count 
                </button>

            */}
                <img src= {avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>Location: {location} </h3>
                <h4>Contact: {login} </h4>
            </div>  
        );
    }
}

export default UserClass;