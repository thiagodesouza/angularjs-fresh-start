class UserItem {
  constructor(id, name, login, avatar, bio, url, repos, followers) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.avatar = avatar;
    this.bio = bio;
    this.url = url;
    this.repos = repos;
    this.followers = followers;
  }
}

class UserList {
  constructor() {
    this.data = [];
  }

  get storageId() {
    return '@app/users';
  }

  static ADD_USER(state, payload) {
    const data = [
      new UserItem(
        payload.id,
        payload.name,
        payload.login,
        payload.avatar_url,
        payload.bio,
        payload.html_url,
        payload.public_repos,
        payload.followers,
      ),
      ...state.data,
    ];

    const newState = Object.assign(new UserList(), state, { data });
    localStorage.setItem(state.storageId, JSON.stringify(newState));

    return newState;
  }
}

function getUsersState(state) {
  const data = JSON.parse(localStorage.getItem(state.storageId));
  if (data) {
    return Object.assign(state, { data });
  }
  return state;
}

function createUsersReducer() {
  return (state, action) => {
    if (!state) return getUsersState(new UserList());

    if (action.type in UserList) {
      return UserList[action.type](state, action.data);
    }
    
    return state;
  };
}

export default createUsersReducer();
