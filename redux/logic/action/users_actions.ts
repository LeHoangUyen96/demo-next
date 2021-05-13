import { usersAction } from '../type_action/users_type_action';

export const getListUsers = () => {
  return {
    type: usersAction.GET_LIST_USERS,
  };
};
