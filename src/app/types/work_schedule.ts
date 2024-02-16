import {IUser} from './user';

export interface IWorkSchedule {
    _id: string | null,
    employee_id: IUser | null,
    work_schedule: {
        start_time: string,
        end_time: string,
        breaks: [
            {start: string, end: string}
        ]
    }
}   