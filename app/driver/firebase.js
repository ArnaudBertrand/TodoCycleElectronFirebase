import {Observable} from 'rx';
import Firebase from 'firebase';

Firebase.prototype.__proto__.observe = function(eventName) {
  return Observable.create((observer) => {
    this.on(eventName, (data) => {
      observer.onNext(data);
    });
  }).doOnError(
      function (err) { console.log('Do Error: ' + err); }
  ).publish().refCount();
};

function makeCycleFireDriver(baseUrl) {

  function publish(path, type, data){
    console.log('test');
    const ref = new Firebase(path);
    //ref[type](data);
    switch(type){
      case 'push':
        ref.push(data);
        break;
      case 'set':
        ref.set(data);
        break;
      case 'update':
        ref.update(data);
        break;
    }
  }

  return function firebaseDriver(events$) {
    this.firebase = new Firebase(baseUrl);
    events$.map(req => publish(events.path, events.type, events.data));

    return this.firebase;
  }
}

module.exports = {
  makeCycleFireDriver,
};
