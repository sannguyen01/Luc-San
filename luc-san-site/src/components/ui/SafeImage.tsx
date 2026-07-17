import fs from "node:fs";
import path from "node:path";
import Image, { type ImageProps } from "next/image";

const publicRoot = path.join(process.cwd(), "public");

/**
 * Local (public/) files are checked with fs.existsSync at render time — cheap,
 * since this only ever runs on the server during SSG/RSC render, never in the browser.
 * Remote/absolute URLs are assumed present; only root-relative paths are checked.
 */
function existsInPublic(src: ImageProps["src"]): boolean {
  if (typeof src !== "string" || !src.startsWith("/")) return true;
  return fs.existsSync(path.join(publicRoot, src));
}

/**
 * Drop-in replacement for next/image's <Image> that renders nothing instead of
 * a broken-image glyph when the referenced file doesn't exist yet in public/.
 * Callers that already give the container a background color (the established
 * pattern in this codebase for "photography pending") get a clean color block;
 * once the real file is added, this picks it up automatically — no code change.
 */
export function SafeImage({ src, alt, ...rest }: ImageProps) {
  if (!existsInPublic(src)) return null;
  return <Image src={src} alt={alt} {...rest} />;
}
