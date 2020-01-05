import { Altuari } from '../index';

test('TEST_#0001', () => {
  const Obj = new Altuari('Bobly');

  expect(Obj.APPLICATION_AUTHENTICATED).toBe(false);
  expect(Obj.APPLICATION_LOTTERY_TYPE).toBe('');
  expect(Obj.APPLICATION_NAME).toBe('Bobly');
  expect(Obj.APPLICATION_TOKEN).toBe('');
});

test('TEST_#0002', () => {
  const Obj = new Altuari('Bobly');
  Obj.initializeApp('test123$');

  expect(Obj.APPLICATION_AUTHENTICATED).toBe(true);
});

test('TEST_#0003', () => {
  const Obj = new Altuari('Bobly');

  expect(Obj.APPLICATION_AUTHENTICATED).toBe(false);
});
