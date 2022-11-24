import './App.css';
import { useEffect, useState } from 'react';
import { Discussions } from './Components/Discussions';
import { Form } from './Components/Form'; 
import { Pagination } from './Components/Pagination';

function App() {
  const [discussions, setDiscussions] = useState([]); 
  const [limit, setLimit] = useState(10);   // limit: 페이지 당 게시물 수
  const [page, setPage] = useState(1);      // page: 현재 페이지 번호
  const offset = (page - 1) * limit;        // 첫게시물의 위치

  useEffect(() => {
    fetch('http://localhost:4000/discussions')
      .then(res => res.json())
      .then(data => {
        setDiscussions(data);
      })
  }, []);

  return (
    <>
      <Form />
      <Discussions discussions={discussions.slice(offset, offset + limit)}></Discussions>
      <Pagination total={discussions.length} limit={limit} page={page} setPage={setPage} />
    </>
  );
}

export default App;

