
export class GetVehicule {
    static readonly type = '[Vehicule] Fetch';
}

export class GetVehiculeUser {
    static readonly type = '[Vehicule] FetchVehiculeUser';
}

export class AddVehicule {
    static readonly type = '[Vehicule] Add';
    constructor(public payload: any) {}
}

export class UpdateVehicule {
    static readonly type = '[Vehicule] Update';
    constructor(public id: string, public payload: any) {}
}

export class DeleteVehicule {
    static readonly type = '[Vehicule] Delete';
    constructor(public id: string) {}
}