export type ITasks = {
  id: string;
  name: string;
  description: string;
  isComplete: boolean;
  endDate: string;
  priority: "High" | "Medium" | "Low";
};
