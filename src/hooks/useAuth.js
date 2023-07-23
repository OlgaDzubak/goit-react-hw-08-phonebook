import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn, selectIsRefreshing,} from 'redux/auth/selectors';  //

export const useAuth = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);      // забираємо зі state значення isLoggedIn
  const isRefreshing = useSelector(selectIsRefreshing);  // забираємо зі state значення isRefreshing
  const user = useSelector(selectUser);                  // забираємо зі state дані про юзера

  return { isLoggedIn, isRefreshing, user, };            // повертаємо об'єкт із даними про аутентифікацію юзера
};