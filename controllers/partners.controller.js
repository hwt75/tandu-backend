const partners = [
  {
    name: "Đối tác Đài Loan",
    description : [
      {
        id: "1",
        name: "Đại học Đông Nam",
        img: "https://drive.google.com/file/d/1USaKJf8ruC-OLbPI5xucaBgMNWuNgXYf/view?usp=drive_link",
        link: "https://docs.google.com/document/d/1eYK5VXOrLXJuGrMC42NZ1JzV9i6SO4RN/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "2",
        name: "Đại học Cần Ích",
        img: "https://drive.google.com/file/d/1e1aFwOSERzZqMJJ316TnUkYh2VfRbfeD/view?usp=drive_link",
        link: "https://docs.google.com/document/d/1ED3LYWvncPrw8ki5z8wM40K4k6Tf98yv/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "3",
        name: "Đại học Dục Đạt",
        img: "https://drive.google.com/file/d/1_eRo-UTLvtiid7aJ8IkN6lQaZBaZIwZ7/view?usp=drive_link",
        link: "https://docs.google.com/document/d/1QT4J7oleMscmJcROcVsrqYeGHGiVicBB/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "4",
        name: "Đại học Hồng Quốc Đức Lâm",
        img: "https://drive.google.com/file/d/1Nll0ZKuZlAEkbN_z7lZBY-XwtwYETiEO/view?usp=drive_link",
        link: "https://docs.google.com/document/d/1RiIADRNagR2acJJ8bCRidJ-3zZ4dlyIR/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "5",
        name: "Đại học KH Ứng dụng Nam Đài",
        img: "https://drive.google.com/file/d/16QWxZ03X4CUfjNK6xOui7aax7UfGIf81/view?usp=drive_link",
        link: "https://docs.google.com/document/d/1UHc2ynuKWnW4TwgObggF7hZqPzhnYc-c/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "6",
        name: "Đại học Kiện hành",
        img: "https://drive.google.com/file/d/1N3kxxVwL9L3pGF9w_RZQBf77hB7lVn8J/view?usp=drive_link",
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
      img: "https://drive.google.com/file/d/1ZoYCIAM9dZe6X0xlJIUiFwVUTmu3sBOW/view?usp=drive_link",
      link: "https://docs.google.com/document/d/1quW_KSe5eWbwd9lp6ZeXLZn-vwqGqnFZ/edit?usp=drive_link",
    },
    {
      id: "2",
      name: "Đại học SHIN ANSAN",
      img: "https://drive.google.com/file/d/1gW30TxXBwrBOq2Mv_7m_AbVRFJii_ArT/view?usp=drive_link",
      link: "https://docs.google.com/document/d/1Z4SIdD0cUnkK7tJmiQqFcab5xQ96lh_d/edit?usp=drive_link",
    },
    {
      id: "3",
      name: "Đại học KYUNGMIN",
      img: "https://drive.google.com/file/d/1YUdD4tuJIDeBAWb6gUEP6lPRrnTgEXTA/view?usp=drive_link",
      link: "https://docs.google.com/document/d/1bXpx4tF_prgCUSdKykplt33iua0oCuCb/edit?usp=drive_link",
    },
    {
      id: "4",
      name: "ĐH DAEKYEUNG",
      img: "https://drive.google.com/drive/folders/1MY3-MyHBzh_YDYHbLXrMXL_DJ4pXr1WJ?usp=drive_link",
      link: "https://docs.google.com/document/d/1eKrFCYq96ewkp4BDESHnqvtf4YxVIX5y/edit?usp=drive_link",
    },
    {
      id: "5",
      name: "Cao đẳng KHKT DAEJEON",
      img: "https://drive.google.com/drive/folders/1lzaa31RIRh_vRr9f_JPa8yiyCekj0nPE?usp=drive_link",
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