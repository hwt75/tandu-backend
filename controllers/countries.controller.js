const countries = [
  { id: "1", name: "Hàn Quốc" },
  { id: "2", name: "Đài Loan" },
];
class Country {
  getAll(req, res) {
    res.send(JSON.stringify(countries));
  }
}

module.exports = new Country();
