import { CurrentUser, PluginInjector, SettingValues } from "../index";
import { SelectedChannelStore, UserTypingStore } from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import * as Utils from "../lib/utils";
export const patchUserTypingStore = (): void => {
  PluginInjector.after(UserTypingStore, "isTyping", (_args: [string, string], res: boolean) => {
    const channelIds = [
      ...SettingValues.get("customChannels", defaultSettings.customChannels).split(","),
      SelectedChannelStore.getCurrentlySelectedChannelId(),
    ].filter((n) => n);
    const shouldType = !channelIds.some((channelId) => {
      const typingUsers = Object.keys(UserTypingStore.getTypingUsers(channelId));
      return typingUsers.includes(CurrentUser.id);
    });
    if (shouldType) Utils.type();
    return res || SettingValues.get("showAllTyping", defaultSettings.showAllTyping);
  });
};
