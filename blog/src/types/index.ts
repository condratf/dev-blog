type Pagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type StrapiPaginatedResponse<T> = {
  data: Array<{id: number, attributes: T}>
  meta: {
    pagination: Pagination
  }
}

export type Article = {
  title: string
  text: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}