import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      project : "",
      cluster : [],
      item : []
    }
  }

  handleProjectName = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleClusterChange = () => {
    console.log("cluster")
    const temp = {
      name : "",
      subCluster : [],
      item : []
    }
    this.setState(prevState => ({
      cluster : [...prevState.cluster, temp]
    }))
  }

  handleItemChange = () => {
    console.log("item")
    const temp = ""
    this.setState(prevState => ({
      item : [...prevState.item, temp]
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render(){
    return (
      <div>
          <form onSubmit = {this.handleSubmit} >
            <p>Project name</p>
            <input type = "text" value = {this.state.project} name = "project" onChange = {this.handleProjectName} ></input>
            <br></br>
            <p><button onClick = {this.handleClusterChange} >Add Cluster</button>&nbsp;&nbsp;&nbsp;<button onClick = {this.handleItemChange} >add items</button></p>
            <br></br>
            {
              this.state.cluster.length > 0 && this.state.cluster.map(ele => {
                return (
                  <div>
                    <input type = "text" value = {this.state.project} name = "project" onChange = {this.handleProjectName} ></input>
            <br></br>
            <p><button onClick = {this.handleClusterChange} >Add Cluster</button>&nbsp;&nbsp;&nbsp;<button onClick = {this.handleItemChange} >add items</button></p>
                  </div>
                )
              })
            }

            {
              this.state.item.length > 0 && this.state.item.map(ele => {
                return (
                  <div>
                    <input type = "text" value = {this.state.project} name = "project" onChange = {this.handleProjectName} ></input>
            <br></br>
            <p>
              {/* <button onClick = {this.handleClusterChange} >Add Cluster</button> */}
            &nbsp;&nbsp;&nbsp;<button onClick = {this.handleItemChange} >add items</button></p>
                  </div>
                )
              })
            }
            <button type = "submit" >Submit</button>
          </form>
      </div>
    )
  }
}

export default App;
