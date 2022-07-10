export function removeEmptyProperties(obj: { [key: string]: any }) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => {
      return typeof v === 'string' ? Boolean(v.trim()) : Boolean(v);
    })
  );
}
