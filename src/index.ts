import { Injector, Logger, common, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
export const { users: UserStore } = common;
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("AlwaysTyping");
export const SettingValues = await settings.init("Tharki.AlwaysTyping", defaultSettings);
import * as Utils from "./lib/utils";
export const CurrentUser = await Utils.currentUser;
import { registerSettings } from "./Components/Settings";
import { applyInjections } from "./patches/index";
export const start = (): void => {
  registerSettings();
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};
export { Settings } from "./Components/Settings.jsx";
