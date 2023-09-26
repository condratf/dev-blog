import { FC } from 'react'
// local
import { ArticleList } from '@/components/blog'
import { fetcher } from '@/lib'
// styles
import styles from './styles.module.scss'
// types
import { StrapiPaginatedResponse, Article } from '@/types'

async function getData() {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles`
  const res = await fetcher<StrapiPaginatedResponse<Article>>(url)
  return res
}

const Blog: FC = async () => {
  const { data } = await getData()
  return (
    <div className={styles.container}>
      <h2> Blog </h2>

      <ArticleList articles={data} />
    </div>
  )
}

export default Blog