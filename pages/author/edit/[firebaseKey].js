import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthorForm from '../../../components/forms/AuthorForm';
import { getSingleAuthor } from '../../../api/authorData';

function EditSingleAuthor() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // DONE: grab the firebasekey
  const { firebaseKey } = router.query;

  // DONE: make a call to the API to get the author data
  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // DONE: pass object to form
  return (<AuthorForm obj={editItem} />);
}

export default EditSingleAuthor;
