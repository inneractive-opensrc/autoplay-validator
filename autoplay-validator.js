
 
const CONSTANTS = {
   // ms timeout to wait till play will start
  TINY_VIDEO_TIMEOUT: 300,
  // dummy mp4 for testings the auto play
  TINY_VIDEO: 'data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAW1wNDFtcDQyaXNvbQAAAAh3aWRlAAAHDW1kYXTeNgAAbGliZmFhYyAxLjI2LjEgKEF1ZyAxNiAyMDA4KSBVTlNUQUJMRQAAQg2X/+vvPMJDkgQkEUOqkS6otXG+N1dVqkH/PT/vT/mfLPlmrNGfLNOfr9fr9ev6/X6jN1Kwwnf1URm/a5bR+yjbZRKWy+1RQ0I3L23qaAoIliEgiEgil+uqagqx3554Ss3wg++D8nyPv7v3p/d0UVzIiuuSzrjlOOM00jU/JCQJ20XEgICYcCEGz1v//5+gsFAqEgoElCt54S6/x/T7+pV1WaqpUzWUPDL6RwLlz9x5Oeu12OmjehcrSDlGThDvBealSilSt5hIvQvILUU0hQJKUIhIIsf5uZwur2vcqXlVUYsfSR1XT553YKrJGjNos5ZxHtaN6UK1JkkCwIAkSCZc4CEGz8///5+gsFBEJAqFAkIwqEiCp11JmuK3LZUvaSsXQZ876o5Nx77fXsuDsKpYPr3YXArAmdKKebOvOiiFV0y82MlZIFZi1JKaQoEliIgiEgil/ynHczURuKislFB+E7Xv8t2il+u6dBUwLra9TWUjKo9FuoqdBMQFAIgLOAAAAewGBf/o3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDY1IC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAwOCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTAgcmVmPTEgZGVibG9jaz0wOjA6MCBhbmFseXNlPTB4MTowIG1lPWRpYSBzdWJtZT04IHBzeV9yZD0xLjA6MC4wIG1peGVkX3JlZj0wIG1lX3JhbmdlPTQgY2hyb21hX21lPTAgdHJlbGxpcz0wIDh4OGRjdD0wIGNxbT0wIGRlYWR6b25lPTIxLDExIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz0xIG5yPTAgZGVjaW1hdGU9MSBtYmFmZj0wIGJmcmFtZXM9MCBrZXlpbnQ9MTIga2V5aW50X21pbj03IHNjZW5lY3V0PTAgcmM9MnBhc3MgYml0cmF0ZT01MTIgcmF0ZXRvbD03LjggcWNvbXA9MC41MCBxcG1pbj0yIHFwbWF4PTM1IHFwc3RlcD0zIGNwbHhibHVyPTIwLjAgcWJsdXI9MC41IGlwX3JhdGlvPTEuMjUgYXE9MToxLjAwAIAAAANlZYiCAAvXj//DcUAAT38NMts0yyw40AAmhoABNYWZZMy8LMsmZbW1tbW1tbW1tbW1tbW1tbW1tfHw/0HCQHAAEFkAAQcgABBBANJmKWEjJbGrlMfSwh3M5p44ABmOAAZpaWlpaWlpaWlpaWlpaWlpaWlhZGDSmfY5n/M+Z5bVXKq55SDj//w2cFfLY/ZS2t8trmlsyMsD/lh/y8D/lh/y2tra2tra2tra2tra2tra2tra4+H/oFxoykyvwW1VyjM2cO13//8FZx/zls8DjQKGgUSZZJlliixRJlkmWWKLFNbW1tbW1tbW1tbW1tbW1tbW1///QcNezEfQqEJdpT6mOVIX+/Tdd//+Gz4DvHLazS2vSlscxzCzLJmWHelh3pYWZZMyw70sO9La2tra2tra2tra2tra2tra2tr//+g4aNJie+OJNZgtpj6lM2SE937i///4eOPa5bXvLb77777777777777777///4LDSvTPLaq5VXOcghacB7Tlv/EJkQmcQmRCZMjLCmWSZeFMsky2tra2tra2tra2tra2tra2tra///oFxqFPEtqrlKfT0hvM+P//CZxd5b/gr5bffffffffffffffffffC0x6H0+59V0+bTbm0ZoW1VyquWpP//8FZx71LZ4HIiILMsmZfhZlkzL9ra2tra2tra2tra2tra2tra2uPh/6BYbxHltMfVVyHcz///8EBwV8tj9lLb77777777777777777///2Coy/lIMsP//w2db5bXNLY/5y2eBxzHMD/lh/yyTLJMsD/lh/yyTLJMtra2tra2tra2tra2tra2tra2v//7DhoykyvxezEfaNy2F1EtlRuWwuolqDR//+C0+A7xy2MAoYBRYosUFmWTMssUWKCzLJmW1tbW1tbW1tbW1tbW1tbW1tbX//9Bw1CoUaTE94l3DxyqY+03XSE93///w2dZpbXpS2Pa5bXvLYwAAqhgABVB3pYd6X4d6WHel+1tbW1tbW1tbW1tbW1tbW1tbX//9Bw0cSazEr0zy2lM2VVy4vLRfrrrrrrrrrrrrrrrrrrinr+IsQrseP/8NnwYtli7y38cxzCmWSZZMyyZlhTLJMsmZZMy2tra2tra2tra2tra2tra2tra+OH/oOGoU8Y2h8th0+qrnlhAAAATWbW9vdgAAAGxtdmhkAAAAANUmN0PVJjdDAAAD6AAAAAUAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAhd0cmFrAAAAXHRraGQAAAAB1SY3Q9UmN0MAAAABAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAUAAAADwAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAAFAAAAAAABAAAAAAGPbWRpYQAAACBtZGhkAAAAANUmN0PVJjdDAAAJ5QAAAC5VxAAAAAAAMWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABDb3JlIE1lZGlhIFZpZGVvAAAAATZtaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAD2c3RibAAAAJJzdHNkAAAAAAAAAAEAAACCYXZjMQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAFAAPAASAAAAEgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj//wAAACxhdmNDAULADf/hABVnQsANq0Cg/QgAAAMDIAAAnlR4oVUBAARozjLIAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAAuAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAABVkAAAABAAAAFHN0Y28AAAAAAAAAAQAAAdgAAAH0dHJhawAAAFx0a2hkAAAAAdUmN0PVJjdDAAAAAgAAAAAAAAAFAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAJGVkdHMAAAAcZWxzdAAAAAAAAAABAAAABQAAAAAAAQAAAAABbG1kaWEAAAAgbWRoZAAAAADVJjdD1SY3QwAArEQAAAwAVcQAAAAAADFoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAQ29yZSBNZWRpYSBBdWRpbwAAAAETbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADXc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAPoAAAAAAAWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAwAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAMAAAABAAAAIHN0c3oAAAAAAAAAAAAAAAMAAACzAAAAewAAAH4AAAAUc3RjbwAAAAAAAAABAAAALAAAAFd1ZHRhAAAAT3RpdGwAAAAAFcdCbGFjayBTY3JlZW4gSUkgLSBodHRwOi8vd3d3LmFyY2hpdmUub3JnL2RldGFpbHMvYmxhY2stc2NyZWVuLWlpAA=='
};
// we have some differences flow for testing the support is IOS AND ANDROIED
// for ANDROIED we need to add the video to the dom
const isAndroid = window.navigator.userAgent.match(/Android/ig);

