import { Subjects } from "./Subjects";

interface ExpirationCompleteEvent {
    subject: Subjects.ExpirationComplete,
    data: {
        orderId: string
    }
}

export {
    ExpirationCompleteEvent,
};
