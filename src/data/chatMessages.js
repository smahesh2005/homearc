const chatMessages = [
  {
    id: 1,
    sender: 'support',
    type: 'mcq',
    text: 'Hi there! Welcome to HomeArc. Which service do you need today?',
    options: ['Plumbing', 'Electrician', 'AC Repair', 'Cleaning', 'Gardening'],
  },
  {
    id: 2,
    sender: 'support',
    type: 'mcq',
    text: 'Would you like a quote now or schedule a visit?',
    options: ['Get quote', 'Schedule visit', 'Talk to expert'],
  },
  {
    id: 3,
    sender: 'support',
    type: 'mcq',
    text: 'When do you need the service?',
    options: ['Today', 'This week', 'Next week'],
  },
  {
    id: 4,
    sender: 'support',
    type: 'mcq',
    text: 'What is most important to you?',
    options: ['Fast arrival', 'Best price', 'Trusted expert'],
  },
  {
    id: 5,
    sender: 'support',
    type: 'text',
    text: 'You can also type your own question below anytime.',
  },
];

export default chatMessages;
