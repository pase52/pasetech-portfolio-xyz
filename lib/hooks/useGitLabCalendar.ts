import { useState, useEffect } from 'react';

type GitLabCalendarData = Record<string, number>;

export type ActivityCalendarData = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}[];

const calculateLevel = (count: number, max: number): 0 | 1 | 2 | 3 | 4 => {
  if (count === 0) return 0;
  if (count <= max * 0.25) return 1;
  if (count <= max * 0.5) return 2;
  if (count <= max * 0.75) return 3;
  return 4;
};

export const useGitLabCalendar = (username: string) => {
  const [data, setData] = useState<ActivityCalendarData>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        setLoading(true);
        // Use our API route instead of calling GitLab directly
        const response = await fetch(`/api/gitlab-calendar?username=${encodeURIComponent(username)}`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch GitLab calendar data');
        }

        const rawData: GitLabCalendarData = await response.json();
        
        // Transform the data
        const entries = Object.entries(rawData);
        if (entries.length === 0) {
          setData([]);
          return;
        }
        
        const maxCount = Math.max(...entries.map(([_, count]) => count));
        
        const transformedData: ActivityCalendarData = entries.map(([date, count]) => ({
          date,
          count,
          level: calculateLevel(count, maxCount)
        }));

        setData(transformedData);
      } catch (err) {
        console.error('Error in useGitLabCalendar:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchCalendarData();
    }
  }, [username]);

  return { data, loading, error };
};
