const partners = [
  {
    name: "Đối tác Đài Loan",
    description : [
      {
        id: "1",
        name: "Đại học Đông Nam",
        link: "https://docs.google.com/document/d/1eYK5VXOrLXJuGrMC42NZ1JzV9i6SO4RN/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "2",
        name: "Đại học Cần Ích",
        link: "https://docs.google.com/document/d/1ED3LYWvncPrw8ki5z8wM40K4k6Tf98yv/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "3",
        name: "Đại học Dục Đạt",
        link: "https://docs.google.com/document/d/1QT4J7oleMscmJcROcVsrqYeGHGiVicBB/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "4",
        name: "Đại học Hồng Quốc Đức Lâm",
        link: "https://docs.google.com/document/d/1RiIADRNagR2acJJ8bCRidJ-3zZ4dlyIR/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "5",
        name: "Đại học KH Ứng dụng Nam Đài",
        link: "https://docs.google.com/document/d/1UHc2ynuKWnW4TwgObggF7hZqPzhnYc-c/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "6",
        name: "Đại học Kiện hành",
        link: "https://docs.google.com/document/d/1-H2gzhYCI6Qi6U1L43ldB37iopOyafjc/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
    ],
  },
 {
  name: "Đối tác Hàn Quốc",
  description : [
    {
      id: "1",
      name: "Đại học KH JEONBUK",
      link: "https://docs.google.com/document/d/1quW_KSe5eWbwd9lp6ZeXLZn-vwqGqnFZ/edit?usp=drive_link",
    },
    {
      id: "2",
      name: "Đại học SHIN ANSAN",
      link: "https://docs.google.com/document/d/1Z4SIdD0cUnkK7tJmiQqFcab5xQ96lh_d/edit?usp=drive_link",
    },
    {
      id: "3",
      name: "Đại học KYUNGMIN",
      link: "https://docs.google.com/document/d/1bXpx4tF_prgCUSdKykplt33iua0oCuCb/edit?usp=drive_link",
    },
    {
      id: "4",
      name: "ĐH DAEKYEUNG",
      link: "https://docs.google.com/document/d/1eKrFCYq96ewkp4BDESHnqvtf4YxVIX5y/edit?usp=drive_link",
    },
    {
      id: "5",
      name: "Cao đẳng KHKT DAEJEON",
      link: "https://docs.google.com/document/d/1SJEKt-vzIKFpr7PxwJm2DhqONltejS7g/edit?usp=drive_link",
    },
  ],
 }
];

class Partners {
    getAll(res, req){
        res.send(JSON.stringify(partners));
    }
}

module.exports = new Partners;