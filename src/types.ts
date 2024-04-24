import { types } from "replugged";
import { Store } from "replugged/dist/renderer/modules/common/flux";

export namespace Types {
  export import DefaultTypes = types;
  export type GenericModule = Record<string, DefaultTypes.AnyFunction>;
  export interface TypingUtils {
    startTyping: DefaultTypes.AnyFunction;
    stopTyping: DefaultTypes.AnyFunction;
  }

  export interface SelectedChannelStore extends Store {
    getChannelId: DefaultTypes.AnyFunction;
    getCurrentlySelectedChannelId: DefaultTypes.AnyFunction;
    getLastChannelFollowingDestination: DefaultTypes.AnyFunction;
    getLastSelectedChannelId: DefaultTypes.AnyFunction;
    getLastSelectedChannels: DefaultTypes.AnyFunction;
    getMostRecentSelectedTextChannelId: DefaultTypes.AnyFunction;
    getVoiceChannelId: DefaultTypes.AnyFunction;
    initialize: DefaultTypes.AnyFunction;
  }

  export interface TypingStore extends Store {
    getTypingUsers: DefaultTypes.AnyFunction;
    isTyping: DefaultTypes.AnyFunction;
  }

  export interface Modules {
    loadModules?: () => Promise<void>;
    TypingUtils?: TypingUtils;
    SelectedChannelStore?: SelectedChannelStore;
    TypingStore?: TypingStore;
  }
  export interface Settings {
    showAllTyping: boolean;
    customChannels: string;
  }
}
export default Types;
