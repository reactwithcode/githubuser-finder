import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App'
import { Provider } from 'react-redux';
import { store } from './redux/store';

describe("GitHub Repositories Explorer App", () => {
  test('renders title and reset button', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByRole('heading', { name: /GitHub Repositories Explorer/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reset/i })).toBeInTheDocument();
  });

  test('search input and search button work', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const input = screen.getByPlaceholderText(/enter username/i);
    const searchBtn = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, 'wesbos');
    expect(input).toHaveValue('wesbos');

    await userEvent.click(searchBtn);

    // Wait for the user result to appear
    await screen.findByText('wesbos');

    // Find the button that contains the span with "wesbos"
    const userButtons = screen.getAllByRole('button');
    const wesbosButton = userButtons.find(btn =>
      Array.from(btn.querySelectorAll('span')).some(
        span => span.textContent === 'wesbos'
      )
    );
    expect(wesbosButton).toBeDefined();

    // Click the user button to select it
    await userEvent.click(wesbosButton!);

    // After clicking, re-query all spans and check for font-bold
    await waitFor(() => {
      const allSpans = screen.getAllByText('wesbos');
      const boldSpan = allSpans.find(span => span.className.includes('font-bold'));
      expect(boldSpan).toBeInTheDocument();
      expect(boldSpan).toHaveClass('font-bold');
    });

    // Check if the repo list is displayed
    await screen.findByRole('heading', { name: /^Repositories$/i });
  });
});
