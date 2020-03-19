import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setBreakpoint } from 'ember-responsive/test-support';

module('Acceptance | upload', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

   test('visiting / jumbo action component', async function(assert) {
     await visit('/');
     setBreakpoint('jumbo');

     assert.equal(document.querySelector('input.input-file').outerHTML, '<input class="btn btn-outline-light white-outline form-text input-file" type="file">');
    });

   test('visiting / desktop action component', async function(assert) {
     await visit('/');
     setBreakpoint('desktop');

     assert.equal(document.querySelector('input.input-file').outerHTML, '<input class="btn btn-outline-light white-outline form-text input-file" type="file">');
    });

   test('visiting / tablet action component', async function(assert) {
     await visit('/');
     setBreakpoint('tablet');

     assert.equal(document.querySelector('input.input-file').outerHTML, '<input class="btn btn-outline-light white-outline form-text input-file" type="file">');
    });

   test('visiting / mobile action component', async function(assert) {
     await visit('/');
     setBreakpoint('mobile');

     assert.equal(document.querySelector('input.input-file').outerHTML, '<input class="btn btn-outline-light white-outline form-text input-file" type="file">');
    });
});
