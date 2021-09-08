import tobiesFriends from "./challenge_1";

describe('tobiesFriends', () => {
  
  test('should return an error when a parameter is missing', () => {
    expect(() => {
      tobiesFriends()
    }).toThrow('Parameter n should be a number');

    expect(() => {
      tobiesFriends(1)
    }).toThrow('Parameter scores should be an array');
  });

  test('should return 1 when given 1 friend', () => {
    const numberOfCalls = tobiesFriends(1, [1]);
    expect(numberOfCalls).toBe(1);
  });
  
  test('should return 2 when given two friends with different scores', () => {
    const numberOfCalls = tobiesFriends(2, [1, 2]);
    expect(numberOfCalls).toBe(2);
  });
  
  test('should return 2 when given two friends with same score', () => {
    const numberOfCalls = tobiesFriends(2, [1, 1]);
    expect(numberOfCalls).toBe(2);
  });

  test('should return 3 when given three friends with different scores', () => {
    const numberOfCalls = tobiesFriends(3, [1, 2, 3]);
    expect(numberOfCalls).toBe(3);
  });

  test('should return 3 when given three friends with same score', () => {
    const numberOfCalls = tobiesFriends(3, [1, 1, 1]);
    expect(numberOfCalls).toBe(3);
  });

});