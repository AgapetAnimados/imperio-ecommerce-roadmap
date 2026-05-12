export enum StudentLevel {
  BEGINNER = 'BEGINNER',
  ADVANCED = 'ADVANCED'
}

export interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  videoUrl: string;
  isHighlight?: boolean;
}

export interface UserProfile {
  name: string;
  level: StudentLevel;
}
