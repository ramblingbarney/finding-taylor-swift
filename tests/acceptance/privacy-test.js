import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setBreakpoint } from 'ember-responsive/test-support';

module('Acceptance | privacy', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /privacy', async function(assert) {
    await visit('/privacy');

    assert.equal(currentURL(), '/privacy');
  });

  test('visiting /privacy jumbo privacy statement', async function(assert) {
    await visit('/privacy');
    setBreakpoint('jumbo');

    assert.equal(document.querySelector('h3').outerHTML, '<h3 class=" white-outline form-heading">Privacy Statement</h3>');
   });

  test('visiting /privacy desktop privacy statement', async function(assert) {
    await visit('/privacy');
    setBreakpoint('desktop');

    assert.equal(document.querySelector('h3').outerHTML, '<h3 class=" white-outline form-heading">Privacy Statement</h3>');
   });

  test('visiting /privacy tablet privacy statement', async function(assert) {
    await visit('/privacy');
    setBreakpoint('tablet');

    assert.equal(document.querySelector('h3').outerHTML, '<h3 class=" white-outline form-heading">Privacy Statement</h3>');
   });

  test('visiting /privacy mobile privacy statement', async function(assert) {
    await visit('/privacy');
    setBreakpoint('mobile');

    assert.equal(document.querySelector('h3').outerHTML, '<h3 class=" white-outline form-heading">Privacy Statement</h3>');
   });

});
