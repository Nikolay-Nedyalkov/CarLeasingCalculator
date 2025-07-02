const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/calculate', (req, res) => {
  const { carValue, downPaymentPercent, leasePeriod, carType } = req.body;

  if (
    typeof carValue !== 'number' || carValue < 10000 || carValue > 200000 ||
    typeof downPaymentPercent !== 'number' || downPaymentPercent < 10 || downPaymentPercent > 50 ||
    typeof leasePeriod !== 'number' || leasePeriod <= 0 ||
    (carType !== 'brand new' && carType !== 'used')
  ) {
    return res.status(400).json({ error: 'Invalid input parameters' });
  }

  const downPayment = carValue * (downPaymentPercent / 100);
  const loanAmount = carValue - downPayment;

  const interestRate = carType === 'brand new' ? 2.99 : 3.7;
  const monthlyInterest = interestRate / 12 / 100;

  const monthlyInstallment = (loanAmount * monthlyInterest * Math.pow((1 + monthlyInterest), leasePeriod)) /
    (Math.pow((1 + monthlyInterest), leasePeriod) - 1);

  const totalLeasingCost = monthlyInstallment * leasePeriod + downPayment;

  res.json({
    monthlyInstallment: Number(monthlyInstallment.toFixed(2)),
    totalLeasingCost: Number(totalLeasingCost.toFixed(2)),
    downPayment: Number(downPayment.toFixed(2)),
    interestRate: Number(interestRate.toFixed(2))
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
