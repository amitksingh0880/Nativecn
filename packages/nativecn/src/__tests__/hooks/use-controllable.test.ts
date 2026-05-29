import { renderHook, act } from '@testing-library/react-native';
import { useControllableState } from '../../hooks/use-controllable';

describe('useControllableState', () => {
  it('should use defaultProp when no prop is provided', () => {
    const { result } = renderHook(() => 
      useControllableState({ defaultProp: 'default' })
    );

    expect(result.current[0]).toBe('default');
  });

  it('should use prop when provided', () => {
    const { result } = renderHook(() => 
      useControllableState({ prop: 'controlled', defaultProp: 'default' })
    );

    expect(result.current[0]).toBe('controlled');
  });

  it('should update state internally when uncontrolled', () => {
    const { result } = renderHook(() => 
      useControllableState({ defaultProp: 'default' })
    );

    act(() => {
      result.current[1]('new value');
    });

    expect(result.current[0]).toBe('new value');
  });

  it('should NOT update state internally when controlled', () => {
    const { result } = renderHook(() => 
      useControllableState({ prop: 'controlled', defaultProp: 'default' })
    );

    act(() => {
      result.current[1]('new value');
    });

    // Still 'controlled' because the parent didn't change the prop
    expect(result.current[0]).toBe('controlled');
  });

  it('should call onChange with new value', () => {
    const onChange = jest.fn();
    const { result } = renderHook(() => 
      useControllableState({ defaultProp: 'default', onChange })
    );

    act(() => {
      result.current[1]('new value');
    });

    expect(onChange).toHaveBeenCalledWith('new value');
  });
});
