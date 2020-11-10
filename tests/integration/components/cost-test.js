import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cost', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Cost />`);

    assert.ok(this.element.querySelector('[cost-test-name-input]'), 'name input selector')
  });

  test('it adds the input name', async function(assert) {
    await render(hbs`<Cost />`);
    await fillIn('[cost-test-name-input]', 'bobby');

    assert.equal(this.element.querySelector('[cost-test-name-input]').textContent.trim(),'', 'name input added sucessfully');
  });

  test('it removes the input name', async function(assert) {
    debugger;
    await render(hbs`<Cost />`);
    await fillIn('[cost-test-name-input]', 'bobby');
    await fillIn('[cost-test-name-input]', '');

    assert.equal(this.element.querySelector('[cost-test-name-input]').textContent.trim(),'', 'name input removed sucessfully');
  });

  test('button adds names', async function(assert) {
    await render(hbs`<Cost />`);
    await fillIn('[cost-test-name-input]', 'bobby');
    await click('[cost-test-name-button]');
    assert.dom('[cost-test-name-input]').exists();
  });
});
