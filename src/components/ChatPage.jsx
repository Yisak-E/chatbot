

export default function ChatPage(){
    const messages = [
        {
            sender: 'Tomas',
            message: 'Hola, buenos dias',
            receiver: 'chatBot',
        },
        {
            sender: 'chatBot',
            message: 'Hola, mucho gusto',
            receiver: 'Tomas',
        },
        {
            sender: 'Tomas',
            message: 'Tu hablas espanol?',
            receiver: 'chatBot',
        }
    ]

    return (
        <div id={'#chatPage'} className="min-h-screen bg-gradient-to-br from-gray-400 to-gray-50 flex flex-col items-center ">

            <h2 className={'text-2xl font-serif '}> Mini chatbot</h2>
            <div className={' flex flex-col justify-center item-center mx-auto '}>
                  {messages.map((message, index) => (
                <div key={index} className={' h-40 w-72 '+ (message.sender === 'chatBot' ? 'bg-red-200' :'bg-blue-200')}>
                    <p>{message.message}</p>
                </div>
            ))
            }
            </div>
        </div>
    )
}