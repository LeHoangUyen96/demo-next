import { users } from '../../../constant/users';
import { UsersData } from '../../../helpers/type';
import { usersAction } from '../type_action/users_type_action';

const initialState: UsersData = {
  list: users,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type){
    case usersAction.GET_LIST_USERS:
      return {
        ...state,
        list: state.list,
      };
    default:
      return state;
  }
};
