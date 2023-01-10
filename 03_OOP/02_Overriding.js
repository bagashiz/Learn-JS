//* Overriding

// when a subclass using different constructors than the superclass

class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

class WhatsAppService extends MailService {
    //* overriding constructor
    constructor(sender, isBusiness) {
        // using super() to call the parent constructor value
        super(sender);

        this.isBusiness = isBusiness;
    }

    //* overriding method
    sendMessage(message, receiver) {
        // change the behavior of the method
        console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
    }
}

const mailService = new MailService('someSender');
const whatsappService = new WhatsAppService('+6281234567890', true);

mailService.sendMessage('Hai, apa kabar?', 'someReceiver'); // someSender sent Hai, apa kabar? to someReceiver
whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210'); // +6281234567890 sent Hai, apa kabar? to +6289876543210 via WhatsApp