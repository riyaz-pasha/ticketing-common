import { Subjects } from "./Subjects";

interface TicketCreatedEvent {
    subject: Subjects.TicketCreated
    data: {
        id: string,
        title: string,
        price: number,
        userId: string,
    }
}

export {
    TicketCreatedEvent,
};
