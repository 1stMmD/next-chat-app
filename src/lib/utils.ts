import {ClassValue, clsx} from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs : ClassValue[]) => twMerge(clsx(inputs))

export const chatIdConstructor = (user1 : string , user2 : string) => {
    const sortedList = [user1, user2].sort()
    return `${sortedList[0]}---${sortedList[1]}`
}