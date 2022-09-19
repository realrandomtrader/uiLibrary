
export type Member = {
    itemId: number;
    userId: string;
    joinDate?: string;
    picture?: string;
  };
  
  export type Status = 'ongoing' | 'proposed';
  
  export type Size = 'small' | 'medium' | 'large';
  
  export type BazaarProject = {
    name: string;
    id: number;
    entityRef?: string;
    community: string;
    status: Status;
    description: string;
    updatedAt?: string;
    membersCount: number;
    size: Size;
    startDate?: string | null;
    endDate?: string | null;
    responsible: string;
  };
  
  export type FormValues = {
    name: string;
    description: string;
    community: string;
    status: string;
    size: Size;
    startDate?: string | null;
    endDate?: string | null;
    responsible: string;
  };