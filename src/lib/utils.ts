import { SettingValues } from "../index";
import { defaultSettings } from "./consts";
import { SelectedChannelStore, TypingStore } from "./requiredModules";
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

export default { type };
