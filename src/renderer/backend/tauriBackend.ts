import { invoke } from '@tauri-apps/api/tauri';
import BackendInterface from '../../types/backendInterface';
import { PathData, PossibleSaves } from '../../types/SAVTypes/path';
import { SaveFolder, StoredBoxData } from '../../types/storage';
import { Errorable, LoadSaveResponse, LookupMap, SaveRef } from '../../types/types';
import { createContext } from 'react';

export const TauriBackend: BackendInterface = {
  /* past gen identifier lookups */
  loadGen12Lookup: async (): Promise<Errorable<LookupMap>> => {
    return invoke('load_gen12_lookup');
  },
  loadGen345Lookup: async (): Promise<Errorable<LookupMap>> => {
    return invoke('load_gen345_lookup');
  },
  writeGen12Lookup: async (lookup: LookupMap): Promise<Errorable<null>> => {
    return invoke('write_gen12_lookup', { lookup });
  },
  writeGen345Lookup: async (lookup: LookupMap): Promise<Errorable<null>> => {
    return invoke('write_gen345_lookup', { lookup });
  },

  /* OHPKM management */
  loadHomeMonLookup: async (): Promise<Errorable<Record<string, Uint8Array>>> => {
    return invoke('load_home_mon_lookup');
  },
  deleteHomeMons: async (identifiers: string[]): Promise<Errorable<null>> => {
    return invoke('delete_home_mons', { identifiers });
  },
  writeHomeMon: async (monBytes: Uint8Array): Promise<Errorable<null>> => {
    return invoke('write_home_mon', { monBytes });
  },

  /* openhome boxes */
  loadHomeBoxes: async (): Promise<Errorable<StoredBoxData[]>> => {
    return invoke('load_home_boxes');
  },
  writeHomeBoxes: async (boxData: StoredBoxData[]): Promise<Errorable<null>> => {
    return invoke('write_home_boxes', { boxData });
  },

  /* game saves */
  loadSaveFile: async (filePath?: PathData): Promise<Errorable<LoadSaveResponse>> => {
    return invoke('load_save_file', { filePath });
  },
  writeSaveFile: async (path: string, bytes: Uint8Array): Promise<Errorable<null>> => {
    return invoke('write_save_file', { path, bytes });
  },

  /* game save management */
  getRecentSaves: async (): Promise<Errorable<Record<string, SaveRef>>> => {
    return invoke('get_recent_saves');
  },
  addRecentSave: async (saveRef: SaveRef): Promise<Errorable<null>> => {
    return invoke('add_recent_save', { saveRef });
  },
  removeRecentSave: async (filePath: string): Promise<Errorable<null>> => {
    return invoke('remove_recent_save', { filePath });
  },
  findSuggestedSaves: async (): Promise<Errorable<PossibleSaves>> => {
    return invoke('find_suggested_saves');
  },
  getSaveFolders: async (): Promise<Errorable<SaveFolder[]>> => {
    return invoke('get_save_folders');
  },
  removeSaveFolder: async (path: string): Promise<Errorable<null>> => {
    return invoke('remove_save_folder', { path });
  },
  upsertSaveFolder: async (folderPath: string, label: string): Promise<Errorable<null>> => {
    return invoke('upsert_save_folder', { folderPath, label });
  },

  /* transactions */
  startTransaction: async (): Promise<Errorable<null>> => {
    return invoke('start_transaction');
  },
  commitTransaction: async (): Promise<Errorable<null>> => {
    return invoke('commit_transaction');
  },
  rollbackTransaction: async (): Promise<Errorable<null>> => {
    return invoke('rollback_transaction');
  },

  /* application */
  setHasChanges: async (hasChanges: boolean): Promise<void> => {
    return invoke('set_has_changes', { hasChanges });
  },
  pickFolder: async (): Promise<Errorable<string | undefined>> => {
    return invoke('pick_folder');
  },
  getResourcesPath: async (): Promise<string> => {
    return invoke('get_resources_path');
  },
  openDirectory: async (directory: string): Promise<Errorable<null>> => {
    return invoke('open_directory', { directory });
  },
  getPlatform: async (): Promise<string> => {
    return invoke('get_platform');
  },
};

export const TauriBackendContext = createContext(TauriBackend);
