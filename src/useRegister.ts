import { Jpex } from 'jpex';
import useJpex from './useJpex';

export default function useRegister(...fns: ((jpex: Jpex) => void)[]) {
  const jpex = useJpex();

  fns.forEach((fn) => fn(jpex));
}
