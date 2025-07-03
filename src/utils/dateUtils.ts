import { format } from 'date-fns';

export const formatLastUpdatedTime = (date: Date): string => {
  return format(date, 'p'); // 'p' for localized time (e.g., 4:30 PM)
};
