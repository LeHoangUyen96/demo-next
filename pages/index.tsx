import Link from 'next/link';
import Footer from '../components/footer';
import React, { Dispatch, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from '../redux/logic/actions';
import { AppState } from '../redux/reducers_registration';

function Home() {
  const dispatch = useDispatch();
    const count = useSelector((state: AppState) => state.count);
    useEffect(() => {
      dispatch(decrementCounter());
      dispatch(incrementCounter());
    }, []);
    
    const handleIncrement = () => {
      dispatch(decrementCounter());
    }
    const handleDecrement = () => {
      dispatch(incrementCounter());
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
    </>
  );
}
export default Home;