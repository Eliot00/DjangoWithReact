import React, {Component} from "react";

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
      console.log(this.state.articleList)
      return (
      <div>
        {this.state.articleList.map(item =>
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>
              <strong>{item.body}</strong>
              <br/>
              <em>创建时间：{item.created}</em>
              <em>更新时间：{item.updated}</em>
            </p>
          </div>
        )}
      </div>
    );
  }

}

export default ArticleList;