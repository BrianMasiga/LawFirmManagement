import { Type, NotificationType, NotificationPosition, NotificationSize } from './../enums/notifications/type.enum';



export interface NotificationParam {
    Type: Type,
    NType: NotificationType,
    Position: NotificationPosition,
    Size: NotificationSize,
    Delay:Boolean|Number,
    Rounded: Boolean;
    Title: String,
    Message: String
}