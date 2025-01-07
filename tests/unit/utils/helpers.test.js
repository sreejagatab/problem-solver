// helpers.test.js
import { formatDate, formatNumber } from '../../src/utils/helpers';

test('formatDate formats the date correctly', () => {
  const date = new Date('2023-04-15T12:00:00Z');
  expect(formatDate(date)).toEqual('04/15/2023');
  expect(formatDate(date, 'yyyy-MM-dd')).toEqual('2023-04-15');
});

test('formatNumber formats the number correctly', () => {
  expect(formatNumber(1234.56)).toEqual('1,234.56');
  expect(formatNumber(1234.56, { style: 'currency', currency: 'USD' })).toEqual('$1,234.56');
});
