import { types } from '../types/types';

/* 
  {
      uid: 132q4easfsdasd
      name: jorge
  }
*/
export const authReducer = (state = {},action) => {
    switch (action.type) {
        case types.login:            
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

            case types.logout:           
            return { }

        
    
        default:
            return state;
    }
}
  
