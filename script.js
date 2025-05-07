// Set your admin password (change this to something secure)
const adminPassword = 'ANS!';  // Updated password to "ANS!"

// Function to show the customization form
function showCustomizationForm() {
  const passwordPrompt = prompt('Please enter the admin password to access customization:');
  
  if (passwordPrompt === adminPassword) {
    const formHTML = `
      <div id="customizationForm" style="position: fixed; top: 10px; left: 10px; background: #000; padding: 20px; color: #fff; z-index: 999;">
        <h3>Customize Your Website</h3>
        <form id="customizationFormFields">
          <label for="homepageText">Homepage Text:</label><br>
          <textarea id="homepageText" rows="4" style="width: 200px;"></textarea><br><br>
          
          <label for="toolImage">Tool Image URL:</label><br>
          <input type="text" id="toolImage" style="width: 200px;" /><br><br>
          
          <label for="toolDescription">Tool Description:</label><br>
          <textarea id="toolDescription" rows="4" style="width: 200px;"></textarea><br><br>
          
          <button type="button" onclick="saveCustomizations()">Save Customizations</button>
          <button type="button" onclick="closeCustomizationForm()">Close</button>
        </form>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', formHTML);
  } else {
    alert('Incorrect password! Access denied.');
  }
}

// Close customization form
function closeCustomizationForm() {
  document.getElementById('customizationForm').remove();
}

// Save customizations to the page
function saveCustomizations() {
  const homepageText = document.getElementById('homepageText').value;
  const toolImage = document.getElementById('toolImage').value;
  const toolDescription = document.getElementById('toolDescription').value;

  if (homepageText) {
    document.querySelector('.main h1').textContent = homepageText;
  }
  
  if (toolImage) {
    document.querySelector('.tool img') ? document.querySelector('.tool img').src = toolImage : alert("No tool image to update.");
  }
  
  if (toolDescription) {
    document.querySelector('.tool p').textContent = toolDescription;
  }

  alert('Customizations saved!');
}

// Add button to show the form for customization (only for the admin)
window.onload = () => {
  const customizeButton = document.createElement('button');
  customizeButton.textContent = 'Customize Website';
  customizeButton.style.position = 'fixed';
  customizeButton.style.top = '10px';
  customizeButton.style.right = '10px';
  customizeButton.style.zIndex = '999';
  customizeButton.style.padding = '10px';
  customizeButton.style.background = '#a24cff';
  customizeButton.style.color = '#fff';
  customizeButton.style.border = 'none';
  customizeButton.style.cursor = 'pointer';
  customizeButton.onclick = showCustomizationForm;
  
  document.body.appendChild(customizeButton);
};
