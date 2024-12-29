const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');

function addMessage(content, sender) {
  const message = document.createElement('div');
  message.classList.add('message', sender);
  message.textContent = content;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
}

sendButton.addEventListener('click', () => {
  const userInput = chatInput.value.trim();
  if (userInput) {
    addMessage(userInput, 'user');
    chatInput.value = '';
    setTimeout(() => {
      addMessage('This is a bot response!', 'bot');
    }, 500);
  }
});

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendButton.click();
  }
});
