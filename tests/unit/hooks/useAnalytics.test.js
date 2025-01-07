// useAnalytics.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { useAnalytics } from '../../src/components/hooks/useAnalytics';
import { trackPageView, trackEvent } from '../../src/utils/analytics';

jest.mock('../../src/utils/analytics');

test('useAnalytics tracks page views and events', () => {
  const { result } = renderHook(() => useAnalytics());

  act(() => {
    result.current.logPageView('/test-page');
  });
  expect(trackPageView).toHaveBeenCalledWith('/test-page');

  act(() => {
    result.current.logEvent('test-category', 'test-action', 'test-label', 123);
  });
  expect(trackEvent).toHaveBeenCalledWith('test-category', 'test-action', 'test-label', 123);
});