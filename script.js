document.addEventListener('DOMContentLoaded', function() {
  const carTypeMenu = document.getElementById('carTypeMenu');
  const leasePeriodMenu = document.getElementById('leasePeriodMenu');
  const carValueInput = document.getElementById('carValue');
  const carValueSlider = document.getElementById('carValueSlider');
  const downPaymentInput = document.getElementById('downPayment');
  const downPaymentSlider = document.getElementById('downPaymentSlider');

  const totalLeasingCostResult = document.getElementById('totalLeasingCostResult');
  const downPaymentResult = document.getElementById('downPaymentResult');
  const monthlyInstallmentResult = document.getElementById('monthlyInstallmentResult');
  const interestRateResult = document.getElementById('interestRateResult');

<<<<<<< HEAD
  function calculateLeasingDetails() {
    carValueInput.style.color = 'black';
    downPaymentInput.style.color = 'black';

    let carValue = parseFloat(carValueInput.value);
    let downPaymentPercent = parseInt(downPaymentInput.value);
    let leasePeriod = parseInt(leasePeriodMenu.value);

    if (isNaN(carValue) || carValue < 10000 || carValue > 200000) {
      carValueInput.style.color = 'red';
      downPaymentResult.textContent = '';
      totalLeasingCostResult.textContent = '';
      monthlyInstallmentResult.textContent = '';
      interestRateResult.textContent = '';
      return;
    }

    if (isNaN(downPaymentPercent) || downPaymentPercent < 10 || downPaymentPercent > 50) {
      downPaymentInput.style.color = 'red';
      downPaymentResult.textContent = '';
      totalLeasingCostResult.textContent = '';
      monthlyInstallmentResult.textContent = '';
      interestRateResult.textContent = '';
      return;
    }

    let downPaymentValue = carValue * (downPaymentPercent / 100);
    
    if (!isNaN(downPaymentValue)) {
      downPaymentResult.textContent = downPaymentValue.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    }

    let interestRate = (carTypeMenu.value === "brand new") ? 2.99 : 3.7;
    interestRateResult.textContent = interestRate + '%';

    let monthlyInsterestRate = interestRate / 12 / 100;

    let loanAmount = carValue - downPaymentValue;

    let monthlyInstallment = (loanAmount * monthlyInsterestRate * Math.pow((1 + monthlyInsterestRate), leasePeriod)) / (Math.pow((1 + monthlyInsterestRate), leasePeriod) - 1);
    if (!isNaN(monthlyInstallment)) {
      monthlyInstallmentResult.textContent = monthlyInstallment.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    }
    
    let totalLeasingCost = monthlyInstallment * leasePeriod + downPaymentValue;
    if (!isNaN(totalLeasingCost)) {
      totalLeasingCostResult.textContent = totalLeasingCost.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    }
  }
=======
  async function calculateLeasingDetails() {
    carValueInput.style.color = 'black';
    downPaymentInput.style.color = 'black';
  
    let carValue = parseFloat(carValueInput.value);
    let downPaymentPercent = parseInt(downPaymentInput.value);
    let leasePeriod = parseInt(leasePeriodMenu.value);
    let carType = carTypeMenu.value;
  
    if (isNaN(carValue) || carValue < 10000 || carValue > 200000) {
      carValueInput.style.color = 'red';
      return;
    }
  
    if (isNaN(downPaymentPercent) || downPaymentPercent < 10 || downPaymentPercent > 50) {
      downPaymentInput.style.color = 'red';
      return;
    }
  
    const response = await fetch('http://localhost:3000/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ carValue, downPaymentPercent, leasePeriod, carType })
    });
  
    const data = await response.json();
  
    totalLeasingCostResult.textContent = parseFloat(data.totalLeasingCost).toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    downPaymentResult.textContent = parseFloat(data.downPayment).toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    monthlyInstallmentResult.textContent = parseFloat(data.monthlyInstallment).toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    interestRateResult.textContent = data.interestRate + '%';
  }  
>>>>>>> master
  
  carValueInput.addEventListener('input', function() {
    carValueSlider.value = carValueInput.value;
    calculateLeasingDetails();
  });

  carValueSlider.addEventListener('input', function() {
    carValueInput.value = carValueSlider.value;
    calculateLeasingDetails();
  });

  downPaymentSlider.addEventListener('input', function() {
    downPaymentInput.value = downPaymentSlider.value;
    calculateLeasingDetails();
  });

  downPaymentInput.addEventListener('input', function() {
    downPaymentSlider.value = downPaymentInput.value;
    calculateLeasingDetails();
  });

  carTypeMenu.addEventListener('change', function() {
    calculateLeasingDetails();
  });

  leasePeriodMenu.addEventListener('change', function() {
    calculateLeasingDetails();
  });
});