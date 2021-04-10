import { Subjects } from "./Subjects";

interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled
    data: {
        id: string,
        ticket: {
            id: string,
        }
    }
}

export {
    OrderCancelledEvent,
};
