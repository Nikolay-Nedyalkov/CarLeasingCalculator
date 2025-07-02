🖼️ Frontend (HTML/CSS/JavaScript)-----------------------

Structure: Dropdowns for car type and lease period, input fields, and sliders for car value and down payment.

Styling: Clean, centered layout with responsive design for smaller screens.

Logic:

Calculates down payment, interest rate, monthly installment, and total leasing cost.

Uses event listeners to synchronize inputs and dynamically update results.

🖥️ Backend (Node.js + Express)--------------------------

API Logic: Handles lease calculation on the server side for better scalability and logic separation.

Endpoints: Accepts input values (car type, lease period, car value, down payment) and returns leasing details.

Validation: Input validation and error handling performed on backend.

Extendable: Ready to integrate with databases or user authentication in the future.

Usage---------------------------------------------------

Select Car Type: "Brand New" or "Used".

Choose Lease Period: In months.

Set Car Value: Use input or slider (€10,000 – €200,000).

Set Down Payment: Use input or slider (10% – 50%).

View Leasing Details: Calculated on the backend and displayed on the frontend as inputs are adjusted.
