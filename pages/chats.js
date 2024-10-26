import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Script from 'next/script';

import { useState, useEffect, useRef } from 'react';
import Messages from '../components/chatComponents/Messages'
import Input from '../components/chatComponents/Input'
import Members from '../components/chatComponents/Members'

function randomName() {
  const adjectives = [
  'nanashi'
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  return adjective;
}


//function randomColor() {
//  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
//}

function onSendMessage(message) {
  const newMessage = {
    data: message,
    member: me
  }
  setMessages([...messages, newMessage])
}

let drone = null;

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [members, setMembers] = useState([]);
  const [me, setMe] = useState({
    username: randomName(),
    color: '#a0d8ef',
  });

  const messagesRef = useRef();
  messagesRef.current = messages;
  const membersRef = useRef();
  membersRef.current = members;
  const meRef = useRef();
  meRef.current = me;

  function connectToScaledrone() {
    drone = new window.Scaledrone('hg73njM6DI14e6fb', {
      data: meRef.current,
    });
    drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      meRef.current.id = drone.clientId;
      setMe(meRef.current);
    });

    const room = drone.subscribe('observable-room');

    room.on('message', message => {
      const {data, member} = message;
      setMessages([...messagesRef.current, message]);
    });

    room.on('members', members => {
      setMembers(members);
    });

    room.on('member_join', member => {
      setMembers([...membersRef.current, member]);
    });

    room.on('member_leave', ({id}) => {
      const index = membersRef.current.findIndex(m => m.id === id);
      const newMembers = [...membersRef.current];
      newMembers.splice(index, 1);
      setMembers(newMembers);
    });
  }

  useEffect(() => {
    if (drone === null) {
      connectToScaledrone();
    }
  }, []);

  function onSendMessage(message) {
    drone.publish({
      room: 'observable-room',
      message
    });
  }

  return (
    <>
      <Head>
        <title>Scaledrone Chat App</title>
        <meta name='description' content='Your brand-new chat app!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <script type='text/javascript' src='https://cdn.scaledrone.com/scaledrone.min.js' />
      
      <main className={styles.app}>
        <div className={styles.appContent}>
          <Members members={members} me={me}/>
          <Messages messages={messages} me={me}/>
          <Input
            onSendMessage={onSendMessage}
          />
        </div>
      </main>
    </>
  )
}