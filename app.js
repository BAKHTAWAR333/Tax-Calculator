  // Simple prompt version (like your example)
    function taxCounter() {
      let salary = +prompt("Enter Your Salary");
      let tax = 0; 

      if (salary <= 50000) {
          tax = 0;
      } 
      else if (salary <= 100000) {
          tax = salary * 0.01;
      } 
      else {
          tax = salary * 0.05;
      }

      console.log("Aap ka tax hai: " + tax);
      alert("Aap ka tax hai: ₹" + tax);
    }

    // Enhanced calculator version
    function calculateTax() {
      // Get input value
      const salaryInput = document.getElementById('salary');
      const salary = parseFloat(salaryInput.value);
      
      // Validate input
      if (isNaN(salary) || salary < 0) {
        alert('Please enter a valid salary amount');
        salaryInput.focus();
        return;
      }
      
      // Calculate tax
      let taxRate = 0;
      let tax = 0;
      
      if (salary <= 50000) {
        taxRate = 0;
        tax = 0;
      } else if (salary <= 100000) {
        taxRate = 1;
        tax = salary * 0.01;
      } else {
        taxRate = 5;
        tax = salary * 0.05;
      }
      
      // Display results
      document.getElementById('annual-salary').textContent = `${salary.toLocaleString()}`;
      document.getElementById('tax-rate').textContent = `${taxRate}%`;
      document.getElementById('tax-amount').textContent = `${tax.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
      document.getElementById('after-tax').textContent = `${(salary - tax).toLocaleString(undefined, {maximumFractionDigits: 2})}`;
      
      // Show results container with animation
      document.getElementById('result').style.display = 'block';
    }
    
    // Allow pressing Enter key to calculate
    document.getElementById('salary').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        calculateTax();
      }
    });