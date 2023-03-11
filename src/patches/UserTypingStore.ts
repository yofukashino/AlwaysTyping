import { CurrentUser, PluginInjector, SettingValues } from "../index";
import { SelectedChannelStore, UserTypingStore } from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import * as Utils from "../lib/utils";
export const patchUserTypingStore = (): void => {
  PluginInjector.after(
    UserTypingStore,
    "isTyping",
    ([channelId, userId]: [string, string], res: boolean) => {
      const CurrentChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
      if (CurrentUser.id === userId && CurrentChannelId === channelId) Utils.type();
      return res || SettingValues.get("showAllTyping", defaultSettings.showAllTyping);
    },
  );
};
