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

  test('visiting / jumbo', async function(assert) {
    await visit('/');
    setBreakpoint('jumbo');

    assert.equal(document.querySelector('img').outerHTML, '<img src="assets/images/dreamstime_xxl_metallic_silver_jumbo_q5.jpg" alt="taylor-swift-metallic-silver-jumbo">');
   });

   test('visiting / jumbo action component', async function(assert) {
     await visit('/');
     setBreakpoint('jumbo');

     assert.equal(document.querySelector('input.input-file').outerHTML, '<input class="btn btn-outline-light white-outline form-text input-file" type="file">');
    });

  test('visiting / desktop', async function(assert) {
    await visit('/');
    setBreakpoint('desktop');

    assert.equal(document.querySelector('img').outerHTML, '<img src="assets/images/dreamstime_xxl_metalic_silver_w1000_q8.jpg" alt="taylor-swift-metallic-silver-desktop" class="image-height">');
   });

   test('visiting / desktop action component', async function(assert) {
     await visit('/');
     setBreakpoint('desktop');

     assert.equal(document.querySelector('input.input-file').outerHTML, '<input class="btn btn-outline-light white-outline form-text input-file" type="file">');
    });

  test('visiting / tablet', async function(assert) {
    await visit('/');
    setBreakpoint('tablet');

    assert.equal(document.querySelector('img').outerHTML, '<img src="assets/images/dreamstime_xxl_metallic_silver_tablet_q8.jpg" alt="taylor-swift-metallic-silver-tablet" class="image-height">');
   });

   test('visiting / tablet action component', async function(assert) {
     await visit('/');
     setBreakpoint('tablet');

     assert.equal(document.querySelector('input.input-file').outerHTML, '<input class="btn btn-outline-light white-outline form-text input-file" type="file">');
    });

  test('visiting / mobile', async function(assert) {
    await visit('/');
    setBreakpoint('mobile');

    assert.equal(document.querySelector('img').outerHTML, '<img src="assets/images/dreamstime_xxl_metallic_silver_mobile_q8.jpg" alt="taylor-swift-metallic-silver-mobile">');
   });

   test('visiting / mobile action component', async function(assert) {
     await visit('/');
     setBreakpoint('mobile');

     assert.equal(document.querySelector('input.input-file').outerHTML, '<input class="btn btn-outline-light white-outline form-text input-file" type="file">');
    });
});
