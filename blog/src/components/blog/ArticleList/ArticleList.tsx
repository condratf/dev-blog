import { FC } from 'react'
// types
import { Article } from '@/types'
// styles
import styles from './styles.module.scss'

type ArticleListProps = {
  articles: Array<{ id: string | number, attributes: Article }>
}

export const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className={styles.container}>
      {articles.map(({ id, attributes: { title, text } }) => (
        <div key={id}>
          <p>{title}</p>
        </div>
      ))}
    </div>
  )
}
