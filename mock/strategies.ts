import faker from 'faker'
import { Response, Request } from 'express'
import { IStrategiesData } from '../src/api/types'

const strategiesList: IStrategiesData[] = []
const strategiesCount = 8
const mockFullContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'

strategiesList.push({
  id: 1,
  status: 'published',
  title: 'Tom Demark',
  abstractDescription: faker.lorem.sentences(2),
  fullDescription: faker.lorem.sentences(2),
  parameters:['Tom Demark Alert number','num'],
  timeframes: (['Monthly', 'Weekly', '3Day','Daily','4 hour']),
  symbols: (['BTCUSD:Binance', 'Top10:Binance', 'ETHUSD:Binance', 'Bitmex:All']),
  chartURL: faker.internet.url(),
  sourceURL: faker.internet.url(),
  imageURL: faker.image.imageUrl(),
  timestamp: faker.date.past().getTime(),
  order: 1,
  author: faker.name.findName(),
  subscribers: faker.random.number({ min: 700, max: 8000}),
  pageviews: 0
})

strategiesList.push({
  id: 2,
  status: 'published',
  title: 'VWAP',
  abstractDescription: faker.lorem.sentences(2),
  fullDescription: faker.lorem.sentences(2),
  parameters: [],
  timeframes: (['Monthly', 'Weekly', '3Day','Daily','4 hour']),
  symbols: (['BTCUSD:Binance', 'Top10:Binance', 'ETHUSD:Binance', 'Bitmex:All']),
  chartURL: faker.internet.url(),
  sourceURL: faker.internet.url(),
  imageURL: faker.image.imageUrl(),
  timestamp: faker.date.past().getTime(),
  order: 2,
  author: faker.name.findName(),
  subscribers: faker.random.number({ min: 700, max: 8000}),
  pageviews: 0
})

strategiesList.push({
  id: 3,
  status: 'published',
  title: 'EMA/MA Flip',
  abstractDescription: faker.lorem.sentences(2),
  fullDescription: faker.lorem.sentences(2),
  parameters: ['Moving Average 1','enum','Value 1','number','Moving Average 2','enum','Value 2','number'],
  timeframes: (['Monthly', 'Weekly', '3Day','Daily','4 hour']),
  symbols: (['BTCUSD:Binance', 'Top10:Binance', 'ETHUSD:Binance', 'Bitmex:All']),
  chartURL: faker.internet.url(),
  sourceURL: faker.internet.url(),
  imageURL: faker.image.imageUrl(),
  timestamp: faker.date.past().getTime(),
  order: 3,
  author: faker.name.findName(),
  subscribers: faker.random.number({ min: 700, max: 8000}),
  pageviews: 0
})

strategiesList.push({
  id: 4,
  status: 'published',
  title: 'MACD Cross',
  abstractDescription: faker.lorem.sentences(2),
  fullDescription: faker.lorem.sentences(2),
  parameters: (['Fast Length', '12', 'Short Length', '26','Source', 'Close','Signal Smoothing', '9']),
  timeframes: (['Monthly', 'Weekly', '3Day','Daily','4 hour']),
  symbols: (['BTCUSD:Binance', 'Top10:Binance', 'ETHUSD:Binance', 'Bitmex:All']),
  chartURL: faker.internet.url(),
  sourceURL: faker.internet.url(),
  imageURL: faker.image.imageUrl(),
  timestamp: faker.date.past().getTime(),
  order: 4,
  author: faker.name.findName(),
  subscribers: faker.random.number({ min: 700, max: 8000}),
  pageviews: 0
})

strategiesList.push({
  id: 5,
  status: 'published',
  title: 'RSI Divergence',
  abstractDescription: faker.lorem.sentences(2),
  fullDescription: faker.lorem.sentences(2),
  parameters: (['RSI Length', '14', 'Source','close']),
  timeframes: (['Monthly', 'Weekly', '3Day','Daily','4 hour']),
  symbols: (['BTCUSD:Binance', 'Top10:Binance', 'ETHUSD:Binance', 'Bitmex:All']),
  chartURL: faker.internet.url(),
  sourceURL: faker.internet.url(),
  imageURL: faker.image.imageUrl(),
  timestamp: faker.date.past().getTime(),
  order: 5,
  author: faker.name.findName(),
  subscribers: faker.random.number({ min: 700, max: 8000}),
  pageviews: 0
})

