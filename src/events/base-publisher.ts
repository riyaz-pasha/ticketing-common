import { Stan } from "node-nats-streaming";
import { Subjects } from "./Subjects";

interface Event {
    subject: Subjects
    data: any
}

abstract class Publisher<T extends Event>{
    abstract subject: T["subject"];
    private client: Stan;

    constructor(client: Stan) {
        this.client = client;
    }

    publish(data: T["data"]): Promise<void> {
        return new Promise((res, rej) => {
            this.client.publish(this.subject, JSON.stringify(data), (err) => {
                if (err) return rej(err);

                console.log(`🚀 ${this.subject} published with `, data);
                res();
            })
        })
    }
}

export {
    Publisher,
};