// the video html5 element doe testings autoplay
let v;

// A Number, representing the ID value of the timer that is set. Use this value with the clearTimeout() method to cancel the timer
let timer;
// the video element event for play
const playerEventName = 'play';

// state of the Validator 
const AutoPlayValidatorState = {
  // the video element id
  elementId: 'iaAutoPlayValidator',
  // if we start already the test
  started: false,
  // array of resolve function from Promise object
  resolvers: [],
  //  isSupported auto play
  isSupported: null
};

/**
 * when the test end we will call all of AutoPlayValidatorState.resolvers callback to return the result
 * @param {boolean} isSupported
 */
function resolveAutoPlay(isSupported) {
  AutoPlayValidatorState.isSupported = isSupported;
  AutoPlayValidatorState.resolvers.forEach((resolve) => {
    resolve(AutoPlayValidatorState.isSupported);
  });
  AutoPlayValidatorState.resolvers = [];
  // in ANDROIED we need to remove the video from dom
  if(isAndroid && v) {
    v.remove();
    v = null;
  }
}

/**
 * build video element to check auto play support
 */
function initValidatorVideo() {
  if(!v) {
    v = document.createElement('video');
    v.setAttribute('id', AutoPlayValidatorState.elementId);
    // muted must be set to true for starting autoplay
    // https://webkit.org/blog/6784/new-video-policies-for-ios/
    v.setAttribute('muted', 'true');
    v.setAttribute('preload', 'auto'); 
    v.setAttribute('playsinline', 'true');
    if(isAndroid) {
      v.setAttribute('autoplay', 'true');
      v.setAttribute('src', CONSTANTS.PLAYERS.TINY_VIDEO);
      v.setAttribute('type', 'video/mp4');
    }else {
      const source = document.createElement('source');
      source.setAttribute('src', CONSTANTS.PLAYERS.TINY_VIDEO);
      source.setAttribute('type', 'video/mp4');
      v.appendChild(source);
    }
  }
}

