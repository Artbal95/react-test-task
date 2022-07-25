import {Action, AnyAction, ThunkAction} from "@reduxjs/toolkit";
import {RootState} from "../index";
import * as services from "../../service"

type ServiceType = typeof services

export type PayloadActionType<T, K extends keyof T> = Pick<T, K> & Action<string>

export type ReducerType<S> = (state: S, action: S & Action<string>) => S

export type Effect<T> = ThunkAction<void, RootState, ServiceType, T & Action<string>>