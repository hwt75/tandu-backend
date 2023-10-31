const services = [
  {
    id: "1",
    name: "Dịch vụ tư vấn",
    description:
      "Tân Du cung cấp dịch vụ tư vấn du học và xuất khẩu lao động dựa trên kinh nghiệm thực tế của các chuyên gia tư vấn và mong muốn, khả năng tài chính của khách hàng. Giải đáp thắc mắc và đưa ra những lựa chọn phù hợp nhất với yêu cầu của khách hàng.",
  },
  {
    id: "2",
    name: "Dịch vụ Đào tạo tiếng Hàn, tiếng Trung",
    description: "Dịch vụ Đào tạo tiếng Hàn, tiếng Trung",
  },
  {
    id: "3",
    name: "Hỗ trợ xử lý hồ sơ và thủ tục",
    description: "Hỗ trợ xử lý hồ sơ và thủ tục",
  },
  {
    id: "4",
    name: "Ôn luyện phỏng vấn",
    description:
      "Đội ngũ giáo viên giàu kinh nghiệm của Tân Du sẽ giúp bạn ôn luyện, trả lời những câu hỏi phỏng vấn với trường, với Đại sứ quán; giúp bạn giữ vững tinh thần, tự tin bước vào vòng phỏng vấn.",
  },
  {
    id: "5",
    name: "Liên hệ với các trường Đại học tại HQ và ĐL",
    description: "Liên hệ với các trường Đại học tại HQ và ĐL",
  },
];


class Service {
    getAll(req,res){
        res.send(JSON.stringify(services));
    }
}
module.exports = new Service;