const chatbotToggle = document.querySelector('.chatbot__button');
const sendChatBtn = document.querySelector('.chatbot__input-box span');
const chatInput = document.querySelector('.chatbot__textarea');
const chatBox = document.querySelector('.chatbot__box');
const chatbotCloseBtn = document.querySelector('.chatbot__header span');

const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    const chatLi = document.createElement('li');
    chatLi.classList.add('chatbot__chat', className);
    let chatContent =
        className === 'outgoing'
            ? `<p></p>`
            : `<span class="material-symbols-outlined">person</span> <p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector('p').textContent = message;
    return chatLi;
};

const generateResponse = (userMessage) => {
    let botMessage = "I didn't understand that.";
    
    // Customized responses based on your profile
    if (userMessage.toLowerCase().includes('hi') || userMessage.toLowerCase().includes('hello')) {
        botMessage = "Hello there! I'm Julliet Kgomotso Rakuba, a passionate software developer and graphic designer.";
    } else if (userMessage.toLowerCase().includes('profile') || userMessage.toLowerCase().includes('about')) {
        botMessage = "I am a passionate software developer and graphic designer based in Pretoria, South Africa. I enjoy combining creativity with technical skills to create visually appealing and functional projects.";
      } else if (userMessage.toLowerCase().includes('qualifications') || userMessage.toLowerCase().includes('certificates')) {
        botMessage = "Diploma in Computer-based Graphic Development & Diploma in Information Technology in Software Development";
      } else if (userMessage.toLowerCase().includes('portfolio')) {
        botMessage = "You can check my portfolio at <a href='Potfolio.html' target='_blank'>this link</a>. It showcases my graphic design work and software projects.";
    } else if (userMessage.toLowerCase().includes('projects')) {
        botMessage = "I have worked on several projects including web applications and graphic design for various clients. Feel free to ask about specific projects!";
    } else if (userMessage.toLowerCase().includes('skills')) {
        botMessage = "I specialize in UI/UX design, web development with HTML, CSS, JavaScript, Java, Azure DevOps and graphic design tools like Adobe Illustrator, Dreamweaver, Photoshop and many more ";
    } else if (userMessage.toLowerCase().includes('hobbies') || userMessage.toLowerCase().includes('interests')) {
        botMessage = "I enjoy photography, coding, and exploring new places. Staying creative is important to me!";
    }

    return botMessage;
};

const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value = '';
    chatInput.style.height = `${inputInitHeight}px`;

    chatBox.appendChild(createChatLi(userMessage, 'outgoing'));
    chatBox.scrollTo(0, chatBox.scrollHeight);

    setTimeout(() => {
        const botResponse = generateResponse(userMessage);
        const incomingChatLi = createChatLi(botResponse, 'incoming');
        chatBox.appendChild(incomingChatLi);
        chatBox.scrollTo(0, chatBox.scrollHeight);
    }, 600);
};

chatInput.addEventListener('input', () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleChat();
    }
});

chatbotToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-chatbot');
});

chatbotCloseBtn.addEventListener('click', () => {
    document.body.classList.remove('show-chatbot');
});

sendChatBtn.addEventListener('click', handleChat);
