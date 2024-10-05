import React, { useEffect, useState, useRef } from "react";
import io from 'socket.io-client';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const socket = io('http://localhost:4000');
const apiUrl = "http://localhost:4000";

const ChatComponent = ({ senderId, recipientId }) => {
    const [messages, setMessages] = useState([]);
    const [messageContent, setMessageContent] = useState('');
    const [file, setFile] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null); // State to store clicked image URL
    const [isModalOpen, setModalOpen] = useState(false); // State to toggle modal
    const messagesEndRef = useRef(null);

    // Scroll to the bottom of the chat when new messages arrive
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await axios.get(`${apiUrl}/chat?senderId=${senderId}&recipientId=${recipientId}`);
            setMessages(response.data);
            scrollToBottom(); // Scroll to bottom after fetching
        };

        fetchMessages(); // Initial fetch on mount

        socket.on('receiveMessage', (message) => {
            setMessages((prevMessages) => {
                // Check if the message is already present to avoid duplication
                if (!prevMessages.some(msg => msg.messageContent === message.messageContent && msg.senderId === message.senderId)) {
                    return [...prevMessages, message];
                }
                return prevMessages;
            });
            scrollToBottom(); // Scroll to bottom on new message
        });

        return () => {
            socket.off('receiveMessage');
        };
    }, [senderId, recipientId]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        const message = {
            senderId,
            recipientId,
            messageContent,
            contentType: 'text',
        };

        try {
            // Send the message to the server
            await axios.post(`${apiUrl}/chat`, message);

            // Emit the message to Socket.IO
            socket.emit('sendMessage', message);
            scrollToBottom();

            // No need to refetch or update messages here, the socket will handle it
            setMessageContent(''); // Clear the input
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const handleFileUpload = async (e) => {
        const data = new FormData();
        
        // Loop through all selected files and append each to the form data
        for (let i = 0; i < file.length; i++) {
            data.append('files', file[i]);
        }
        console.log(senderId);
        console.log(recipientId);
        data.append('senderId', senderId);
        data.append('recipientId', recipientId);
        
        try {
            const response = await axios.post(`${apiUrl}/chat/upload`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            // Assuming the response contains an array of messages
            const messages = response.data;
           
            // Emit each message to the sender and recipient
            messages.forEach(message => {
                socket.emit('sendMessage', message);
            });

            setFile(null); 
           

        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };
    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl); // Set the clicked image
        setModalOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setModalOpen(false); // Close the modal
        setSelectedImage(null); // Reset selected image
    };

    return  (
        <div className="container w-100 m-4 mx-auto">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 w-100">
                    <div className="card w-100">
                        <div className="card-header bg-info text-white w-100 p-2">
                            Chat Room
                        </div>
                        <div className="card-body w-100" style={{ height: '400px', overflowY: 'scroll' }}>
                            {messages.map((msg, index) => {
                                const isUserMessage = msg.senderId == senderId;
                                const isTextMessage = msg.contentType === 'text';
                                return (
                                    <div key={index} className={`mb-2 d-flex ${isUserMessage ? 'justify-content-end' : 'justify-content-start'}`}>
                                        <div className={`p-2 rounded ${isUserMessage && isTextMessage ? 'bg-primary text-white' : 'bg-light text-dark'}`}>
                                            {msg.contentType === 'file' 
                                                ? <img src={`${apiUrl}${msg.messageContent}`} 
                                                       alt="uploaded" 
                                                       className="img-fluid" 
                                                       style={{ maxWidth: '200px', cursor: 'pointer' }} 
                                                       onClick={() => handleImageClick(`${apiUrl}${msg.messageContent}`)} // Click to open modal
                                                />
                                                : msg.messageContent}
                                        </div>
                                    </div>
                                );
                            })}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="card-footer w-100">
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    value={messageContent} 
                                    onChange={(e) => setMessageContent(e.target.value)} 
                                    placeholder="Type a message"
                                    className="form-control"
                                />
                                {messageContent.trim() && (
                                    <button className="btn btn-primary" onClick={sendMessage}>Send</button>
                                )}
                            </div>
                            <div className="mt-2 d-flex p-2 align-items-center"> 
                                <input 
                                    type="file" 
                                    className="form-control mx-auto" 
                                    multiple 
                                    onChange={(e) => setFile(e.target.files)} 
                                />
                                {file && file.length > 0 && (
                                    <button className="btn btn-secondary mt-2 mx-auto" onClick={handleFileUpload}>Upload</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for showing enlarged image */}
            {isModalOpen && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" onClick={handleCloseModal} style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <img src={selectedImage} alt="Enlarged" className="img-fluid" style={{ maxWidth: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default ChatComponent;
