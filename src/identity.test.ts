import test, { Macro, TestContext } from 'ava';

import identity from './identity';

const testIdentity: Macro<TestContext> = <T>(t: TestContext, value: T) => {
  t.is(identity(value), value);
};
testIdentity.title = (providedTitle, value) =>
  `identity returns ${providedTitle || value}`;

test(testIdentity, undefined);
test(testIdentity, null);
test(testIdentity, NaN);
test(testIdentity, '');
test(testIdentity, 0);
test(testIdentity, 1);
test(testIdentity, 'test');
test(testIdentity, {});
test(testIdentity, []);
