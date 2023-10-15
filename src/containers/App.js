import React, {Component} from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/scroll'
import './App.css'
import ErrorBondary from '../components/ErrorBoundary'

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(users => this.setState({robots:users}))
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
        
    }
    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length?
             <h1 className='tc white'>Loading</h1>:
        (
            <div className = 'tc'>
                <h1 className='f1 white'>Robuddies</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBondary>
                        <CardList robots={filteredRobots} />
                    </ErrorBondary>
                </Scroll>
            </div>
        )
     }
}
export default App;