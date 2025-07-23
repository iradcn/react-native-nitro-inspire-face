import { NitroModules } from 'react-native-nitro-modules';
import type { InspireFace as NitroInspireFace } from './InspireFace.nitro';
import type { AssetManager as NitroAssetManager } from './AssetManager.nitro';
export * from './InspireFace.nitro';
export * from './Session.nitro';
export * from './ImageStream.nitro';
export * from './ImageBitmap.nitro';
export * from './AssetManager.nitro';
export * from './enums';
export * from './types';

export const InspireFace =
  NitroModules.createHybridObject<NitroInspireFace>('InspireFace');

export const AssetManager =
  NitroModules.createHybridObject<NitroAssetManager>('AssetManager');

export const BoxedInspireFace = NitroModules.box(InspireFace);
