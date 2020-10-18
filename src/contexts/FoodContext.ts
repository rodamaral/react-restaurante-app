import React, { createContext } from 'react';
import IFood from '../types/IFood';

interface IContext {
    foodList: IFood[];
    setFoodList: React.Dispatch<React.SetStateAction<IFood[]>>;
    deleteFood: any; // FIXME
    editFood: any; // FIXME
    onSelectFood: React.Dispatch<React.SetStateAction<any>>; // FIXME
}

export const FoodContext = createContext({} as IContext);
