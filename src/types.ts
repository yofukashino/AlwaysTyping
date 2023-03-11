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
export interface User {
  avatar: string;
  avatarDecoration: undefined | string;
  bot: boolean;
  desktop: boolean;
  discriminator: string;
  email: null | string;
  flags: number;
  guildMemberAvatars: {
    [key: number]: string;
  };
  hasBouncedEmail: boolean;
  hasFlag: DefaultTypes.AnyFunction;
  id: string;
  isStaff: DefaultTypes.AnyFunction;
  isStaffPersonal: DefaultTypes.AnyFunction;
  mfaEnabled: boolean;
  mobile: boolean;
  nsfwAllowed: undefined | boolean;
  personalConnectionId: null | string;
  phone: null | string;
  premiumType: undefined | number;
  premiumUsageFlags: number;
  publicFlags: number;
  purchasedFlags: number;
  system: boolean;
  username: string;
  verified: boolean;
  createdAt: Date;
  tag: string;
}
export interface Settings {
  showAllTyping: boolean;
  customChannels: string;
}
