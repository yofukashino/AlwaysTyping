import { components, util } from "replugged";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
const { SwitchItem, TextInput, FormItem } = components;
import * as Types from "../types";
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value`, defaultSettings[key]);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};
export const Settings = (): Types.ReactElement => {
  return (
    <div>
      <SwitchItem
        {...{
          ...util.useSetting(SettingValues, "showAllTyping", defaultSettings.showAllTyping),
          note: "Show everyone as typing. (Client-side only)",
        }}>
        Everyone typing
      </SwitchItem>
      <FormItem
        {...{
          title: "Custom channels",
          note: "IDs of channels in which AlwaysTyping should send typing status, other than the currently selected channel. - Separated by commas.",
          notePosition: "after",
          noteStyle: { marginTop: 16 },
          divider: true,
        }}>
        <TextInput
          {...{
            ...util.useSetting(SettingValues, "customChannels", defaultSettings.customChannels),
            placeholder: "xxxxxxxxxxxxxxxxxx",
            note: "Show everyone as typing. (Client-side only)",
          }}
        />
      </FormItem>
    </div>
  );
};
