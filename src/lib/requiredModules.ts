import { webpack } from "replugged";
import * as Types from "../types";

export const TypingStore = webpack.getByProps(
  "startTyping",
  "stopTyping",
) as unknown as Types.TypingStore;

export const SelectedChannelStore = webpack.getByProps(
  "getLastSelectedChannelId",
) as unknown as Types.SelectedChannelStore;

export const UserTypingStore = webpack.getByProps("isTyping") as unknown as Types.UserTypingStore;
