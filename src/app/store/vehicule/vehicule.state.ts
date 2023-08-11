import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { Vehicule } from "./vehicule.model";
import { Injectable } from "@angular/core";
import { VehiculesService } from "src/app/services/vehicules.service";
import { ToastrService } from "ngx-toastr";
import { AddVehicule, DeleteVehicule, GetVehicule, UpdateVehicule } from "./vehicule.action";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";


export class VehiculeStateModel {
    vehicule!: Vehicule[];
    loading!: boolean;
    error!: Error | any;
}

@State<VehiculeStateModel>({
    name: 'vehiculeState',
    defaults: {
        vehicule: [],
        loading: false,
        error: null
    }
})
@Injectable()
export class VehiculeState {
    constructor(
        private vahiculeService: VehiculesService,
        private store: Store,
        private toastr: ToastrService
    ){}

    @Selector() //ici on va selectionner les données
    static selectStateData(state: VehiculeStateModel) {
        return state.vehicule;
    }

    @Selector() //
    static selectStateLoading(state: VehiculeStateModel) {
        return state.loading;
    }

    @Selector() 
    static selectStateError(state: VehiculeStateModel){
        return state.error;
    }

    @Action(GetVehicule) // ici on va faire les actions
    getAllVehiculeState(ctx: StateContext<VehiculeStateModel>) {
        const state = ctx.getState();
        return this.vahiculeService.getAllVehicule().pipe(tap((returnData: any) => {
                ctx.patchState({
                    ...state,
                    vehicule: returnData.data,
                    loading: false
                })
            }),
            catchError((error) => {
                this.toastr.error(error?.error?.message, 'Error');
                return of(
                    ctx.setState({
                        ...state,
                        error: error?.error?.message,
                        loading: false
                    })
                )
            })
        )
    }

    @Action(AddVehicule)
    addVehiculeState(ctx: StateContext<VehiculeStateModel>, { payload }: AddVehicule) {
        const state = ctx.getState();
        return this.vahiculeService.createVehicule(payload).pipe(tap((returnData: any) => {
                this.toastr.success('Vehicule ajouté avec succès', 'Success');
                this.store.dispatch(new GetVehicule());
            }),
            catchError((error) => {
                this.toastr.error(error?.error?.message, 'Error');
                return of(
                    ctx.setState({
                        ...state,
                        error: error?.error?.message,
                        loading: false
                    })
                )
            })
        )
    }

    @Action(UpdateVehicule)
    updateVehiculeState(ctx: StateContext<VehiculeStateModel>, { id, payload }: UpdateVehicule) {
        const state = ctx.getState();
        return this.vahiculeService.updateVehicule(id, payload).pipe(tap((returnData: any) => {
                this.toastr.success('Vehicule modifié avec succès', 'Success');
                this.store.dispatch(new GetVehicule());
            }),
            catchError((error) => {
                this.toastr.error(error?.error?.message, 'Error');
                return of(
                    ctx.setState({
                        ...state,
                        error: error?.error?.message,
                        loading: false
                    })
                )
            })
        )
    }

    @Action(DeleteVehicule)
    deleteVehiculeState(ctx: StateContext<VehiculeStateModel>, { id }: DeleteVehicule) {
        const state = ctx.getState();
        return this.vahiculeService.deleteVehicule(id).pipe(tap((returnData: any) => {
                this.toastr.success('Vehicule supprimé avec succès', 'Success');
                this.store.dispatch(new GetVehicule());
            }),
            catchError((error) => {
                this.toastr.error(error?.error?.message, 'Error');
                return of(
                    ctx.setState({
                        ...state,
                        error: error?.error?.message,
                        loading: false
                    })
                )
            })
        )
    }
}