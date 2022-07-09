export interface Listing<T> {
    "hydra:member": T[];
    "hydra:totalItems": number;
    "hydra:view": {
      "hydra:first": string;
      "hydra:last": string;
      "hydra:previous": string | undefined;
      "hydra:next": string | undefined;
    };
  }