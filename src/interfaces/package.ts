export interface IPackage {
  package: {
    name: string;
    description: string;
    category: string;
    optional: boolean;
  };
  dependencies?: string[];
  extras?: Record<string, unknown>;
}
