import { IEventSystem } from "../../ts-common/events";
import { DataCallback, DataDriver, DataEvents, Id, IDataItem, TreeCollection } from "../../ts-data";
import { TreeGridEvents } from "./types";
export declare class TreeGridCollection extends TreeCollection {
    constructor(config?: any, events?: IEventSystem<DataEvents | TreeGridEvents>);
    eachChild(id: Id, cb: any, direct?: boolean, checkItem?: (item: IDataItem) => boolean): void;
    getMaxLevel(): number;
    getLevel(id: string): number;
    serialize(driver?: DataDriver): any[];
    getPlainIndex(id: string): number;
    map(cb: DataCallback<IDataItem>, parent?: Id, direct?: boolean): IDataItem[];
    mapVisible(cb: DataCallback<IDataItem>, parent?: Id, direct?: boolean): IDataItem[];
    getId(index: number): string;
    protected _parse_data(data: any, parent?: string): void;
    protected _copy(id: Id, index: number, target?: TreeGridCollection, targetId?: Id, key?: number): Id;
    protected _addToOrder(_order: any, obj: any, index: number): void;
    private _checkItems;
}
