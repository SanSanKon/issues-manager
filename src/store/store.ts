import { makeAutoObservable } from "mobx";

class AppStore {
    owner: string = '';
    repo: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    setOwner(owner: string) {
        this.owner = owner;
    }

    setRepo(repo: string) {
        this.repo = repo;
    }
}

export const appStore = new AppStore();