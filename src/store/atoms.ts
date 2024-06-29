import { atom } from 'recoil';
import { loadState, saveState } from './localStorage';

export const itemListState = atom<string[]>({
  key: 'itemListState',
  default: loadState<string[]>('itemListState') || [],
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        saveState('itemListState', newValue);
      });
    },
  ],
});
