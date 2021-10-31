import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ArticleDetail = () => {
  const { articleId } = useParams();
  const [body, setBody] = useState('');

  useEffect(() => {
    fetch(`/api/articles/${articleId}`)
      .then(response => response.json())
      .then(result => setBody(result.body))
      .catch(console.error);
  }, []);

  return (
    <main>
      <div className="m-2 text-center">{body}</div>
    </main>
  )
}

export default ArticleDetail
