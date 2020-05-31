import React from "react"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      project : "",
      // cluster : [{
      //   name : "",
      //   item : []
      // }],
      cluster : [],
      item : []
    }
  }

handleSubmit = (e) => {
  e.preventDefault()
  console.log(this.state)
}

handleCluster = (e) => {
  const temp = {
    name : "",
    item : []
  }
  this.setState(prevState => ({
    cluster : [...prevState.cluster, temp]
  }))
}

handleItem = (e) => {
  const temp = ""
  this.setState(prevState => ({
    item : [...prevState.item, temp]
  }))
}

handleinput = (e, i) => {
  console.log("value",i, e.target.value)
  console.log("name", e.target.name)
  const temp = e.target.value
  // console.log(this.state.cluster[i].name)
  // this.state.cluster[i].name = e.target.value


  console.log("value when add cluster", this.state.cluster[i])
  this.setState(prevState => ({
    cluster : prevState.cluster.filter((ele, j) => {
      if(i == j){
        return ele.name = temp
      } else {
        return ele
      }
    })
  }))


}

handleProjectName = (e) => {
  this.setState({
    project : e.target.value
  })
}

handleInnerItem = (i) => {
  const temp = ""
  // this.setState(prevState => ({
  //   cluster : [prevState.cluster.item, ]
  // }))
  console.log(this.state.cluster[i].item.push(temp))
  this.setState(prevState => ({
    cluster : prevState.cluster.filter((ele, j) => {
      if(i == j){
        return [...ele.item, temp]
      } else {
     return ele 
  }
    })
  }))
}


handleInnerItemValue = (e, i , j) => {
  // this.state.cluster[i].item[j] = e.target.value

  console.log(i, j)
  const temp = e.target.value
  this.setState(prevState => ({
    cluster : prevState.cluster.filter((ele, k) => {
      if(i == k){
        // return ele.item.filter((item, l) => {
        //   if(l == j){
        //     return item[l] = temp
        //   } else {
        //     return item
        //   }
        // })
        return ele.item[j] = temp
      } else {
        return ele
      }
    })
  }))
}


handleItemChange = (e, i) => {
  // this.state.item[i] = e.target.value
}

  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit} >  
          <p><b>Project Name</b></p>
          <input type = "text" value = {this.state.project} name = "project" onChange = {this.handleProjectName} ></input> &nbsp;
          <button onClick = {this.handleCluster} >Add Cluster</button>&nbsp;
          <button onClick = {this.handleItem} >Add Item</button>
          {
            this.state.cluster.length > 0 && this.state.cluster.map((content, i) => {
              return (
               <div>
                 {console.log("check value", content.item, i)}
                 <p>Cluster Name</p>
                  <input type = "text"
                    //  value = {}
                     name = "content.name" 
                     onChange = {(e) => this.handleinput(e,i)} ></input> &nbsp; <button onClick = {() => this.handleInnerItem(i)} >Add item</button>
                  <br></br>
                  {
                    content.item && content.item.length > 0 && content.item.map((innerItem, j) => {
                      return (
                        <div>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inner Item</p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type = "text"  onChange = {(e) => this.handleInnerItemValue(e, i, j)} />
                        </div>
                      )
                    })
                  }
               </div>
              )
            })
          }
          <br></br>
          {
            this.state.item.length > 0 && this.state.item.map((item, i) => {
              return(
                <div>
                  <p>Item Name</p>
                  <input type = "text"
                  name = "item"
                  onChange = {(e) => this.handleItemChange(e, i)}
                  />
                </div>
              )
            })
          }
          <br></br>
          <br></br>
          <br></br>
          <button type = "submit" >SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default App