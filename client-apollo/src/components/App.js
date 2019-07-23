import React from 'react';
import { Query } from 'react-apollo';
import { Button } from 'reactstrap';
import Navbar from './navbar/Navbar'
import Routes  from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { GET_ALL_RECIPES } from './../queries'
export default class App extends React.Component {
  render() {
    return (
      <Router>
          <Navbar />
          <Routes />
          <Query query={GET_ALL_RECIPES}>
            {
              (({data, loading, error}) => {
                if(loading) return <div>Loading</div>
                if(error) return <div>Error</div>
                console.log(data)
                return (
                  <div>
                    <Button color="primary">RECIPES</Button>{' '}
                  </div>
                )
              })
            }
          </Query>
      </Router>
    )
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           OK
//         </header>
//       </div>
//     );
//   }
// }

