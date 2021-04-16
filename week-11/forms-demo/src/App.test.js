import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Party! RSVP Here/i);
  expect(linkElement).toBeInTheDocument();
});

test('Form submits properly', () => {
  render(<App />);
  const submitButton = screen.getByText(/submit/i);
  const nameInput = screen.getByPlaceholderText('John Doe')

  // type some text
  fireEvent.change(nameInput, { target: {value: 'Something'} })
  expect(nameInput.value).toBe("Something")

  // submit the form
  fireEvent.click(submitButton);
  expect(nameInput.value).toBe("")
})
