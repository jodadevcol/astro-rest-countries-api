const setLocalStorageData = ({ name, data }: { name: string; data: string }) => {
	try {
		window.localStorage.setItem(name, data)

		return true
	} catch (error) {
		console.error(error)
		return false
	}
}

const getLocalStorageData = ({ name }: { name: string }) => {
	const localData = window.localStorage.getItem(name)
	if (localData) return JSON.parse(localData)

	return null
}
