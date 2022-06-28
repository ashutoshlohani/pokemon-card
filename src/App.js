import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { PokemonForm, fetchPokemon, PokemonDataView, PokemonInfoFallback } from './pokemon';

function PokemonInfo({ pokemonName }) {
   const [state, setState] = React.useState({ status: 'idle', pokemon: null, error: null });
   const { status, pokemon, error } = state;

   React.useEffect(() => {
      if (!pokemonName) {
         return;
      }
      setState({ status: 'pending' });

      fetchPokemon(pokemonName).then(
         pokemon => {
            setState({ pokemon, status: 'resolved' });
         },
         error => {
            setState({ error, status: 'rejected' });
         }
      );
   }, [pokemonName]);

   if (status === 'idle') {
      return 'Submit a Pokemon';
   } else if (status === 'pending') {
      return <PokemonInfoFallback name={pokemonName} />;
   } else if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
   } else if (status === 'rejected') {
      throw new Error();
   }
}

function ErrorFallback({ error, resetErrorBoundary }) {
   return (
      <div role='alert'>
         There was an error: <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
         <button onClick={resetErrorBoundary}>Try again</button>
      </div>
   );
}

function App() {
   const [pokemonName, setPokemonName] = React.useState('');

   function handleSubmit(newPokemonName) {
      setPokemonName(newPokemonName);
   }

   function handleReset() {
      setPokemonName('');
   }

   return (
      <div className='pokemon-info-app'>
         <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
         <hr />
         <div className='pokemon-info'>
            <ErrorBoundary
               FallbackComponent={ErrorFallback}
               onReset={handleReset}
               resetKeys={[pokemonName]}>
               <PokemonInfo pokemonName={pokemonName} />
            </ErrorBoundary>
         </div>
      </div>
   );
}

export default App;
