// Import các hàm calculateBMI và classifyBMI từ bmi.js

// Hàm getBMI xử lý yêu cầu từ client
// Trả về JSON chứa bmi và classification

// Xuất hàm getBMI

// Lưu ý: Tham khảo mã trong tệp nameController.js
const { calculateBMI, classifyBMI } = require('../src/models/bmi');
app.post('/api/v1/bmi', (req, res) => {
  const { weight, height } = req.body;
  const bmi = calculateBMI(weight, height);
  const classification = classifyBMI(bmi);
  res.json({ bmi, classification });
});
module.exports = { getBMI };

const bmi = require('../models/bmi');
const submitbmi = (req, res) => {
    const bmi = req.body.bmi; 
    bmi.addbmi(bmi);
    res.json({ message: `BMI của bạn là:${bmi}`,  bmi: bmi.getbmi() }); 
};
module.exports = { submitbmi };

