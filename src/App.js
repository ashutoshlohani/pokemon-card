// import * as React from 'react';
// import { ErrorBoundary } from 'react-error-boundary';
// // fetchPokemon: the function we call to get the pokemon info
// // PokemonInfoFallback: the thing we show while we're loading the pokemon info
// // PokemonDataView: the stuff we use to display the pokemon info
// import { PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView } from './pokemon';

// function PokemonInfo({ pokemonName }) {
//    const [status, setStatus] = React.useState(pokemonName ? 'pending' : 'idle');
//    const [pokemon, setPokemon] = React.useState(null);
//    const [error, setError] = React.useState(null);

//    React.useEffect(() => {
//       if (!pokemonName) {
//          return;
//       }
//       setStatus('pending');

//       fetchPokemon(pokemonName)
//          .then(pokemonData => {
//             setPokemon(pokemonData);
//             setStatus('resolved');
//          })
//          .catch(error => {
//             setError(error);
//             setStatus('rejected');
//          });
//    }, [pokemonName]);

//    if (status === 'idle') {
//       return 'Submit a pokemon';
//    } else if (status === 'pending') {
//       return <PokemonInfoFallback name={pokemonName} />;
//    } else if (status === 'resolved') {
//       return <PokemonDataView pokemon={pokemon} />;
//    } else if (status === 'rejected') {
//       // handled by error boundary
//       throw error;
//    }
// }

// function ErrorFallback({ error, resetErrorBoundary }) {
//    return (
//       <div role='alert'>
//          There was an error: <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
//          <button onClick={resetErrorBoundary}>Try again</button>
//       </div>
//    );
// }

// function App() {
//    const [pokemonName, setPokemonName] = React.useState('');

//    function handleSubmit(newPokemonName) {
//       setPokemonName(newPokemonName);
//    }

//    function handleReset() {
//       setPokemonName('');
//    }

//    return (
//       <div className='pokemon-info-app'>
//          <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//          <hr />

//          <div className='pokemon-info'>
//             <ErrorBoundary
//                FallbackComponent={ErrorFallback}
//                onReset={handleReset}
//                resetKeys={[pokemonName]}>
//                <PokemonInfo pokemonName={pokemonName} />
//             </ErrorBoundary>
//          </div>
//       </div>
//    );
// }

// export default App;

import * as React from 'react';
// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import { PokemonForm } from './pokemon';

function PokemonInfo({ pokemonName }) {
   // 🐨 Have state for the pokemon (null)
   // 🐨 use React.useEffect where the callback should be called whenever the
   // pokemon name changes.
   // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
   // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
   // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null.
   // (This is to enable the loading state when switching between different pokemon.)
   // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
   //   fetchPokemon('Pikachu').then(
   //     pokemonData => {/* update all the state here */},
   //   )
   // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
   //   1. no pokemonName: 'Submit a pokemon'
   //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
   //   3. pokemon: <PokemonDataView pokemon={pokemon} />

   // 💣 remove this
   return 'TODO';
}

function App() {
   const [pokemonName, setPokemonName] = React.useState('');

   function handleSubmit(newPokemonName) {
      setPokemonName(newPokemonName);
   }

   return (
      <div className='pokemon-info-app'>
         <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
         <hr />
         <div className='pokemon-info'>
            <PokemonInfo pokemonName={pokemonName} />
         </div>
      </div>
   );
}

export default App;
