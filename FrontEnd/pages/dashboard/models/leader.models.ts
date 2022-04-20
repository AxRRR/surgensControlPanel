export interface objectivesTypes {
    _id: string,
    objective_clan: string,
    objective_createAt: Date,
    objective_invoice: string,
    objective_user: {
        name_member: string,
    },
    objective_tasks: Array<tasksTypes>
}

export interface tasksTypes {
    _id: string,
    task_title: string,
    task_description: string,
    task_status: boolean,
    task_invoice: string,
    task_createAt: Date
}