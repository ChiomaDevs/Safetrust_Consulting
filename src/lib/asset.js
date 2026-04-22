// base-aware asset helper (works locally and on GitHub Pages)
export const asset = (rel) => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/$/, "")}/${String(rel).replace(/^\//, "")}`;
};
