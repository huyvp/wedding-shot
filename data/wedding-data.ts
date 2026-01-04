export interface FamilyMember {
  father: string;
  mother: string;
  address: string;
}

export interface Person {
  name: string;
  role: string;
  image: string;
  family: FamilyMember;
  hobby: string;
  zodiac: string;
  description: string;
}

export interface StoryPoint {
  time: string;
  title: string;
  content: string;
  fullStory: string;
}

export interface WeddingEvent {
  name: string;
  time: string;
  date: string;
  location: string;
  address: string;
  mapLink: string;
}

export interface WeddingData {
  hero: {
    title: string;
    subTitle: string;
    date: string;
  };
  groom: Person;
  bride: Person;
  timeline: StoryPoint[];
  events: WeddingEvent[];
  album: string[];
}

export const weddingData: WeddingData = {
  hero: {
    title: "HUY & NGA",
    subTitle: "HÀNH TRÌNH HẠNH PHÚC MỚI",
    date: "10 . 02 . 2026",
  },
  groom: {
    name: "NGUYỄN VĂN HUY",
    role: "CHÚ RỂ",
    image: "https://i.pravatar.cc/150?u=huy",
    family: {
      father: "Nguyễn Văn Ngọ",
      mother: "Nguyễn Thị Hội",
      address: "Vĩnh Hưng - Phú Thọ",
    },
    hobby: "Coding & Coffee",
    zodiac: "Ma Kết",
    description: "Một chàng trai kỹ thuật nhưng mang trái tim nghệ sĩ, luôn tin vào những điều tử tế."
  },
  bride: {
    name: "NGUYỄN THỊ THANH NGA",
    role: "CÔ DÂU",
    image: "https://i.pravatar.cc/150?u=nga",
    family: {
      father: "Nguyễn Danh Hùng",
      mother: "Nguyễn Thị Mai",
      address: "Hồng Lộc - Hà Tĩnh",
    },
    hobby: "Cooking & Yoga",
    zodiac: "Cự Giải",
    description: "Cô gái Hà Tĩnh dịu dàng nhưng đầy bản lĩnh, yêu âm nhạc và những bữa cơm gia đình."
  },
  timeline: [
    { 
      time: "2022", 
      title: "LẦN ĐẦU GẶP GỠ", 
      content: "Định mệnh mang chúng mình đến bên nhau.",
      fullStory: "Tình cờ gặp nhau trong một buổi chiều thu tại Hà Nội. Một ánh mắt chạm nhau, một nụ cười trao đi đã bắt đầu cho hành trình đầy màu sắc sau này."
    },
    { 
      time: "2023", 
      title: "LỜI TỎ TÌNH NGỌT NGÀO", 
      content: "Hai trái tim cùng hòa chung nhịp đập.",
      fullStory: "Tại quán cafe nhỏ quen thuộc, Huy đã lấy hết can đảm nói lời yêu. Câu trả lời của Nga là khởi đầu cho những chuyến đi xa và những kỷ niệm không thể nào quên."
    },
    { 
      time: "2025", 
      title: "LỜI CẦU HÔN", 
      content: "Đồng ý cùng anh đi đến tận cùng nhé?",
      fullStory: "Dưới bầu trời sao lung linh, Huy đã trao chiếc nhẫn ước hẹn. Nga đã gật đầu trong hạnh phúc, sẵn sàng cho một cuộc sống mới có nhau mỗi ngày."
    },
    { 
      time: "2026", 
      title: "LỄ THÀNH HÔN", 
      content: "Chính thức về chung một nhà.",
      fullStory: "Hôm nay, trước sự chứng kiến của gia đình và bạn bè, chúng mình chính thức gọi nhau là vợ chồng. Một chương mới đầy yêu thương chính thức bắt đầu."
    },
  ],
  events: [
    {
      name: "LỄ ĂN HỎI",
      time: "09:00 AM",
      date: "01/02/2026",
      location: "Tư gia nhà gái",
      address: "Hồng Lộc, Lộc Hà, Hà Tĩnh",
      mapLink: "https://maps.google.com"
    },
    {
      name: "TIỆC CƯỚI NHÀ NỮ",
      time: "10:30 AM",
      date: "09/02/2026",
      location: "Trung tâm tổ chức sự kiện Lộc Hà",
      address: "Lộc Hà, Hà Tĩnh",
      mapLink: "https://maps.google.com"
    },
    {
      name: "TIỆC CƯỚI NHÀ NAM",
      time: "10:30 AM",
      date: "10/02/2026",
      location: "Tư gia nhà trai",
      address: "Vĩnh Hưng, Phú Thọ",
      mapLink: "https://maps.google.com"
    }
  ],
  album: [
    "https://picsum.photos/400/600?random=1",
    "https://picsum.photos/400/600?random=2",
    "https://picsum.photos/400/600?random=3",
    "https://picsum.photos/400/600?random=4",
    "https://picsum.photos/400/600?random=5",
    "https://picsum.photos/400/600?random=6",
  ]
};