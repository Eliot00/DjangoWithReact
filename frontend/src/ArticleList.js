import React, {Component} from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn"
import relativeTime from "dayjs/plugin/relativeTime"
import {Link} from "react-router-dom";

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

const ArticleItem = props => {
  const {title, created, updated, id} = props.item;

  return (
    <div className="py-3">
      <Link to={`/articles/${id}`}>
        <div className="text-2xl font-semibold">{title}</div>
      </Link>
      <div className="space-x-2">
        <span>创建时间：<time title={created}>{dayjs().to(dayjs(created))}</time></span>
        <span>更新时间：<time title={updated}>{dayjs().to(dayjs(updated))}</time></span>
      </div>
    </div>
  )
}

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
    }
  }

  componentDidMount() {
    fetch('/api/articles/')
      .then(response => response.json())
      .then(result => this.setState({articleList: result}))
      .catch(e => console.error(e));
  }

  render() {
    const {articleList} = this.state;
    return (
      Array.isArray(articleList) && articleList.length !== 0
        ?
        <div className="font-sans">
          {articleList.map(item =>
            <ArticleItem key={item.id} item={item}/>
          )}
        </div>
        :
        <div>Loading</div>
    );
  }

}

export default ArticleList;