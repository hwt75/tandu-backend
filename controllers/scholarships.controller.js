const scholarships = {
  korean: [
    {
      id: "1",
      name: "Học bổng chính phủ",
      target: "Học sinh, sinh viên đã tốt nghiệp GPA 8.0 trở lên",
      description: "100% học phí",
    },
    {
      id: "2",
      name: "Học bổng từ các tổ chức Phi Chính phủ",
      target: "Tất cả các sinh viên",
      description:
        "30% - 100% học phí và hỗ trợ các chi phí khác (bảo hiểm, ký túc,...)",
    },
    {
      id: "3",
      name: "Học bổng từ các trường Đại học",
      target: "Sinh viên mới nhập học, sinh viên đang theo học tại trường",
      description: "30% - 100% học phí",
    },
  ],
  taiwan: [
    {
      id: "1",
      name: "Học bổng chính phủ Việt Nam",
      target: "Giảng viên, công chức nhà nước",
      description: "100% học phí và sinh hoạt phí",
    },
    {
      id: "2",
      name: "Học bổng Bộ Giáo dục Đài Loan",
      description: "50% - 100% học phí và một số chi phí khác (sinh hoạt phí)",
      target: "Sinh viên đang theo học hệ cử nhân, thạc sĩ, tiến sĩ",
    },
    {
      id: "3",
      name: "Học bổng từ các trường Đại học",
      description: "50% - 100% học phí và ký túc xá",
      target: "Sinh viên đang theo học tại trường",
    },
    {
      id: "4",
      name: "Học bổng từ các Quỹ phúc lợi xã hội",
      description: "Sinh viên thuộc các trường là đối tác của Quỹ",
      target:
        "30% - 100% học phí và một số chi phí khác (bảo hiểm, ký túc xá...)",
    },
  ],
};
class ScholarshipController{
  getAll (req,res,next){
    res.json(scholarships)
  }
}

module.exports = new ScholarshipController;