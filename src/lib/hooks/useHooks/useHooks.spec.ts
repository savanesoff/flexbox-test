import { renderHook } from '@testing-library/react-hooks';
import { useHooks } from './useHooks';
describe('useHooks', () => {
  it('should return data', () => {
    const { result } = renderHook(() => useHooks());
    expect(result.current.data).toBeDefined();
  });
});