/**
 * remove listener before resolving
 * @param {boolean} isSupport
 */
function onBeforeResolve(isSupport) {
  v.removeEventListener(playerEventName, onPlay);
  resolveAutoPlay(isSupport);
}

/**
 * on play will check the currentTime to check if there was play event 
 * in case of yes we will clear the time out and start to resolve the result
 */
function onPlay() {
  if (v.currentTime) {
    window.clearTimeout(timer);
    timer = null;
    onBeforeResolve(true);
  }
}
/**
 * work around when video play will not return promise
 */
function onVideoPlayPromiseNotWorking() {
  v.pause();
  v.addEventListener('loadeddata', () => {
    timer = setTimeout(() => {
      if (v.currentTime === 0) {
        onBeforeResolve(false);
      }
    }, CONSTANTS.PLAYERS.TINY_VIDEO_DURATION);
    v.addEventListener(playerEventName, () => {
      v.currentTime += 0.1;
      onPlay();
    }, {once: true});
    v.pause();
    v.play();
  }, {once: true});
  v.load();
}

/**
 * we need to add the video element to the dom in case of Androied
 */
function validateOnAndroid() {
  document.body.appendChild(v);
  onVideoPlayPromiseNotWorking();
}

/**
 * no need to add to dom the video element
 */
function validateOnIOS() {
  const playPromise = v.play();
  if (playPromise) {
    playPromise.then(() => {
      resolveAutoPlay(true);
    }, () => {
      resolveAutoPlay(false);
    });
  } else {
    onVideoPlayPromiseNotWorking();
  }
}
/**
 * check if the video start playing
 */
function validate() {
  initValidatorVideo();
  if(isAndroid) {
    validateOnAndroid();
  }else {
    validateOnIOS();
  }
}

/**
 * set the state of the validator
 * to prevent start the test for mluti players
 * @param {function} resolve
 */
function autoPlayValidatorPromiseHandler(resolve) {
  if (!AutoPlayValidatorState.started) {
    AutoPlayValidatorState.started = true;
    AutoPlayValidatorState.resolvers.push(resolve);
    validate();
  } else if (AutoPlayValidatorState.isSupported !== null) {
    resolve(AutoPlayValidatorState.isSupported);
  } else {
    AutoPlayValidatorState.resolvers.push(resolve);
  }
}

const AutoPlayValidator = {

 /**
   * check if autoplay supported
   * @return {Promise}
   */
  isSupport() {
    const promise = new Promise(autoPlayValidatorPromiseHandler);
    return promise;
  }

};

export default AutoPlayValidator;

