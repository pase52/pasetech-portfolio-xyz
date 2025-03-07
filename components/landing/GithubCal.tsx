'use client'
import { ActivityCalendar } from 'react-activity-calendar'
import { useTheme } from 'next-themes'
import { useGitLabCalendar } from '../../lib/hooks/useGitLabCalendar'

export function GithubCal() {
  const { theme } = useTheme()
  const { data, loading, error } = useGitLabCalendar('apsfdossantos');

  const colorScheme = theme === 'dark' ? 'dark' : 'light'

  return (
    <div className="w-full my-10">
      <h3 className="text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        Mes commits sur <span className="text-green-700 dark:text-[#fc6d26]">GitLab</span>
      </h3>
      <div className="flex items-center justify-center mt-5">
        {loading && <p>Loading contribution data...</p>}
        {error && <p className="text-red-500">Failed to load GitLab contributions</p>}
        {!loading && !error && (
          <ActivityCalendar
            colorScheme={colorScheme}
            data={data}
            showTotalCount={true}
            showMonthLabels={true}
            showWeekdayLabels={true}
          />
        )}
      </div>
    </div>
  )
}
