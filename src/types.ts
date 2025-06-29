interface Ingredient {
  Name: string
  Size: number
}

interface Effect {
  Effect: string
  Property: string
  IsGood: boolean
}

type Engineer =
  | 'Baltanos'
  | 'Bill Turner'
  | 'Bris Dekker'
  | 'Broo Tarquin'
  | 'Chloe Sedesi'
  | 'Didi Vatermann'
  | 'Domino Green'
  | 'Eleanor Bresa'
  | 'Elvira Martuuk'
  | 'Etienne Dorn'
  | 'Felicity Farseer'
  | 'Hera Tani'
  | 'Hero Ferrari'
  | 'Ishmael Palin'
  | 'Jude Navarro'
  | 'Juri Ishmaak'
  | 'Kit Fowler'
  | 'Lei Cheung'
  | 'Liz Ryder'
  | 'Lori Jameson'
  | 'Marco Qwent'
  | 'Marsha Hicks'
  | 'Mel Brandon'
  | 'Oden Geiger'
  | 'Petra Olmanova'
  | 'Ram Tah'
  | 'Rosa Dayette'
  | 'Selene Jean'
  | 'Terra Velasquez'
  | 'The Dweller'
  | 'The Sarge'
  | 'Tiana Fortune'
  | 'Tod "The Blaster" McQuinn'
  | 'Uma Laszlo'
  | 'Wellington Beck'
  | 'Yarden Bond'
  | 'Yi Shen'
  | 'Zacariah Nemo'

type BlueprintType =
  | 'Engineer'
  | 'Unlock'
  | 'Technology'
  | 'Synthesis'
  | 'Merchant'

interface Blueprint {
  Type: string
  Name: string
  Engineers: string[]
  Ingredients: Ingredient[]
  Effects?: Effect[] // No effects means synthesis
  Grade?: number // No grade means tech broker unlock for example
  CoriolisGuid?: string
  id: string
  type: BlueprintType
}

export type { Blueprint, BlueprintType, Ingredient, Effect }
