import React from 'react';
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import './chatbox.css'; // Import your CSS file

const steps = [
    {
      id: "Great",
      message: "Hello, Welcome to our website AS Fashion Factory",
      trigger: "AskName"
    },
    {
      id: "AskName",
      message: "Please Enter Your Name",
      trigger: "waiting1"
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name"
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select issue",
      trigger: "issues"
    },
    {
      id: "issues",
      options:  [
        { value: "order", label: "order", trigger: "order" },
        { value: "payment", label: "payment", trigger: "payment" },
        { value: "delivery", label: "delivery", trigger: "delivery" },
        { value: "customer_care", label: "customer care", trigger: "customer_care" }
      ]
    },
    {
      id: "order",
      message: "Thank you for telling your issue, we will reach you ASAP",
      end: false
    },
    {
      id: "payment",
      message: "Thank you for telling your issue, we will reach you ASAP",
      end: false
    },
    {
      id: "delivery",
      message: "Thank you for telling your issue, we will reach you ASAP",
      end: false
    },
    {
      id: "customer_care",
      message: "Thank you for telling your issue, we will reach you ASAP",
      end: false
    }
  ];
  
const Chatbot = () => {
  return (
    <Segment  className='chat-popup'>
      <ChatBot steps={steps}  floating={true} />
    </Segment>
  );
};

export default Chatbot;
