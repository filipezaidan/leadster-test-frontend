export type VideoCategoryType =
  | "Agências"
  | "Chatbot"
  | "Marketing Digital"
  | "Mídia Paga";

type VideoType = {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  category: VideoCategoryType;
};

export const VideoLimitPage = 9;

export const VideoCategories: VideoCategoryType[] = [
  "Agências",
  "Chatbot",
  "Marketing Digital",
  "Mídia Paga",
];

export const VideosMock: VideoType[] = [
  {
    id: "0be6c0e1-96a9-4e2d-bc38-7d16a4a259d1",
    title: "Video 1",
    date: "2022-01-01",
    thumbnail: "/thumbnail.png",
    category: "Agências",
  },
  {
    id: "243a7c62-86ad-4d76-958c-1179f184b1de",
    title: "Video 2",
    date: "2022-02-15",
    thumbnail: "/thumbnail.png",
    category: "Agências",
  },
  {
    id: "a3a7883a-8742-4596-aa59-9c4ab42bb8e4",
    title: "Video 3",
    date: "2022-03-10",
    thumbnail: "/thumbnail.png",
    category: "Chatbot",
  },
  {
    id: "8e9fb56d-0627-4b0f-9f62-14b8ef106693",
    title: "Video 4",
    date: "2022-04-20",
    thumbnail: "/thumbnail.png",
    category: "Chatbot",
  },
  {
    id: "4f3b8b09-6949-4a09-b2b0-0e6ccce3db64",
    title: "Video 5",
    date: "2022-05-05",
    thumbnail: "/thumbnail.png",
    category: "Marketing Digital",
  },
  {
    id: "5f7c9c37-2b99-4740-90d9-0c726d79f5f9",
    title: "Video 6",
    date: "2022-06-30",
    thumbnail: "/thumbnail.png",
    category: "Marketing Digital",
  },
  {
    id: "20b329c4-16d2-4c47-8e1a-84b38a1f6353",
    title: "Video 7",
    date: "2022-07-12",
    thumbnail: "/thumbnail.png",
    category: "Mídia Paga",
  },
  {
    id: "9640ed1b-0760-464f-83f4-52c4d6355e24",
    title: "Video 8",
    date: "2022-08-25",
    thumbnail: "/thumbnail.png",
    category: "Mídia Paga",
  },
  {
    id: "eb225cd3-4e25-4e2f-8af5-4dcbcd894e0d",
    title: "Video 9",
    date: "2022-09-05",
    thumbnail: "/thumbnail.png",
    category: "Agências",
  },
  {
    id: "0be6c0e1-96a9-4e2d-bc38-7d16a4a259d1",
    title: "Video 10",
    date: "2022-01-01",
    thumbnail: "/thumbnail.png",
    category: "Agências",
  },
  {
    id: "243a7c62-86ad-4d76-958c-1179f184b1de",
    title: "Video 11",
    date: "2022-02-15",
    thumbnail: "/thumbnail.png",
    category: "Agências",
  },
  {
    id: "a3a7883a-8742-4596-aa59-9c4ab42bb8e4",
    title: "Video 12",
    date: "2022-03-10",
    thumbnail: "/thumbnail.png",
    category: "Chatbot",
  },
  {
    id: "8e9fb56d-0627-4b0f-9f62-14b8ef106693",
    title: "Video 13",
    date: "2022-04-20",
    thumbnail: "/thumbnail.png",
    category: "Chatbot",
  },
  {
    id: "4f3b8b09-6949-4a09-b2b0-0e6ccce3db64",
    title: "Video 14",
    date: "2022-05-05",
    thumbnail: "/thumbnail.png",
    category: "Marketing Digital",
  },
  {
    id: "5f7c9c37-2b99-4740-90d9-0c726d79f5f9",
    title: "Video 15",
    date: "2022-06-30",
    thumbnail: "/thumbnail.png",
    category: "Marketing Digital",
  },
  {
    id: "20b329c4-16d2-4c47-8e1a-84b38a1f6353",
    title: "Video 16",
    date: "2022-07-12",
    thumbnail: "/thumbnail.png",
    category: "Mídia Paga",
  },
  {
    id: "9640ed1b-0760-464f-83f4-52c4d6355e24",
    title: "Video 17",
    date: "2022-08-25",
    thumbnail: "/thumbnail.png",
    category: "Mídia Paga",
  },
  {
    id: "eb225cd3-4e25-4e2f-8af5-4dcbcd894e0d",
    title: "Video 18",
    date: "2022-09-05",
    thumbnail: "/thumbnail.png",
    category: "Agências",
  },
  {
    id: "5e8a6790-718d-4f11-87e0-235b169f1d3a",
    title: "Video 19",
    date: "2022-10-15",
    thumbnail: "/thumbnail.png",
    category: "Mídia Paga",
  },
  {
    id: "0be6c0e1-96a9-4e2d-bc38-7d16a4a259d1",
    title: "Video 20",
    date: "2022-01-01",
    thumbnail: "/thumbnail.png",
    category: "Agências",
  },
  {
    id: "243a7c62-86ad-4d76-958c-1179f184b1de",
    title: "Video 21",
    date: "2022-02-15",
    thumbnail: "/thumbnail.png",
    category: "Agências",
  },
  {
    id: "a3a7883a-8742-4596-aa59-9c4ab42bb8e4",
    title: "Video 22",
    date: "2022-03-10",
    thumbnail: "/thumbnail.png",
    category: "Chatbot",
  },
  {
    id: "8e9fb56d-0627-4b0f-9f62-14b8ef106693",
    title: "Video 23",
    date: "2022-04-20",
    thumbnail: "/thumbnail.png",
    category: "Chatbot",
  },
  {
    id: "4f3b8b09-6949-4a09-b2b0-0e6ccce3db64",
    title: "Video 24",
    date: "2022-05-05",
    thumbnail: "/thumbnail.png",
    category: "Marketing Digital",
  },
  {
    id: "5f7c9c37-2b99-4740-90d9-0c726d79f5f9",
    title: "Video 25",
    date: "2022-06-30",
    thumbnail: "/thumbnail.png",
    category: "Marketing Digital",
  },
  {
    id: "20b329c4-16d2-4c47-8e1a-84b38a1f6353",
    title: "Video 26",
    date: "2022-07-12",
    thumbnail: "/thumbnail.png",
    category: "Mídia Paga",
  },
  {
    id: "9640ed1b-0760-464f-83f4-52c4d6355e24",
    title: "Video 27",
    date: "2022-08-25",
    thumbnail: "/thumbnail.png",
    category: "Mídia Paga",
  },
  {
    id: "eb225cd3-4e25-4e2f-8af5-4dcbcd894e0d",
    title: "Video 28",
    date: "2022-09-05",
    thumbnail: "/thumbnail.png",
    category: "Agências",
  },
  {
    id: "5e8a6790-718d-4f11-87e0-235b169f1d3a",
    title: "Video 29",
    date: "2022-10-15",
    thumbnail: "/thumbnail.png",
    category: "Chatbot",
  },
];
