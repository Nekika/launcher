import { writable } from 'svelte/store';

export const isSidebarExpanded = writable(false);
export const isInstalling = writable(false);