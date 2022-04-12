const booksRequested = () => ({
    type: 'BOOKS_REQUESTED'
})

const booksLoaded = (books) => ({
    type: 'BOOKS_LOADED',
    payload: books,
})

const booksError = () => ({
    type: 'BOOKS_ERROR'
})

const fetchBooks = (dispatch, bookstoreService) => {
    dispatch(booksRequested())
      bookstoreService.getBooks().then(books => {
        dispatch(booksLoaded(books))
      }).catch(err => {
        dispatch(booksError())
      })
}

export {fetchBooks}