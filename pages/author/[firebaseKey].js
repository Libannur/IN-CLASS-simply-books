import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

function ViewAuthor() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  const [authorDetails, setAuthorDetails] = useState({});
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then((authorObj) => {
      setAuthorDetails(authorObj);
      setBookDetails(authorObj.books);
    });
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={authorDetails.image} alt={authorDetails.last_name} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {authorDetails.first_name} {authorDetails.last_name} {authorDetails.favorite ? ' 🤍' : ''}
          </h5>
          Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
          <p>{authorDetails.description || ''}</p>
          <hr />
        </div>
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        {bookDetails.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} />
        ))}
      </div>
    </>
  );
}

export default ViewAuthor;
