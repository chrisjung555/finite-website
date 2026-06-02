export function getYearStats(date = new Date()) {
  const year = date.getFullYear();
  const start = new Date(year, 0, 1);
  const end = new Date(year + 1, 0, 1);
  const totalMs = end.getTime() - start.getTime();
  const elapsedMs = date.getTime() - start.getTime();
  const percentComplete = Math.round((elapsedMs / totalMs) * 100);
  const daysInYear = Math.round(totalMs / (1000 * 60 * 60 * 24));
  const dayOfYear = Math.floor(elapsedMs / (1000 * 60 * 60 * 24)) + 1;
  const daysRemaining = daysInYear - dayOfYear;
  const weeksRemaining = Math.ceil(daysRemaining / 7);

  let weekendsRemaining = 0;
  const cursor = new Date(date);
  cursor.setDate(cursor.getDate() + 1);
  while (cursor.getFullYear() === year) {
    const day = cursor.getDay();
    if (day === 0 || day === 6) weekendsRemaining++;
    cursor.setDate(cursor.getDate() + 1);
  }

  return {
    year,
    percentComplete,
    daysRemaining,
    weeksRemaining,
    weekendsRemaining,
  };
}
