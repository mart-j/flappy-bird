import { randomInterval } from './randomInterval';

describe('get random interval from 12 to 18', () => {
  it('number is bigger than 12', () => {
    expect(randomInterval() >= 12).toBeTruthy();
  });

  it('number is smaller than 24', () => {
    expect(randomInterval() <= 18).toBeTruthy();
  });
});
