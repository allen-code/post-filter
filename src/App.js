import React, { Component } from 'react';
import Loader from 'react-loader';
import logo from './logo.svg';
import './App.css';

// components and containers
import PostItem from './components/post';
import AlphabetGroup from './containers/alphabet_group';

// utils
import {store} from './store/store';
import {connect} from 'react-redux';
import {fetchPosts} from './actions/post_actions';

class App extends Component {

  constructor(props)
  {
    super(props);
    store.dispatch(fetchPosts())
  }

  render() {
    const posts = this.props.postsReducer.posts;
    let PostItems, Posts, PostCollection;

    // handle selecting specific post
    const handleSorter = arr =>
    {
      arr.sort((a, b) =>
      {
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
      })
      return arr;
    }

    // fitler an array by property name alphabetically
    const filterAlphabetical = (array, propertyName) =>
    {
      let groupedCollection = {}
      for (let i = 0; i < array.length; i++)
      {
        let firstChar = array[i][propertyName].charAt(0);
        if (groupedCollection[firstChar] == undefined)
        {
          groupedCollection[firstChar] = [];
        }
        groupedCollection[firstChar].push(array[i])
      }
      return groupedCollection;
    }

    if (posts)
    {
      PostItems = [];
      Posts = [];
      Object.keys(posts).map(postKey =>
      {
        Posts.push(posts[postKey])
      })
      Posts = handleSorter(Posts);
      PostCollection = filterAlphabetical(Posts, 'title');
      Object.keys(PostCollection).forEach(postKey =>
      {
        PostItems.push(<AlphabetGroup
          key={postKey}
          label={postKey}
          postArray={PostCollection[postKey]}
        />)
      })
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Loader loaded={!this.props.fetching}>
            {PostItems ? PostItems : ''}
          </Loader>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {return {...state}}

export default connect(mapStateToProps)(App);
