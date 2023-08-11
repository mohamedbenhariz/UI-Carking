import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { ToastrService } from "ngx-toastr";
import { AddUser, DeleteUser, GetUser, UpdateUser } from "./user.action";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";


export class UserStateModel {
    user!: User[];
    loading!: boolean;
    error!: Error | any;
}

@State<UserStateModel>({
    name: 'userState',
    defaults: {
        user: [],
        loading: false,
        error: null
    }
})
@Injectable()
export class UserState {
    constructor(
        private userService: UsersService,
        private store: Store,
        private toastr: ToastrService
    ){}

    @Selector() //ici on va selectionner les données
    static selectStateData(state: UserStateModel) {
        return state.user;
    }

    @Selector() //
    static selectStateLoading(state: UserStateModel) {
        return state.loading;
    }

    @Selector() 
    static selectStateError(state: UserStateModel){
        return state.error;
    }

    @Action(GetUser) // ici on va faire les actions
    getAllUserState(ctx: StateContext<UserStateModel>) {
        const state = ctx.getState();
        return this.userService.getAllUsers().pipe(tap((returnData: any) => {
                ctx.patchState({
                    ...state,
                    user: returnData.data,
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

    @Action(AddUser)
    addUserState(ctx: StateContext<UserStateModel>, { payload }: AddUser) {
        const state = ctx.getState();
        return this.userService.createUser(payload).pipe(tap((returnData: any) => {
                this.toastr.success('User ajouté avec succès', 'Success');
                this.store.dispatch(new GetUser());
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

    @Action(UpdateUser)
    updateUserState(ctx: StateContext<UserStateModel>, { id, payload }: UpdateUser) {
        const state = ctx.getState();
        return this.userService.updateUser(id, payload).pipe(tap((returnData: any) => {
                this.toastr.success('User modifié avec succès', 'Success');
                this.store.dispatch(new GetUser());
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

    @Action(DeleteUser)
    deleteUserState(ctx: StateContext<UserStateModel>, { id }: DeleteUser) {
        const state = ctx.getState();
        return this.userService.deleteUser(id).pipe(tap((returnData: any) => {
                this.toastr.success('User supprimé avec succès', 'Success');
                this.store.dispatch(new GetUser());
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