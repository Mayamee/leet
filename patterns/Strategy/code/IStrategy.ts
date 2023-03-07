export interface IStrategy {
  authenticate(args: any[]): boolean;
}
