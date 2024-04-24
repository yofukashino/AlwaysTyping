import { SettingValues } from "../index";
import { defaultSettings } from "./consts";
import Modules from "./requiredModules";
export const type = (): void => {
  const channelIds = [
    ...SettingValues.get("customChannels", defaultSettings.customChannels).split(","),
    Modules.SelectedChannelStore.getCurrentlySelectedChannelId(),
  ].filter((n) => n);
  if (channelIds.length)
    for (const id of channelIds) {
      Modules.TypingUtils.startTyping(id);
    }
};

export default { type };
