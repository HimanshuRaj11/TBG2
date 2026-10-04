export type ItemKind = 'Jobs' | 'Hackathons' | 'Events' | 'Startups' | 'People';

export interface BaseItem {
  id: string;
  kind: ItemKind;
  title: string;
  tags: string[];
}

export interface JobItem extends BaseItem {
  kind: 'Jobs';
  org: string;
  loc: string;
  type: string;
  pay: string;
  exp: string;
  remote: number; // 0 or 1
}

export interface HackathonItem extends BaseItem {
  kind: 'Hackathons';
  org: string;
  prize: string;
  mode: string;
  loc: string;
  date: string;
}

export interface EventItem extends BaseItem {
  kind: 'Events';
  org: string;
  type: string;
  loc: string;
  date: string;
}

export interface StartupItem extends BaseItem {
  kind: 'Startups';
  desc: string;
  ind: string;
  stage: string;
  loc: string;
}

export interface PersonItem extends BaseItem {
  kind: 'People';
  role: string;
  loc: string;
}

export type DirectoryItem = JobItem | HackathonItem | EventItem | StartupItem | PersonItem;

export interface VerticalData {
  n: string;
  c: string;
  t: string;
  d: string;
  o: string[];
  s: string;
  e: string;
  x: [string, string];
  cta: string;
}

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  loc: string;
  skills: string[];
}

export interface CommunityPost {
  tag: string;
  author: string;
  content: string;
  time?: string;
  role?: string;
  likesCount?: number;
}

export interface DetailedPerson {
  name: string;
  role: string;
  title: string;
  skills: string[];
}

export interface Investor {
  name: string;
  type: string;
  focus: string[];
}
