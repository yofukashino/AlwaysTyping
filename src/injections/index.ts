import Modules from "../lib/requiredModules";
import injectTypingStore from "./TypingStore";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectTypingStore();
};

export default { applyInjections };
