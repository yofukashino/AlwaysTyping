import { types as DefaultTypes } from "replugged";
export { types as DefaultTypes } from "replugged";
export { ReactElement } from "react";

export interface TypingStore {
  startTyping: DefaultTypes.AnyFunction;
  stopTyping: DefaultTypes.AnyFunction;
}

export interface SelectedChannelStore {
  getChannelId: DefaultTypes.AnyFunction;
  getCurrentlySelectedChannelId: DefaultTypes.AnyFunction;
  getLastChannelFollowingDestination: DefaultTypes.AnyFunction;
  getLastSelectedChannelId: DefaultTypes.AnyFunction;
  getLastSelectedChannels: DefaultTypes.AnyFunction;
  getMostRecentSelectedTextChannelId: DefaultTypes.AnyFunction;
  getVoiceChannelId: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
}

export interface UserTypingStore {
  getTypingUsers: DefaultTypes.AnyFunction;
  isTyping: DefaultTypes.AnyFunction;
}

export interface Settings {
  showAllTyping: boolean;
  customChannels: string;
}
