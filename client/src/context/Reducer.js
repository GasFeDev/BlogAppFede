const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        /* 
        isFetching- se refiere a una consulta que está en curso para la combinación determinada de punto final + parámetro de consulta, pero no necesariamente por primera vez. Los datos pueden estar disponibles a partir de una solicitud anterior realizada por este enlace, tal vez con el parámetro de consulta anterior.
        Cuando es verdadero, indica que la consulta se está recuperando actualmente, pero podría tener datos de una solicitud anterior. Esto será true tanto para la primera solicitud disparada como para las solicitudes posteriores. */
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload /* En los reductores dentro de la caja del interruptor, manejaremos el tipo de acción y actualizaremos la aplicación con action.payload */,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "UPDATE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;
