// auth.test.js
import { login, logout, registerUser } from '../../src/utils/auth';
import axios from 'axios';

jest.mock('axios');

test('login makes a POST request to the login endpoint', async () => {
  const mockUser = { username: 'testuser', password: 'testpassword' };
  const mockResponse = { token: 'abc123' };
  axios.post.mockResolvedValueOnce({ data: mockResponse });

  const result = await login(mockUser.username, mockUser.password);
  expect(result).toEqual(mockResponse);
  expect(axios.post).toHaveBeenCalledWith('/api/auth/login', mockUser);
});

test('logout makes a POST request to the logout endpoint', async () => {
  axios.post.mockResolvedValueOnce();

  await logout();
  expect(axios.post).toHaveBeenCalledWith('/api/auth/logout');
});

test('registerUser makes a POST request to the register endpoint', async () => {
  const mockUser = { username: 'testuser', email: 'test@example.com', password: 'testpassword' };
  const mockResponse = { id: 'abc123' };
  axios.post.mockResolvedValueOnce({ data: mockResponse });

  const result = await registerUser(mockUser);
  expect(result).toEqual(mockResponse);
  expect(axios.post).toHaveBeenCalledWith('/api/auth/register', mockUser);
});
