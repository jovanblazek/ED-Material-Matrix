interface Ingredient {
  Name: string;
  Size: number;
}

interface Effect {
  Effect: string;
  Property: string;
  IsGood: boolean;
}

interface Blueprint {
  Type: string;
  Name: string;
  Engineers: string[];
  Ingredients: Ingredient[];
  Effects?: Effect[]; // No effects means synthesis
  Grade?: number;
  CoriolisGuid?: string;
}

export type { Blueprint, Ingredient, Effect }; 