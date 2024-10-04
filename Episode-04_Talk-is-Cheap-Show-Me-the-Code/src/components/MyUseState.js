import { useReducer } from "react";

let hookIdTracker = 0;
const states = [];
//console.log('Inside MYUSESTATE');

export function myUseState(initialValue) {
  const localHookId = hookIdTracker++;
  // console.log('localHookId::::',localHookId);
  // console.log('initialValue::::',initialValue);
  // console.log('states:::::',states);

  const [, renderer] = useReducer(() => ({}));
  function forceUpdate() {
    //console.log('forceUpdate called for::',states[localHookId][0]);
    hookIdTracker = 0;
    renderer();
  }

  if (states[localHookId]) {
    return states[localHookId];
  }

  function setValue(newValue) {
    //console.log('setValue method called------------>',localHookId, hookIdTracker);
    const isValueChanged = !Object.is(newValue, states[localHookId][0]);
    states[localHookId][0] = newValue;
    isValueChanged && forceUpdate();
  }
  const tuple = [initialValue, setValue];
  states[localHookId] = tuple;
  return tuple;
}
