<h1>This package developed by Dynamic Soft | dync!</h1>

<!-- <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p> -->

# telegram-bot-sender

[![npm version](https://badge.fury.io/js/telegram-bot-sender.svg)](https://badge.fury.io/js/telegram-bot-sender)
[![Build Status](https://travis-ci.org/dynamicuz/dync-telegram-bot-sender.svg?branch=main)](https://travis-ci.org/dynamicuz/dync-telegram-bot-sender)

## Description
This `telegram-bot-sender` package helps you to send a message using a Telegram bot to the telegram group or channel without setting up telegram bot configuration from scratch.

## Installation

```bash
$ npm install telegram-bot-sender
```

## Usage
Importing the Function
You can import the SendMsgFromBot function using ES6 imports or CommonJS requires.

ES6 Imports
```
import { SendMsgFromBot } from 'telegram-bot-sender';
```
CommonJS Requires
```
const { SendMsgFromBot } = require('telegram-bot-sender');
```

Sending a Message
Here's an example of how to use the SendMsgFromBot function:

```
import { SendMsgFromBot } from 'telegram-bot-sender';


// Your Telegram bot token
const botToken = 'YOUR_BOT_TOKEN';

// The chat ID where you want to send the message
const chatId = 'YOUR_CHAT_ID';

// Parameters to be included in the message
const params = [
  { key: 'Name', value: 'John Doe' },
  { key: 'Age', value: 30 },
  { key: 'City', value: 'New York' }
];

// Optional title for the message
const title = 'User Information';

SendMsgFromBot(botToken, chatId, params, title)
  .then(() => console.log('Message sent successfully'))
  .catch(err => console.error('Error sending message:', err));
```

