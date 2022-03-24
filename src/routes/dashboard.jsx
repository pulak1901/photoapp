import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/login/userSlice';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const name = useSelector(state => state.user.name)

  function button_logout(e) {
    dispatch(logout())
    navigate('/')
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>{name}</h2>
      <button onClick={button_logout}>Logout</button>
    </main>
  );
}
