import { Type } from './../enums/notifications/type.enum';
import { NotificationParam } from '../interfaces/notification.interface';

declare var Lobibox;

export const notify = (Note: NotificationParam) => {
    switch (Note.Type) {
        case Type.Alert: {
            Lobibox.notify(Note.NType, {
                size: Note.Size,
                rounded: Note.Rounded,
                delay: Note.Delay,
                position: Note.Position,
                sound:false,
                title: Note.Title,
                msg: Note.Message
            });
        }
    }

}