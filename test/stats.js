test = require('../node_modules/webrtc-sipstack/test/includes/common')(require('../node_modules/bdsft-sdk-test/lib/common'));
describe('stats', function() {

  before(function() {
    core = require('webrtc-core');
    core.utils.isChrome = function(){return true;}
    core.utils.majorVersion = function(){return 42;}
    test.createModelAndView('sipstack', {
      sipstack: require('webrtc-sipstack'),
      eventbus: require('bdsft-sdk-eventbus'),
      debug: require('bdsft-sdk-debug'),
      core: require('webrtc-core')
    });
    test.createModelAndView('stats', {
      stats: require('../'),
      sipstack: require('webrtc-sipstack'),
      eventbus: require('bdsft-sdk-eventbus'),
      debug: require('bdsft-sdk-debug'),
      core: require('webrtc-core')
    });
  });

  it('on startup', function() {
    test.isVisible(statsview.view.find('.classes:first'), false);
  });

  it('show and hide', function() {
    stats.show();
    test.isVisible(statsview.view.find('.classes:first'), true);
    stats.hide();
    test.isVisible(statsview.view.find('.classes:first'), false);
  });

  it('statsContainerId', function() {
    stats.statsContainerId = 'teststatscontainerid';
    expect(statsview.statsContainer.attr('id')).toEqual('teststatscontainerid');
  });
});