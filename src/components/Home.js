import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from './Button'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pockemons: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3000/pokemons')
    .then(resp =>  {
      this.setState({
        pockemons: resp.data
      });
    });
  }
  render() {
    const { pockemons } = this.state;
    const pockemonList = pockemons.length ? (
      pockemons.map(pockemon => {
        return (
          <div className='card border-light mb-3' key={pockemon.id}>
            <div className='card-body'>
              <Link to={'/' + pockemon.id}>
                <p className='card-title'>{pockemon.name}</p>
              </Link>
              <Button/>
            </div>
          </div>
        );
      })
    ) : (
      <div> Loading...</div>
    );
    return (
      <table className='table'>
        <tbody>
          <tr>
            <td>{pockemonList} </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export {Home};

//       .then(date => {
//         let pokemons = date.map((pokemons, id) => {
//           return (

//             <div className='card border-light mb-3' key={id}>
//               <p>id: {pokemons.id}</p>
//               <p>Name: {pokemons.name}</p>
//             </div>
//           );
//         });
//         this.setState({ pokemons: pokemons });
//       });
//   }
//   render() {
//     return (
//       <table className='table'>
//       <tbody>
//         <tr>
//           <td>{this.state.pokemons}</td>
//         </tr>
//         </tbody>
//       </table>
//     );
//   }
// }

// export {Home};
