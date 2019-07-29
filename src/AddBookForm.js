import React from 'react';
import { 
	useState,
	useContext,
} from 'react';
import { StoreContext } from './Store';

function AddBookForm() {
	const { state, dispatch } = useContext(StoreContext); // eslint-disable-line
	const [title, setTitle] = useState('Title');
	const [author, setAuthor] = useState('Author');
	const [isbn, setISBN] = useState('0');

	const addBook = (e) => {
		e.preventDefault();
		dispatch({ action: 'ADD', payload: { title: title, author: author, isbn: isbn } });
	};

	return (
		<form>
	        <label>
	          Title:
	          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
	        </label>
	        <label>
	          Author:
	          <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
	        </label>
	        <label>
	          ISBN:
	          <input type="text" value={isbn} onChange={e => setISBN(e.target.value)} />
	        </label>
	        <button onClick={addBook}>Submit</button>
	    </form>
    )
}

export default AddBookForm;