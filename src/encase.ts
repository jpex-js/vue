import { ref } from 'vue';
import jpex from 'jpex';
import useJpex from './useJpex';

type Encase = typeof jpex.encase;

function encase(dependencies: string[], fn: (...args: any[]) => any) {
  function encased(...args: any[]) {
    const jpex = useJpex();
    const fnRef = ref();

    if (fnRef.value == null) {
      const deps = dependencies.map((name) => jpex.resolve(name));
      fnRef.value = fn.apply(jpex, deps);
    }

    return fnRef.value.apply(null, args);
  }
  encased.encased = fn;
  return encased;
}

export default encase as Encase;
