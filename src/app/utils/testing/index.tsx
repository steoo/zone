import React, { FunctionComponent, ReactElement } from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';
import { combineReducers, createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer, RootState } from '../../store';
import { initialState as moviesState } from '../../../features/movies/Movies.slice';
import { initialState as genresState } from '../../../features/genres/Genres.slice';

const defaultState = {
  movies: { ...moviesState },
  genres: { ...genresState }
};

const renderWithStore = (
  ui: ReactElement,
  {
    initialState = defaultState,
    store = createStore(combineReducers(rootReducer), initialState),
    ...renderOptions
  }: {
    initialState: Partial<RootState>;
    store?: Store;
  }
): RenderResult => {
  const Wrapper: FunctionComponent<{}> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderWithStore;
