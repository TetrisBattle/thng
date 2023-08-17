export const getDate = (date: Date) => {
	return date.toLocaleDateString('fi-FI')
}

export const getRelativeTime = (originalDate: Date) => {
	const formatter = new Intl.RelativeTimeFormat('fi', { numeric: 'auto' })
	const now = new Date()
	const date = new Date(originalDate)
	date.setMinutes(date.getMinutes() - now.getTimezoneOffset())

	const years = date.getFullYear() - now.getFullYear()
	const months = date.getMonth() + 1 - (now.getMonth() + 1)
	const days = date.getDate() - now.getDate()
	const hours = date.getHours() - now.getHours()
	const minutes = date.getMinutes() - now.getMinutes()
	const seconds = date.getSeconds() - now.getSeconds()

	if (years) return formatter.format(years, 'years')
	else if (months) return formatter.format(months, 'months')
	else if (days) return formatter.format(days, 'days')
	else if (hours) return formatter.format(hours, 'hours')
	else if (minutes) return formatter.format(minutes, 'minutes')
	else if (seconds) return formatter.format(seconds, 'seconds')
	else return formatter.format(-1, 'seconds')
}

export const getAge = (birthDate: Date) => {
	const today = new Date()
	let age = today.getFullYear() - birthDate.getFullYear()
	const month = today.getMonth() - birthDate.getMonth()
	if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
		age--
	}

	return age
}
