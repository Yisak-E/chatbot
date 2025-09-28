

export default function ChatPage(){
    const messages = [
  {
    sender: 'Tomas',
    message: 'Hola, buenos días',
    receiver: 'chatBot',
    color:"bg-red-"
  },
  {
    sender: 'chatBot',
    message: 'Hola, mucho gusto. Yo soy estudiante, ¿y tú?',
    receiver: 'Tomas',
  },
  {
    sender: 'Tomas',
    message: '¿Tú hablas español?',
    receiver: 'chatBot',
  },
  {
    sender: 'chatBot',
    message: 'Sí, hablo español. Estoy aprendiendo para mejorar mi comunicación. ¿Te gusta aprender idiomas?',
    receiver: 'Tomas',
  },
  {
    sender: 'Tomas',
    message: 'Sí, me encanta. Estoy estudiando inglés y francés también.',
    receiver: 'chatBot',
  },
  {
    sender: 'chatBot',
    message: '¡Qué interesante! Aprender varios idiomas abre muchas puertas. ¿Cuál es tu favorito hasta ahora?',
    receiver: 'Tomas',
  },
  {
    sender: 'Tomas',
    message: 'Creo que el francés es muy elegante, pero el inglés es más útil en mi trabajo.',
    receiver: 'chatBot',
  },
  {
    sender: 'chatBot',
    message: 'Tiene sentido. El inglés es muy común en el mundo profesional. ¿En qué trabajas?',
    receiver: 'Tomas',
  },
  {
    sender: 'Tomas',
    message: 'Soy diseñador gráfico. Trabajo en una agencia de publicidad en Madrid.',
    receiver: 'chatBot',
  },
  {
    sender: 'chatBot',
    message: '¡Qué emocionante! El diseño gráfico combina creatividad y tecnología. ¿Tienes algún proyecto favorito?',
    receiver: 'Tomas',
  }
];

    return (
       <div id="chatPage" className=" min-h-screen bg-gradient-to-br from-green-100 to-white flex flex-col items-center justify-center">
  <div className="flex flex-col bg-white rounded-xl max-h-screen  p-4">
    <h2 className="text-2xl font-serif text-center p-3 italic mt-[20px]">Mini chatbot</h2>
      <div className="w-[400px] h-[400px] lg:h-[500px] bg-gray-200 p-3 space-y-2 overflow-y-auto flex flex-col">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`rounded p-2 w-72 text-base ${
            message.sender === "chatBot" 
              ? "bg-red-200 self-end" 
              : "bg-blue-200 self-start"
          }`}
        >
          <p>{message.message}</p>
        </div>
      ))}
    </div>

    <div className="w-[400px] bg-white rounded-b-xl text-2xl mt-4 flex items-center space-x-2">
      <input
        type="text"
        className="flex-grow border-2 border-black p-2 rounded"
        placeholder="Type your message..."
      />
      <button className="w-12 bg-blue-500 border-2 border-black rounded text-white hover:cursor-pointer">
        &gt;&gt;&gt;
      </button>
    </div>
  </div>
</div>
    )
}