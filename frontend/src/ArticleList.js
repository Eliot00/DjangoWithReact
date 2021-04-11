import React, { Component } from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

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
      .then(result => this.setState({ articleList: result }))
      .catch(e => console.error(e));
  }

  render() {
    const { articleList } = this.state;
    return (
      Array.isArray(articleList) && articleList.length !== 0
        ?
        <div className="font-sans">
          {articleList.map(item =>
            <div key={item.id} className="py-3">
              <div className="text-2xl font-semibold">{item.title}</div>
              <div className="space-x-2">
                <span>创建时间：<time title={item.created}>{dayjs().to(dayjs(item.created))}</time></span>
                <span>更新时间：<time title={item.updated}>{dayjs().to(dayjs(item.updated))}</time></span>
              </div>
            </div>
          )}
        </div>
        :
        <div>Loading</div>
    );
  }

}

export default ArticleList;