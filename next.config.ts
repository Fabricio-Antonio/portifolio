import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Diretório deste repositório — evita raiz errada quando existe outro lockfile acima (ex.: em $HOME). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
