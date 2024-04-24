import { users as UltimateUserStore } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import Utils from "../lib/utils";

export default (): void => {
  PluginInjector.after(
    Modules.TypingStore,
    "isTyping",
    ([, userId]: [string, string], res: boolean) => {
      if (!res && userId === UltimateUserStore.getCurrentUser()?.id) Utils.type();
      return res || SettingValues.get("showAllTyping", defaultSettings.showAllTyping);
    },
  );
};
