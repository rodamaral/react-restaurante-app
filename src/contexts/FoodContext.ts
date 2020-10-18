import React, { createContext } from 'react';
import IFood from '../types/IFood';

interface IContext {
    foodList: IFood[];
    setFoodList: React.Dispatch<React.SetStateAction<IFood[]>>;
    deleteFood: any; // FIXME
    editFood: any; // FIXME
    id: number | undefined;
    // setId: React.Dispatch<React.SetStateAction<number | undefined>>;
    onSelectFood: any;
}

export const FoodContext = createContext({} as IContext);
