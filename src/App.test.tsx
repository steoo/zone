import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('Components', () => {
  describe('App', () => {
    it('should render without crashing', () => {
      const { baseElement } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      expect(baseElement).toMatchSnapshot();
    });
  });
});
