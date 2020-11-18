import React, { createContext, useContext, useReducer } from 'react';

// ? Prepared the data layer

export const Context = createContext();

// ? wrapping data into data layer

export const StateProvider = ({children , reducer , initialState}) =>(
    <Context.Provider value={useReducer(reducer , initialState)}>
        {children}
    </Context.Provider>
)

// ? pull information from the data layer

export const useStateValue = () => useContext(Context);