import { Subjects } from "./Subjects";

interface TicketUpdatedEvent {
    subject: Subjects.TicketUpdated
    data: {
        id: string,
        version: number,
        title: string,
        price: number,
        userId: string,
    }
}

export {
    TicketUpdatedEvent,
};
