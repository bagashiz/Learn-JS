//* Inheritance

// Inheritance is a way to create a new class from an existing class.

// MailService acts as a superclass
class MailService {
    constructor(sender) {
        this.sender = sender
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

// use keyword extends to create a subclass

// WhatsAppService acts as a subclass
class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}
// WhatsAppService's methods are: sendMessage, sendBroadcastMessage

// EmailService acts as a subclass
class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}
// EmailService's methods are: sendMessage, sendDelayedMessage

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');

whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
//! whatsapp.sendDelayedMessage(); (TypeError: whatsapp.delayedMessage is not a function)

console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
console.log(whatsapp instanceof MailService); // true

email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
//! email.sendBroadcastMessage(); (TypeError: email.sendBroadcastMessage is not a function)

console.log(email instanceof EmailService); // true
console.log(email instanceof WhatsAppService); // false
console.log(email instanceof MailService); // true