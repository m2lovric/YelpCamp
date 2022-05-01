import { Timestamp, DocumentData } from 'firebase/firestore';

type commentsT = [{ name: string; comment: string; time: Timestamp }];

export interface campground extends DocumentData {
  id: number;
  name: string;
  description: string;
  shortDesc: string;
  price: number;
  imageUrl: string;
  comments: commentsT;
}
