export const minsSinceDate = (date: Date): string => {
  const diffMs = Date.now() - date.getTime();
  return Math.round(((diffMs % 86400000) % 3600000) / 60000).toString();
}