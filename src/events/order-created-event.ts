import { Subjects } from "./Subjects";
import { OrderStatus } from "./types/order-status";

interface OrderCreatedEvent {
    subject: Subjects.OrderCreated
    data: {
        id: string,
        status: OrderStatus,
        userId: string,
        expiresAt: string,
        ticket: {
            id: string,
            price: number,
        }
    }
}

export {
    OrderCreatedEvent,
};
