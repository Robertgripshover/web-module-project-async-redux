import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import GifList from './components/GifList'

import reducer from './reducer';

function App(props) {

  const {loading, error} = props

  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      
      <form>
        <input />
        <button>Search</button>
      </form>

      {
        (error !== '') && <h3>{error}</h3>
      }

      {
        loading ? <h3 className='Loading_Screen'>We are loading</h3> : <GifList />
      }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);