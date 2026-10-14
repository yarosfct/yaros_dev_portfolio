/**
 * Public files are served from the site origin. When the app is hosted under
 * a Next.js `basePath` (set via `NEXT_PUBLIC_BASE_PATH`), prefix that path so
 * download links match the URL the dev server and production server actually use.
 */
export function publicAsset(path: string): string {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
