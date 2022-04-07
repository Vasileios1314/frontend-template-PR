const initialState = {
  loading: false,
  allSpaces: [],
  space: null,
};

export default function SpaceReducer(state = initialState, action) {
  console.log("two", action);
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_SPACES":
      return {
        ...state,
        loading: false,
        allSpaces: action.payload,
      };
    case "SET_SPACE_DETAILS":
      return {
        ...state,
        loading: false,
        space: action.payload.space,
      };
    default: {
      return state;
    }
  }
}
