import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { articleId } = useParams();

  return (
    <div>
      article {articleId}
    </div>
  )
}

export default ArticleDetail