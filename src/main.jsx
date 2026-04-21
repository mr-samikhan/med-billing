import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@app/store';
import { ThemeModeProvider } from '@theme/ThemeContext';
import AppRouter from '@router/AppRouter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeModeProvider>
        <AppRouter />
      </ThemeModeProvider>
    </Provider>
  </StrictMode>
);
