import {run} from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import {makeCycleFireDriver} from './driver/firebase';

import * as Page from './page';

function main(sources) {
  return {
    DOM: Page.view(sources)
  };
}

run(main, {
  DOM: makeDOMDriver(`#app`),
  CycleFire: makeCycleFireDriver(`https://blazing-heat-4370.firebaseio.com/`)
});
