import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import GifList from './components/GifList'
import reducer from './reducer';
import { useEffect } from 'react';
import { fetchStart } from './actions';
import GifForm from './components/GifForm'

import axios from 'axios'

function App(props) {

  const {loading, error} = props

  useEffect(() => {
      props.fetchStart()
      axios.get(`https://api.giphy.com/v1/gifs/search?api_key=3e5WDzxD6U2iITDbUSpnIzv1X9KRnmOL&q=trees&limit=25&offset=0&rating=g&lang=en`)
      .then(res=>{
        console.log(res.data.data)  
      })
  }, []) 
  //this is where you are triggering your action. 
  //what do I want the user to do to trugger this action.

  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      
      <GifForm />

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


export default connect(mapStateToProps, {fetchStart})(App);