export interface IItem {
	_id?: string
	category: string
	imgUrl: string[]
	brand: string
	model: string
	vendor: string
	title: string
	description: string
	price: number
	isAvailable: boolean
	isCompatible: boolean
	compatibility: string[]
}

export interface SItem {
	_id: string
	category: string
	imgUrl: string[]
	brand: string
	model: string
	vendor: string
	title: string
	description: string
	price: number
	isAvailable: boolean
	isCompatible: boolean
	compatibility: string[]
}
