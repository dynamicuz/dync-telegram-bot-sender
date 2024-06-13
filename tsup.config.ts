import { defineConfig } from "tsup";
import { SendMsgFromBot} from "./src/index"
export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/index.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});

