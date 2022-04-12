import React, { useEffect } from 'react';
import BookListItem from '../book-list-item';

import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import { connect } from 'react-redux';
import './book-list.css';


const BookList = ({books, loading, error, fetchBooks}) => {
  useEffect(() => fetchBooks(), [])
  
  if(loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>Error...</h1>
  }

  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}><BookListItem book={book}/></li>
          )
        })
      }
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { fetchBooks: () => fetchBooks(dispatch, ownProps.bookstoreService)}
}


export default withBookstoreService(
  connect(mapStateToProps,mapDispatchToProps)(BookList)
)
