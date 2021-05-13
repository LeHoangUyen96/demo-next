import Link from 'next/link';
import Footer from '../components/footer';
import React, { Dispatch, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from '../redux/logic/action/counter_actions';
import { AppState } from '../redux/reducers_registration';
import { getListUsers } from '../redux/logic/action/users_actions';

function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state: AppState) => state.count);
  const users = useSelector((state: AppState) => state.users.list);

  useEffect(()=>{
    dispatch(getListUsers());
  }, [users]);

  const handleIncrement = () => {
    dispatch(decrementCounter());
  }
  const handleDecrement = () => {
    dispatch(incrementCounter());
  }

  function onSearchText(text) {
    let filtered;
    if (text) {
      filtered = users.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      filtered = users;
    }
    getListUsers();
  }

  const generateUsers = () => {
    return (
      <>
        <h3>List users</h3>
        <ol>
          {users.map((item) => {
            return <li key={item.id}>{item.name} {item.age}</li>
          })}
        </ol>
      </>
    );
  }
    
  return (
    <>
      <p>Hello World</p>
      <h2>Welcom to Nextjs</h2>
      <ul>
        <li>
          <Link href= '/'><a>Home</a></Link>
        </li>
        <li>
        <Link href= '/about'><a>About</a></Link>
        </li>
        <li>
        <Link href= '/information'><a>Information</a></Link>
        </li>
      </ul>
      <Footer></Footer>
      <button onClick={handleDecrement}> - </button>
      { count.value }
      <button onClick={handleIncrement}> + </button>
      {generateUsers()}
    </>
  );
}
export default Home;