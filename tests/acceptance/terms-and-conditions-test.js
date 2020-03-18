import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setBreakpoint } from 'ember-responsive/test-support';

module('Acceptance | terms and conditions', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /terms', async function(assert) {
    await visit('/terms');

    assert.equal(currentURL(), '/terms');
  });

   test('visiting /terms jumbo terms and conditions', async function(assert) {
     await visit('/terms');
     setBreakpoint('jumbo');

     assert.equal(document.querySelector('h3').outerHTML, '<h3 class=" white-outline form-heading">Terms &amp; Conditions</h3>');
    });

   test('visiting /terms desktop terms and conditions', async function(assert) {
     await visit('/terms');
     setBreakpoint('desktop');

     assert.equal(document.querySelector('h3').outerHTML, '<h3 class=" white-outline form-heading">Terms &amp; Conditions</h3>');
    });

   test('visiting /terms tablet terms and conditions', async function(assert) {
     await visit('/terms');
     setBreakpoint('tablet');

     assert.equal(document.querySelector('h3').outerHTML, '<h3 class=" white-outline form-heading">Terms &amp; Conditions</h3>');
    });

   test('visiting /terms mobile terms and conditions', async function(assert) {
     await visit('/terms');
     setBreakpoint('mobile');

     assert.equal(document.querySelector('h3').outerHTML, '<h3 class=" white-outline form-heading">Terms &amp; Conditions</h3>');
    });

});
