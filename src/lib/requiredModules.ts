import { webpack } from "replugged";
import * as Types from "../types";

export const TypingStore = webpack.getByProps<Types.TypingStore>("startTyping", "stopTyping");

export const SelectedChannelStore = webpack.getByProps<Types.SelectedChannelStore>(
  "getLastSelectedChannelId",
);

export const UserTypingStore = webpack.getByProps<Types.UserTypingStore>("isTyping");
