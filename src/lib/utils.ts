import { SettingValues, UserStore } from "../index";
import { defaultSettings } from "./consts";
import { SelectedChannelStore, TypingStore } from "./requiredModules";
import * as Types from "../types";
export const currentUser = new Promise<Types.User>((resolve) => {
  const getCurrentUser = (): void => {
    const currentUser = UserStore?.getCurrentUser();
    if (currentUser) {
      resolve(currentUser);
    } else setTimeout(getCurrentUser, 100);
  };
  getCurrentUser();
});
export const type = (): void => {
  const channelIds = [
    ...SettingValues.get("customChannels", defaultSettings.customChannels).split(","),
    SelectedChannelStore.getCurrentlySelectedChannelId(),
  ].filter((n) => n);
  if (channelIds.length)
    for (const id of channelIds) {
      TypingStore.startTyping(id);
    }
};
