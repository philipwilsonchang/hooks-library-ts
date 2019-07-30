import React from 'react';

import AddBookForm from './AddBookForm';
import BooksTable from './BooksTable';
import Store from './Store';

const App = () => {
  return (
    <Store>
      <div className="container">
        <h1>CRUD Library App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add Book</h2>
              <AddBookForm />
          </div>
          <div className="flex-large">
            <h2>View Books</h2>
              <BooksTable />
          </div>
        </div>
      </div>
    </Store>
  )
}

export default App;