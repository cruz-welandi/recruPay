import { create } from 'zustand';

type SideBarState = {
  expanded: boolean;
  setExpanded: () => void;
};

export const useSideBarStore = create<SideBarState>((set) => ({
  expanded: false, // état initial
  setExpanded: () => set((state) => ({ expanded: !state.expanded })), // mise à jour expanded
}));