strategiesList.push({
  id: 6,
  status: 'published',
  title: 'MACD Divergence',
  abstractDescription: faker.lorem.sentences(2),
  fullDescription: faker.lorem.sentences(2),
  parameters: (['Fast Length', '12', 'Short Length', '26','Source', 'Close','Signal Smoothing', '9']),
  timeframes: (['Monthly', 'Weekly', '3Day','Daily','4 hour']),
  symbols: (['BTCUSD:Binance', 'Top10:Binance', 'ETHUSD:Binance', 'Bitmex:All']),
  chartURL: faker.internet.url(),
  sourceURL: faker.internet.url(),
  imageURL: faker.image.imageUrl(),
  timestamp: faker.date.past().getTime(),
  order: 6,
  author: faker.name.findName(),
  subscribers: faker.random.number({ min: 700, max: 8000}),
  pageviews: 0
})

strategiesList.push({
  id: 7,
  status: 'published',
  title: 'Bollinger Bands',
  abstractDescription: faker.lorem.sentences(2),
  fullDescription: faker.lorem.sentences(2),
  parameters: (['Length', '20', 'Source','close','StDev','2','Offset','0']),
  timeframes: (['Monthly', 'Weekly', '3Day','Daily','4 hour']),
  symbols: (['BTCUSD:Binance', 'Top10:Binance', 'ETHUSD:Binance', 'Bitmex:All']),
  chartURL: faker.internet.url(),
  sourceURL: faker.internet.url(),
  imageURL: faker.image.imageUrl(),
  timestamp: faker.date.past().getTime(),
  order: 7,
  author: faker.name.findName(),
  subscribers: faker.random.number({ min: 700, max: 8000}),
  pageviews: 0
})


strategiesList.push({
  id: 8,
  status: 'published',
  title: 'HashCanvas Strat 1',
  abstractDescription: faker.lorem.sentences(2),
  fullDescription: faker.lorem.sentences(2),
  parameters: ([]),
  timeframes: (['Monthly', 'Weekly', '3Day','Daily','4 hour']),
  symbols: (['BTCUSD:Binance', 'Top10:Binance', 'ETHUSD:Binance', 'Bitmex:All']),
  chartURL: faker.internet.url(),
  sourceURL: faker.internet.url(),
  imageURL: faker.image.imageUrl(),
  timestamp: faker.date.past().getTime(),
  order: 8,
  author: faker.name.findName(),
  subscribers: faker.random.number({ min: 700, max: 8000}),
  pageviews: 0
})

export const getStrategies = (req: Request, res: Response) => {
  const { order, title, page = 1, limit = 20, sort } = req.query

  let mockList = strategiesList.filter(item => {
    if (order && item.order !== +order) return false
 //   if (type && item.type !== type) return false
    if (title && item.title.indexOf(title as string) < 0) return false
    return true
  })

  if (sort === '-id') {
    mockList = mockList.reverse()
  }

  const pageList = mockList.filter((_, index) => index < (limit as number) * (page as number) && index >= (limit as number) * (page as number - 1))

  return res.json({
    code: 20000,
    data: {
      total: mockList.length,
      items: pageList
    }
  })
}

export const getStrategy = (req: Request, res: Response) => {
  const { id } = req.params
  for (const strategy of strategiesList) {
    if (strategy.id.toString() === id) {
      return res.json({
        code: 20000,
        data: {
          strategy
        }
      })
    }
  }
  return res.json({
    code: 70001,
    message: 'strategy not found'
  })
}

export const createStrategy = (req: Request, res: Response) => {
  const { strategy } = req.body
  return res.json({
    code: 20000,
    data: {
      strategy
    }
  })
}

export const updateStrategy = (req: Request, res: Response) => {
  const { id } = req.params
  const { strategy } = req.body
  for (const v of strategiesList) {
    if (v.id.toString() === id) {
      return res.json({
        code: 20000,
        data: {
          strategy
        }
      })
    }
  }
  return res.json({
    code: 70001,
    message: 'Strategy not found'
  })
}

export const deleteStrategy = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
  })
}

export const getStrategiesPageviews = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
    data: {
      pageviews: [
        { key: 'PC', pageviews: 1024 },
        { key: 'Mobile', pageviews: 1024 },
        { key: 'iOS', pageviews: 1024 },
        { key: 'Android', pageviews: 1024 }
      ]
    }
  })
}
