// src/pages/pageContext.ts
import { createContext } from 'react';

// O tipo de pageContext pode ser mais específico, mas any serve para começar
export const PageContext = createContext<any>(undefined);