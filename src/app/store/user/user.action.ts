
export class GetUser {
    static readonly type = '[User] Fetch';
}

export class AddUser {
    static readonly type = '[User] Add';
    constructor(public payload: any) {}
}

export class UpdateUser {
    static readonly type = '[User] Update';
    constructor(public id: string, public payload: any) {}
}

export class DeleteUser {
    static readonly type = '[User] Delete';
    constructor(public id: string) {}
}