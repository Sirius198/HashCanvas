
export interface IStrategiesData {
  id: number
  status: string
  title: string
  abstractDescription: string
  fullDescription: string
  sourceURL: string
  imageURL: string
  chartURL: string
  timestamp: string | number
  parameters: string[]
  symbols: string[]
  timeframes: string[]
  order: number
  author: string
  pageviews: number
  subscribers: number
}


export interface IArticleData {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: string | number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}

export interface IRoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface ITransactionData {
  orderId: string
  timestamp: string | number
  username: string
  price: number
  status: string
}

export interface IUserData {
  id: number
  username: string
  nickname: string
  password: string
  name: string
  email: string
  phone: string
  avatar: string
  introduction: string
  roles: string[]
}
