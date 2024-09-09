export const formatDate = (dateStr: string, path: string) => {
  const date = new Date(dateStr);

  const isPath =
    path.includes("/posts") ||
    path.includes("/projects") ||
    path.includes("/photos");

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: isPath ? "long" : "short",
    day: "numeric",
    year: "numeric",
  });

  return formatter.format(date);
};
