import jpex from 'jpex';
import { inject } from 'vue';
import { Key } from './constants';

export default function useJpex() {
  return inject(Key, jpex);
}
