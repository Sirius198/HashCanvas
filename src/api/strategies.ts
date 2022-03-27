import request from '@/utils/request'
import { IStrategiesData } from './types'

export const defaultArticleData: IStrategiesData = {
  id: 1,
  status: 'draft',
  title: '',
  abstractDescription: '',
  fullDescription: '',
  parameters: [''],
  timeframes: [''],
  symbols: [''],
  chartURL: '',
  sourceURL: '',
  imageURL: '',
  timestamp: '',
  order: 0,
  author: '',
  subscribers:0,
  pageviews: 0
}

export const getStrategies = (params: any) =>
  request({
    url: '/strategies',
    method: 'get',
    params
  })

export const getStrategy = (id: number, params: any) =>
  request({
    url: `/strategies/${id}`,
    method: 'get',
    params
  })

export const createStrategy = (data: any) =>
  request({
    url: '/strategies',
    method: 'post',
    data
  })

export const updateStrategy = (id: number, data: any) =>
  request({
    url: `/strategies/${id}`,
    method: 'put',
    data
  })

export const deleteStrategy = (id: number) =>
  request({
    url: `/strategies/${id}`,
    method: 'delete'
  })

export const getStrategiesPageviews = (params: any) =>
  request({
    url: '/strategypageviews',
    method: 'get',
    params
  })
