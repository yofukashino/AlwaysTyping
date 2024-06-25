import { webpack } from "replugged";
import Types from "../types";

const Modules: Types.Modules = {};

Modules.loadModules = async () => {
  Modules.TypingUtils ??= await webpack
    .waitForProps<Types.TypingUtils>(["startTyping", "stopTyping"], {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find TypingUtils Module");
    });

  Modules.SelectedChannelStore =
    webpack.getByStoreName<Types.SelectedChannelStore>("SelectedChannelStore");
  Modules.TypingStore = webpack.getByStoreName<Types.TypingStore>("TypingStore");
};

export default Modules;
