import 'jsdom-global/register';
import { act } from 'react-dom/test-utils';
import { testHook } from '../testUtils';
import useToggle from '../../hooks/useToggle';

// [ value ,handler , setter ]

describe('useInput', () => {
  let inputHandler;
  beforeEach(() => {
    testHook(() => {
      inputHandler = useToggle();
    });
  });

  it('shoud have a handler function', () => {
    // handler 체크
    expect(inputHandler[1]).toBeInstanceOf(Function);
  });

  it('should have a setter function', () => {
    // setter 체크
    expect(inputHandler[2]).toBeInstanceOf(Function);
  });

  it('should have correct value', () => {
    // value 체크
    expect(inputHandler[0]).toBe(false);
  });

  it('should update the value when handler is called', () => {
    // handler 기능 체크
    act(() => {
      inputHandler[1]();
    });
    expect(inputHandler[0]).toBe(true);
  });

  it('should update the value when setter is called', () => {
    // setter 기능 체크
    act(() => {
      inputHandler[2](true);
    });
    expect(inputHandler[0]).toBe(true);
  });
});
