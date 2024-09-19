import CountriesData from "../mooks/countries-info.v3.1.json"
import type { Country } from "../types/countries.v3.1"

// const STORAGE_COUNTRY_ID = "__countries__data__"

const GETAllCountriesLocal = async (): Promise<Country[]> => {
	const countries = CountriesData?.countries
	if (!countries) return []

	const mappingCountries = countries.map((country: any) => {
		const {
			name,
			tld,
			cca2,
			ccn3,
			cca3,
			independent,
			status,
			unMember,
			currencies,
			idd,
			capital,
			altSpellings,
			region,
			subregion,
			languages,
			translations,
			latlng,
			landlocked,
			area,
			demonyms,
			flag,
			maps,
			population,
			fifa,
			car,
			timezones,
			continents,
			flags,
			coatOfArms,
			startOfWeek,
			capitalInfo,
		} = country

		return {
			name: {
				common: name.common,
				official: name.official,
				nativeName: name.nativeName,
			},
			tld,
			cca2,
			ccn3,
			cca3,
			independent,
			status,
			unMember,
			currencies: currencies,
			idd: { root: idd.root, suffixes: idd.suffixes },
			capital,
			altSpellings,
			region,
			subregion,
			languages,
			translations,
			latlng,
			landlocked,
			area,
			demonyms,
			flag,
			maps: {
				googleMaps: maps.googleMaps,
				openStreetMaps: maps.openStreetMaps,
			},
			population,
			fifa,
			car: { signs: car.signs, side: car.side },
			timezones,
			continents,
			flags: {
				png: flags.png,
				svg: flags.svg,
				alt: flags.alt,
			},
			coatOfArms: {
				png: coatOfArms.png,
				svg: coatOfArms.svg,
			},
			startOfWeek,
			capitalInfo: { latlng: capitalInfo.latlng },
		}
	})

	const returData = [...mappingCountries].sort((a, b) => a.name.common.localeCompare(b.name.common))
	return returData
}

const GETAllCountries = async ({ offset = 0 }): Promise<Country[]> => {
	// Check if data is in local storage
	// const localData = getLocalStorageData({ name: STORAGE_COUNTRY_ID })
	// if (localData !== null) return localData.slice(offset, offset + 20)

	// Fetch data from the API
	try {
		return await fetch("https://restcountries.com/v3.1/all")
			.then((response) => {
				return response.status === 200 ? response.json() : []
			})
			.then((data) => {
				data = data.map((country: any) => {
					const {
						name,
						tld,
						cca2,
						ccn3,
						cca3,
						independent,
						status,
						unMember,
						currencies,
						idd,
						capital,
						altSpellings,
						region,
						subregion,
						languages,
						translations,
						latlng,
						landlocked,
						area,
						demonyms,
						flag,
						maps,
						population,
						fifa,
						car,
						timezones,
						continents,
						flags,
						coatOfArms,
						startOfWeek,
						capitalInfo,
					} = country

					return {
						name: {
							common: name.common,
							official: name.official,
							nativeName: name.nativeName,
						},
						tld,
						cca2,
						ccn3,
						cca3,
						independent,
						status,
						unMember,
						currencies: currencies,
						idd: { root: idd.root, suffixes: idd.suffixes },
						capital,
						altSpellings,
						region,
						subregion,
						languages,
						translations,
						latlng,
						landlocked,
						area,
						demonyms,
						flag,
						maps: {
							googleMaps: maps.googleMaps,
							openStreetMaps: maps.openStreetMaps,
						},
						population,
						fifa,
						car: { signs: car.signs, side: car.side },
						timezones,
						continents,
						flags: {
							png: flags.png,
							svg: flags.svg,
							alt: flags.alt,
						},
						coatOfArms: {
							png: coatOfArms.png,
							svg: coatOfArms.svg,
						},
						startOfWeek,
						capitalInfo: { latlng: capitalInfo.latlng },
					}
				})

				// setLocalStorageData({ name: STORAGE_COUNTRY_ID, data: JSON.stringify(data) })

				return data.slice(offset, offset + 20)
			})
			.catch((error) => {
				console.error(error)
			})
	} catch (error) {
		console.error(error)
	}

	return []
}

const GETCountryByCode = async ({ code }: { code: string | number }) => {
	const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
	const data = await response.json()
	return data
}

export { GETAllCountries, GETAllCountriesLocal, GETCountryByCode }