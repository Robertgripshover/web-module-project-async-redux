import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import GifList from './components/GifList'

import reducer from './reducer';

function App(props) {

  const {loading, error} = props

  if (error !== '') {
    return<h3 className='ErrorMessage'>{error}</h3>
  }

  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      
      <form>
        <input />
        <button>Search</button>
      </form>

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