export const formatDate = (dateString: string, format: 'full' | 'short' = 'full') => {
  const date = new Date(dateString);
  console.log("Date object created from:", dateString, "is:", date);

  if (format === 'short') {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(date);
  }

  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};