export default function reducer (state, action) {
  console.log(action);
  switch (action.type) {
    case "FETCH_DATA_SOF":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
