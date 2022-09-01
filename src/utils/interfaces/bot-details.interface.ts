export interface IBotDetails {
  name: string;
  shortName: string;
  image: string;
  culture: string;
  type: string;
  created: string;
  description: string;
  analytics: {
    user: {
      total: number;
      actived: number;
    };
    message: {
      received: number;
      sent: number;
    };
  };
}
