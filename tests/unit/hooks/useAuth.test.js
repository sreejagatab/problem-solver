// useAuth.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useAuth } from '../../src/components/hooks/useAuth';
import { login, logout } from '../../src/utils/security';

jest.mock('../../src/utils/security');

test('useAuth returns user and login/logout functions', () => {
  const mockUser = { id: 'user-123', username: 'testuser' };

  login.mockResolvedValueOnce(mockUser);
  logout.mockResolvedValueOnce();

  const { result } = renderHook(() => useAuth());

  expect(result.current.user).toBeNull();

  act(() => {
    result.current.loginUser('testuser', 'testpassword');
  });
  expect(result.current.user).toEqual(mockUser);

  act(() => {
    result.current.logoutUser();
  });
  expect(result.current.user).toBeNull();
});