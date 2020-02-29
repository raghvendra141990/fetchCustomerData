import React from "react";
import axios from 'axios';

class Customer extends React.Component {
   constructor(props){
     super(props)
     this.state = {
        users:[],
        addResult: []
      }
    }
componentDidMount(){
  axios.get(`/Users.json`)
       .then(res => {
         console.log(res)
         this.setState({ users:res.data });
       })
}
handleClick(id){
var Address=this.state.users.map(function(element){
  if(element.EmpId==id){
      return element.Address.map(function(add,index){
        return <div key={`add-${id}-${index}`} className="add-result-item">
                <span><b>line 1:</b>{add.line1}</span>
                <span><b>line 2:</b>{add.line2}</span>
                <span><b>Country:</b>{add.country}</span>
                <span><b>State:</b>{add.state}</span>
                <span><b>City:</b>{add.city}</span>
                <span><b>PIN:</b>{add.PIN}</span>
            </div>
      })
  }
})
this.setState({addResult:Address})
}
render() {
  var items= this.state.users.map(e=>{
          return <div className="customer" key={e.EmpId} onClick={this.handleClick.bind(this,e.EmpId)}>
                     <span><b>Employee Id:</b>  {e.EmpId}</span>
                     <span><b>Name:</b>{e.Name}</span>
                     <span><b>Age:</b> {e.Age}</span>
                     <span><b>Gender:</b> {e.Sex}</span>
                  </div>
        })
  return  <React.Fragment>
            <div className="result">
                  {items}
            </div>
            <div className="add-result">
              {this.state.addResult}
            </div>
        </React.Fragment>
};
}
export default Customer;
