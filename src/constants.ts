import type { InjectionKey } from 'vue';
import type { JpexInstance } from 'jpex';

export const Key = Symbol('jpex/vue') as InjectionKey<JpexInstance>;
