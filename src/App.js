import React from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      'name': 'ilman ganteng',
      'count':0,
      'threshold':true
    }
    this.sayHello = this.sayHello.bind(this)
    this.changeName = this.changeName.bind(this)
  }
  changeName(){
    this.setState(
      {
        'name':'ilman teguh ganteng',
      }, function(){
          console.log(this.state.name)
      }
    )
  }
  sayHello(inputString){
    alert('Hello ' + inputString)
  }
  render(){
    let kataSuper
    if(this.state.threshold){
      kataSuper = 'super ganteng ganteng'
    }else{
      kataSuper = 'kurangGanteng'
    }
    return(
      <div className='App'>
        <Header namaMahasiswa = {'ilman'} metodeSayHello = {this.sayHello}/>
        <Content namaObjekMahasiswa = {this.state.name}  metodeRubahNama = {this.changeName} kataSuper = {kataSuper} />
      </div>
    )
  }
}
export default App