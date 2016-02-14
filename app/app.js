import {run} from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import {makeCycleFireDriver} from './driver/firebase';

import {Page} from './page';

function main(sources) {

  let page = Page(sources);

  return {
    DOM: page.DOM
  };
}

run(main, {
  DOM: makeDOMDriver(`#app`),
  CycleFire: makeCycleFireDriver(`https://blazing-heat-4370.firebaseio.com/`)
});
