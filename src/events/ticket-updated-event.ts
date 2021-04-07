import { Subjects } from "./Subjects";

interface TicketUpdatedEvent {
    subject: Subjects.TicketUpdated
    data: {
        id: string,
        title: string,
        price: number,
        userId: string,
    }
}

export {
    TicketUpdatedEvent,
};
