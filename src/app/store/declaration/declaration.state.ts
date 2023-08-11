import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { Declaration } from "./declaration.model";
import { Injectable } from "@angular/core";
import { DeclarationsService } from "src/app/services/declarations.service";
import { ToastrService } from "ngx-toastr";
import { AddDeclaration, DeleteDeclaration, GetDeclaration, UpdateDeclaration } from "./declaration.action";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

export class DeclarationStateModel {
    declaration!: Declaration[];
    loading!: boolean;
    error!: Error | any;
}

@State<DeclarationStateModel>({
    name: 'declarationState',
    defaults: {
        declaration: [],
        loading: false,
        error: null
    }
})
@Injectable()
export class DeclarationState {
    constructor(
        private declarationService: DeclarationsService,
        private store: Store,
        private toastr: ToastrService
    ){}

    @Selector() //ici on va selectionner les données
    static selectStateData(state: DeclarationStateModel) {
        return state.declaration;
    }

    @Selector() //
    static selectStateLoading(state: DeclarationStateModel) {
        return state.loading;
    }

    @Selector() 
    static selectStateError(state: DeclarationStateModel){
        return state.error;
    }

    @Action(GetDeclaration) // ici on va faire les actions
    getAllDeclarationState(ctx: StateContext<DeclarationStateModel>) {
        const state = ctx.getState();
        return this.declarationService.getAllDeclarations().pipe(tap((returnData: any) => {
                ctx.patchState({
                    ...state,
                    declaration: returnData.data,
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

    @Action(AddDeclaration)
    addDeclarationState(ctx: StateContext<DeclarationStateModel>, { payload }: AddDeclaration) {
        const state = ctx.getState();
        return this.declarationService.createDeclaration(payload).pipe(tap((returnData: any) => {
                this.toastr.success('Declaration ajouté avec succès', 'Success');
                this.store.dispatch(new GetDeclaration());
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

    @Action(UpdateDeclaration)
    updateDeclarationState(ctx: StateContext<DeclarationStateModel>, { id, payload }: UpdateDeclaration) {
        const state = ctx.getState();
        return this.declarationService.updateDeclaration(id, payload).pipe(tap((returnData: any) => {
                this.toastr.success('Declaration modifié avec succès', 'Success');
                this.store.dispatch(new GetDeclaration());
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

    @Action(DeleteDeclaration)
    deleteDeclarationState(ctx: StateContext<DeclarationStateModel>, { id }: DeleteDeclaration) {
        const state = ctx.getState();
        return this.declarationService.deleteDeclaration(id).pipe(tap((returnData: any) => {
                this.toastr.success('Declaration supprimé avec succès', 'Success');
                this.store.dispatch(new GetDeclaration());
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