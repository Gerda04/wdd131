document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;

    const addButton = document.getElementById("add");
    
    addButton.addEventListener("click", () => {
      participantCount++; 
      addParticipant(participantCount);
    });

    // Function to add a new participant
    function addParticipant(count) {
      const newParticipant = document.createElement("section");
      newParticipant.className = `participant${count}`;
      newParticipant.innerHTML = `
        <p>Participant ${count}</p>
        <div class="item">
          <label for="fname${count}">First Name<span>*</span></label>
          <input id="fname${count}" type="text" name="fname${count}" required />
        </div>
        <div class="item activities">
          <label for="activity${count}">Activity #<span>*</span></label>
          <input id="activity${count}" type="text" name="activity${count}" />
        </div>
        <div class="item">
          <label for="fee${count}">Fee ($)<span>*</span></label>
          <input id="fee${count}" type="number" name="fee${count}" />
        </div>
        <div class="item">
          <label for="date${count}">Desired Date <span>*</span></label>
          <input id="date${count}" type="date" name="date${count}" />
        </div>
        <div class="item">
          <p>Grade</p>
          <select id="grade${count}">
            <option selected value="" disabled selected></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>
      `;
      document.querySelector(".participants").appendChild(newParticipant);
    }

    // Function to calculate the total fee
    function calculateTotalFee() {
      let totalFee = 0;
      const feeInputs = document.querySelectorAll("[id^='fee']");
      
      feeInputs.forEach(input => {
        if(input.value) {  // Only sum if the input value is not empty
          totalFee += parseFloat(input.value);
        }
      });

      return totalFee;
    }

    // Form submit handler
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      
      const adultName = document.getElementById("adult_name").value;
      const participantSections = document.querySelectorAll(".participants .item");  // Count number of participant sections
      const numberOfParticipants = Math.ceil(participantSections.length / 5);  // Each participant has 5 input fields

      const totalFee = calculateTotalFee();

      const summaryInfo = {
        adultName: adultName,
        numberOfParticipants: numberOfParticipants,
        totalFee: totalFee
      };

      document.getElementById("summary").innerHTML = successTemplate(summaryInfo);
    });

    // Success message template
    function successTemplate(info) {
      return `
        <h2>Registration Summary</h2>
        <p><strong>Adult Name:</strong> ${info.adultName}</p>
        <p><strong>Number of Participants:</strong> ${info.numberOfParticipants}</p>
        <p><strong>Total Fee:</strong> $${info.totalFee.toFixed(2)}</p>
      `;
    }
});