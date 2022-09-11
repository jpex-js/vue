import type { Jpex, SetupConfig } from 'jpex';
import { provide } from 'vue';
import useJpex from './useJpex';
import { Key } from './constants';

export default function useProvide({
  value,
  ...config
}: {
  value?: Jpex;
} & SetupConfig) {
  const parent = useJpex();
  const jpex = value ?? parent.extend(config);

  provide(Key, jpex);

  return jpex;
}
