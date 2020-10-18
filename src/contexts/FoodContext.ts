import React, { createContext } from 'react';
import IFood from '../types/IFood';

interface IContext {
    foodList: IFood[];
    setFoodList: React.Dispatch<React.SetStateAction<IFood[]>>
}

export const FoodContext = createContext({} as IContext);
