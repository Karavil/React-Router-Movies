import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <>
         <Route path ="/">
            <SavedList list={savedList} />
         </Route>
         <Route exact path="/">
            <MovieList/>
         </Route>
         <Route path="/movies/:id" component={Movie}>
            <Movie addToSavedList={addToSavedList}/>
         </Route>
      
    </>
  );
};

export default App;
