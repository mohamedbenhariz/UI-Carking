
export class GetDeclaration{
    static readonly type = '[Vehicule] Fetch';
}

export class AddDeclaration{
    static readonly type = '[Vehicule] Add';
    constructor(public payload: any) {}
}

export class UpdateDeclaration{
    static readonly type = '[Vehicule] Update';
    constructor(public id: string, public payload: any) {}
}

export class DeleteDeclaration{
    static readonly type = '[Vehicule] Delete';
    constructor(public id: string) {}
}