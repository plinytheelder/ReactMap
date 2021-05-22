import create from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(persist(set => ({
  location: undefined,
  setLocation: (location) => set({ location }),
  zoom: undefined,
  setZoom: (zoom) => set({ zoom }),
  filters: undefined,
  setFilters: (filters) => set({ filters }),
  settings: undefined,
  setSettings: (settings) => set({ settings }),
  menus: undefined,
  setMenus: (menus) => set({ menus }),
}),
{
  name: 'local-state',
  getStorage: () => localStorage,
}))

const useStatic = create(set => ({
  config: undefined,
  setConfig: (config) => set({ config }),
  staticFilters: undefined,
  setStaticFilters: (staticFilters) => set({ staticFilters }),
  staticMenus: undefined,
  setStaticMenus: (staticMenus) => set({ staticMenus }),
  available: undefined,
  setAvailable: (available) => set({ available }),
  availableForms: undefined,
  setAvailableForms: (availableForms) => set({ availableForms }),
  ui: {},
  setUi: (ui) => set({ ui }),
  masterfile: {},
  setMasterfile: (masterfile) => set({ masterfile }),
  breakpoint: false,
  setBreakpoint: (breakpoint) => set({ breakpoint }),
  hideList: [],
  setHideList: (hideList) => set({ hideList }),
  excludeList: [],
  setExcludeList: (excludeList) => set({ excludeList }),
  timerList: [],
  setTimerList: (timerList) => set({ timerList }),
}))

export { useStore, useStatic }
